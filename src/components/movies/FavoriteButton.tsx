
"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface FavoriteButtonProps {
  movieId: string;
  movieTitle?: string;
  className?: string;
}

export function FavoriteButton({ movieId, movieTitle, className }: FavoriteButtonProps) {
  const { user, loading: authLoading } = useAuth();
  const { isFavorite, toggleFavorite, isMounted } = useFavorites();
  const [isFav, setIsFav] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isMounted && user) { // Only check/set favorite status if user is logged in
      setIsFav(isFavorite(movieId));
    } else if (isMounted && !user) {
      setIsFav(false); // Not favorited if not logged in
    }
  }, [isMounted, isFavorite, movieId, user]);
  
  if (!isMounted || authLoading) {
    return <Button variant="ghost" size="icon" className={cn("text-muted-foreground", className)} disabled><Heart size={24} /></Button>;
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to add movies to your favorites.",
        action: (
          <Button onClick={() => router.push('/login')} size="sm">
            Login
          </Button>
        ),
      });
      return;
    }

    toggleFavorite(movieId, movieTitle); // This already handles toast internally
    setIsFav(prev => !prev); 
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleFavorite}
      className={cn(
        "transition-colors duration-200 ease-in-out",
        isFav && user ? "text-destructive hover:text-destructive/80" : "text-muted-foreground hover:text-destructive/80",
        className
      )}
      aria-label={isFav && user ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFav && user}
      disabled={authLoading} // Disable if auth state is still loading
    >
      <Heart size={24} fill={isFav && user ? "currentColor" : "none"} />
    </Button>
  );
}
