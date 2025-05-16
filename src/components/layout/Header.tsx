"use client";

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Film, Home, Star, Sparkles, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

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
    { href: '/', label: 'Home', icon: Home },
    { href: '/favorites', label: 'Favorites', icon: Star },
    { href: '/recommendations', label: 'Recommendations', icon: Sparkles },
  ];

  if (!isMounted) {
    return (
      <header className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Film size={32} />
            <span className="text-2xl font-bold">MovieVerse</span>
          </Link>
          <div className="w-1/3 h-10 bg-muted rounded-md animate-pulse" /> {/* Placeholder for nav/search */}
        </div>
      </header>
    );
  }

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <Film size={32} />
          <span className="text-2xl font-bold">MovieVerse</span>
        </Link>

        <nav className="flex items-center space-x-2 sm:space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} legacyBehavior passHref>
              <Button
                variant="ghost"
                className={cn(
                  "text-foreground hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent text-accent-foreground"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <item.icon className="mr-0 sm:mr-2 h-5 w-5" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>

        <form onSubmit={handleSearch} className="flex items-center w-full sm:w-auto max-w-xs">
          <Input
            type="search"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-0"
            aria-label="Search movies"
          />
          <Button type="submit" variant="default" className="rounded-l-none" aria-label="Submit search">
            <SearchIcon size={20} />
          </Button>
        </form>
      </div>
    </header>
  );
}
