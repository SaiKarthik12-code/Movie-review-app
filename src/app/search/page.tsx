import { searchMovies } from '@/data/movies';
import { MovieList } from '@/components/movies/MovieList';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SearchPageProps {
  searchParams: { query?: string };
}

async function SearchResults({ query }: { query: string }) {
  const movies = await searchMovies(query);
  return (
    <MovieList 
      movies={movies} 
      emptyStateMessage={`No results found for "${query}". Try a different search term.`}
    />
  );
}

function SearchResultsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query || '';

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        {query ? `Search Results for "${query}"` : 'Search Movies'}
      </h1>
      {query ? (
        <Suspense fallback={<SearchResultsSkeleton />}>
          <SearchResults query={query} />
        </Suspense>
      ) : (
        <p className="text-muted-foreground text-lg">
          Please enter a search term in the bar above to find movies.
        </p>
      )}
    </div>
  );
}
