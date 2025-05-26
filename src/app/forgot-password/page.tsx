
"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/context/AuthContext";
import { Loader2, MailQuestion, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address."),
});

type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { sendPasswordResetEmail, loading, user } = useAuth();
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (user && !loading) {
      router.replace("/"); // Redirect if already logged in
    }
  }, [user, loading, router]);

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = async (data) => {
    const success = await sendPasswordResetEmail(data.email);
    if (success) {
      setEmailSent(true);
    }
  };

  if (loading && !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  if (user) return null; 

  if (emailSent) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <MailQuestion className="mx-auto h-16 w-16 text-primary mb-4" />
            <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
            <CardDescription>
              If an account exists for the email you entered, a password reset link has been sent. Please check your inbox and spam folder.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <Button asChild className="w-full">
                <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Back to Login
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <MailQuestion className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-3xl font-bold text-primary">Forgot Password?</CardTitle>
          <CardDescription>Enter your email address and we&apos;ll send you a link to reset your password.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <MailQuestion className="mr-2 h-4 w-4" />
                )}
                Send Reset Link
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-sm text-muted-foreground">
                Remembered your password?{" "}
                <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/login">Log in</Link>
                </Button>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
