
"use client";

import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode} from 'react';
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

const PUBLIC_PATHS = ["/login", "/signup", "/forgot-password"];

export function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user && !PUBLIC_PATHS.includes(pathname)) {
        router.replace("/login");
      } else if (user && PUBLIC_PATHS.includes(pathname)) {
        router.replace("/"); 
      }
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user && !PUBLIC_PATHS.includes(pathname)) {
    return (
        <div className="flex justify-center items-center min-h-screen">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      );
  }
  
  return <>{children}</>;
}
