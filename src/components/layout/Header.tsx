
"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Film, Home, Star, Sparkles, Search as SearchIcon, LogIn, LogOut, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const { user, logoutUser, loading } = useAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home, authRequired: false },
    { href: '/favorites', label: 'Favorites', icon: Star, authRequired: true },
    { href: '/recommendations', label: 'Recommendations', icon: Sparkles, authRequired: true },
  ];

  const getAvatarFallback = (email: string | null | undefined) => {
    if (!email) return "U";
    return email.substring(0, 2).toUpperCase();
  };
  
  if (!isMounted) {
    return (
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Film size={32} />
            <span className="text-2xl font-bold">MovieVerse</span>
          </Link>
          <div className="w-1/3 h-10 bg-muted rounded-md animate-pulse" />
        </div>
      </header>
    );
  }
  
  // Hide header on login/signup pages
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <Film size={32} />
          <span className="text-2xl font-bold">MovieVerse</span>
        </Link>

        {user && (
          <nav className="flex items-center space-x-1 sm:space-x-2">
            {navItems.filter(item => !item.authRequired || (item.authRequired && user)).map((item) => (
              <Link key={item.href} href={item.href} legacyBehavior passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm sm:text-base text-foreground hover:bg-accent hover:text-accent-foreground px-2 sm:px-3 py-1 sm:py-2",
                    pathname === item.href && "bg-accent text-accent-foreground"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <item.icon className="mr-0 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>
        )}

        {user && (
          <form onSubmit={handleSearch} className="flex items-center w-full sm:w-auto max-w-xs">
            <Input
              type="search"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-0 h-9 sm:h-10"
              aria-label="Search movies"
            />
            <Button type="submit" variant="default" className="rounded-l-none h-9 sm:h-10" aria-label="Submit search">
              <SearchIcon size={18} sm:size={20} />
            </Button>
          </form>
        )}

        <div className="flex items-center space-x-2">
          {!loading && !user && (
            <>
              <Button asChild variant="outline" size="sm">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/signup">
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </Link>
              </Button>
            </>
          )}
          {user && (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || user.email || 'User'} />
                    <AvatarFallback>{getAvatarFallback(user.email)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.displayName || user.email?.split('@')[0] || 'User'}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logoutUser} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
