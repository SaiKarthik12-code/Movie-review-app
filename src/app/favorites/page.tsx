
"use client";

import { useFavorites } from '@/hooks/use-favorites';
import { getMovieById } from '@/data/movies';
import { MovieList } from '@/components/movies/MovieList';
import { Movie } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function FavoritesPageClientContent() {
  const { user, loading: authLoading } = useAuth();
  const { favorites, isMounted: favoritesMounted } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      // If auth check is done and no user, redirect to login
      // No need to fetch favorites
      setIsLoadingMovies(false);
      return;
    }

    if (favoritesMounted && user) {
      const fetchFavoriteMovies = async () => {
        setIsLoadingMovies(true);
        if (favorites.length === 0) {
          setFavoriteMovies([]);
          setIsLoadingMovies(false);
          return;
        }
        try {
          // Ensure IDs are valid before fetching
          const validFavoriteIds = favorites.filter(id => id && typeof id === 'string');
          const moviePromises = validFavoriteIds.map(id => getMovieById(id));
          const resolvedMoviesWithPotentialUndefined = await Promise.all(moviePromises);
          const validMovies = resolvedMoviesWithPotentialUndefined.filter((movie): movie is Movie => movie !== undefined);
          setFavoriteMovies(validMovies);
        } catch (error) {
          console.error("Error fetching favorite movies:", error);
          setFavoriteMovies([]); 
        } finally {
          setIsLoadingMovies(false);
        }
      };
      fetchFavoriteMovies();
    } else if (favoritesMounted && !user) {
      // Clear favorites if user logs out after component is mounted
      setFavoriteMovies([]);
      setIsLoadingMovies(false);
    }
  }, [user, authLoading, favorites, favoritesMounted, router]);

  if (authLoading || (!favoritesMounted && !authLoading && user)) { // Show loader if auth is loading OR if favorites not mounted yet but user exists
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
     return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Login to View Favorites</h2>
        <p className="text-muted-foreground mb-6">Please log in to see your favorite movies.</p>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }
  
  if (isLoadingMovies) {
     return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: favorites.length || 5 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }
  
  if (favoriteMovies.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your Favorites List is Empty</h2>
        <p className="text-muted-foreground mb-6">Start exploring and add movies you love!</p>
        <Button asChild>
          <Link href="/">Browse Movies</Link>
        </Button>
      </div>
    );
  }

  return <MovieList movies={favoriteMovies} emptyStateMessage="You haven't added any movies to your favorites yet, or there was an issue loading them." />;
}


export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Favorite Movies</h1>
      <FavoritesPageClientContent />
    </div>
  );
}
