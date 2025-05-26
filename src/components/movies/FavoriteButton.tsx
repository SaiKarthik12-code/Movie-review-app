"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';
import { useEffect } from 'react'; // Keep useEffect if needed for other side effects
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
  const { toast } = useToast();
  const router = useRouter();

  // Directly use the favorite status from the hook
  const isFav = isFavorite(movieId);

  // useEffect is no longer needed for state synchronization,
  // but can be kept for other purposes if necessary.
  useEffect(() => {
    // Example: log favorite status when it changes
    // console.log(`Favorite status for ${movieTitle} (${movieId}): ${isFav}`);
  }, [isFav, movieId, movieTitle]); // Depend on isFav

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

    // toggleFavorite updates the global state in useFavorites.
    // This will cause a re-render, and the `isFav` variable above will automatically
    // reflect the updated favorite status.
    toggleFavorite(movieId, movieTitle);
    // Removed the local setIsFav call
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleFavorite}
      className={cn(
        "transition-colors duration-200 ease-in-out",
        // isFav is now directly from the hook
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
