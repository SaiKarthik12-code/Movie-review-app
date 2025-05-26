
"use client";

import type { User as FirebaseUser } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail, // Renamed to avoid conflict
  type AuthError
} from 'firebase/auth';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<FirebaseUser | null>;
  logoutUser: () => Promise<void>;
  signUpWithEmail: (email: string, pass: string) => Promise<FirebaseUser | null>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>; // Changed return type
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email: string, pass: string): Promise<FirebaseUser | null> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      setUser(userCredential.user);
      toast({ title: "Logged In", description: "Successfully logged in!" });
      router.push('/'); 
      return userCredential.user;
    } catch (error) {
      const authError = error as AuthError;
      console.error("Login error:", authError);
      toast({ variant: "destructive", title: "Login Failed", description: authError.message || "Could not log in." });
      return null;
    } finally {
      setLoading(false);
    }
  };
  
  const signUpWithEmail = async (email: string, pass: string): Promise<FirebaseUser | null> => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      setUser(userCredential.user);
      toast({ title: "Signed Up", description: "Successfully signed up and logged in!" });
      router.push('/'); 
      return userCredential.user;
    } catch (error) {
      const authError = error as AuthError;
      console.error("Signup error:", authError);
      toast({ variant: "destructive", title: "Signup Failed", description: authError.message || "Could not sign up." });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      toast({ title: "Logged Out", description: "Successfully logged out." });
      router.push('/login'); 
    } catch (error) {
      const authError = error as AuthError;
      console.error("Logout error:", authError);
      toast({ variant: "destructive", title: "Logout Failed", description: authError.message || "Could not log out." });
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordResetEmail = async (email: string): Promise<boolean> => {
    setLoading(true);
    try {
      await firebaseSendPasswordResetEmail(auth, email);
      toast({ 
        title: "Password Reset Email Sent", 
        description: "If an account exists for this email, a reset link has been sent. Please check your inbox (and spam folder)." 
      });
      return true;
    } catch (error) {
      const authError = error as AuthError;
      console.error("Password reset error:", authError);
      // Avoid telling user if email doesn't exist for security reasons
      if (authError.code === 'auth/user-not-found') {
         toast({ 
          title: "Password Reset Email Sent", 
          description: "If an account exists for this email, a reset link has been sent. Please check your inbox (and spam folder)." 
         });
      } else {
        toast({ variant: "destructive", title: "Password Reset Failed", description: authError.message || "Could not send reset email." });
      }
      return false;
    } finally {
      setLoading(false);
    }
  };


  return (
    <AuthContext.Provider value={{ user, loading, loginWithEmail, logoutUser, signUpWithEmail, sendPasswordResetEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
