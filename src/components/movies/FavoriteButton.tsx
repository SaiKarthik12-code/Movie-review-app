"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FavoriteButtonProps {
  movieId: string;
  movieTitle?: string;
  className?: string;
}

export function FavoriteButton({ movieId, movieTitle, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isMounted } = useFavorites();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (isMounted) {
      setIsFav(isFavorite(movieId));
    }
  }, [isMounted, isFavorite, movieId]);
  
  if (!isMounted) {
    // Render a placeholder or nothing until mounted to avoid hydration issues
    return <Button variant="ghost" size="icon" className={cn("text-muted-foreground", className)} disabled><Heart size={24} /></Button>;
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if button is on a card link
    e.stopPropagation();
    toggleFavorite(movieId, movieTitle);
    setIsFav(!isFav); // Immediately update UI state
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleFavorite}
      className={cn(
        "transition-colors duration-200 ease-in-out",
        isFav ? "text-destructive hover:text-destructive/80" : "text-muted-foreground hover:text-destructive/80",
        className
      )}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFav}
    >
      <Heart size={24} fill={isFav ? "currentColor" : "none"} />
    </Button>
  );
}
