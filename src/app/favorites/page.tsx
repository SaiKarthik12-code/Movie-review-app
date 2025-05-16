"use client";

import { useFavorites } from '@/hooks/use-favorites';
import { getMovieById, getMovies } from '@/data/movies'; // We might need getMovies to fetch all then filter if getMovieById is too slow in loop
import { MovieList } from '@/components/movies/MovieList';
import { Movie } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function FavoritesPageClientContent() {
  const { favorites, isMounted } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isMounted) {
      const fetchFavoriteMovies = async () => {
        setIsLoading(true);
        // In a real app, this would be a single API call: /api/movies?ids=1,2,3
        // For mock data, we fetch all and filter, or fetch one by one (less efficient but ok for mock)
        const allMovies = await getMovies();
        const movies = allMovies.filter(movie => favorites.includes(movie.id));
        setFavoriteMovies(movies);
        setIsLoading(false);
      };
      fetchFavoriteMovies();
    }
  }, [favorites, isMounted]);

  if (!isMounted || isLoading) {
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

  return <MovieList movies={favoriteMovies} emptyStateMessage="You haven't added any movies to your favorites yet." />;
}


export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Favorite Movies</h1>
      <FavoritesPageClientContent />
    </div>
  );
}
