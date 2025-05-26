
"use client";

import type { User as FirebaseUser } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  sendEmailVerification, // Import sendEmailVerification
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
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Ensure auth is available before setting up listener
    if (auth && Object.keys(auth).length > 0) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // Optionally reload user to get latest emailVerified status
          // currentUser.reload().then(() => setUser(currentUser)).catch(console.error);
           setUser(currentUser);
        } else {
           setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Handle case where auth might not be initialized (e.g., Firebase config error)
      console.warn("AuthContext: Firebase Auth not available for onAuthStateChanged listener.");
      setLoading(false); // Stop loading, but user will be null
    }
  }, []);

  const loginWithEmail = async (email: string, pass: string): Promise<FirebaseUser | null> => {
    if (!auth || Object.keys(auth).length === 0) {
      toast({ variant: "destructive", title: "Login Failed", description: "Authentication service is not available." });
      return null;
    }
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      await userCredential.user.reload(); // Get the latest user data, including emailVerified

      if (!userCredential.user.emailVerified) {
        await sendEmailVerification(userCredential.user);
        toast({
          title: "Email Not Verified",
          description: `Your email (${userCredential.user.email}) is not verified. A new verification link has been sent. Please check your inbox (and spam folder) and click the link to verify before logging in.`,
          duration: 9000, // Longer duration for this important message
        });
        await signOut(auth); // Sign out the user
        // setUser(null); // onAuthStateChanged will handle this
        return null; // Indicate login failure
      }

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
     if (!auth || Object.keys(auth).length === 0) {
      toast({ variant: "destructive", title: "Signup Failed", description: "Authentication service is not available." });
      return null;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await sendEmailVerification(userCredential.user);
      toast({
        title: "Signup Successful!",
        description: `A verification email has been sent to ${userCredential.user.email}. Please check your inbox (and spam folder) to verify your account before logging in.`,
        duration: 9000, // Longer duration
      });
      await signOut(auth); // Sign out user, they need to verify first
      // setUser(null); // onAuthStateChanged will handle this
      router.push('/login'); // Redirect to login page after signup instructions
      return userCredential.user; // Return user for potential immediate use, though they are signed out
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
    if (!auth || Object.keys(auth).length === 0) {
      toast({ variant: "destructive", title: "Logout Failed", description: "Authentication service is not available." });
      return;
    }
    setLoading(true);
    try {
      await signOut(auth);
      // setUser(null); // onAuthStateChanged will handle this
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
    if (!auth || Object.keys(auth).length === 0) {
      toast({ variant: "destructive", title: "Password Reset Failed", description: "Authentication service is not available." });
      return false;
    }
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
