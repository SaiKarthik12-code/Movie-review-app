import type { Movie } from '@/lib/types';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  emptyStateMessage?: string;
}

export function MovieList({ movies, emptyStateMessage = "No movies found." }: MovieListProps) {
  if (movies.length === 0) {
    return <p className="text-center text-muted-foreground text-lg py-10">{emptyStateMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
