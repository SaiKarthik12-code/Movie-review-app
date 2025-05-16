import { getMovieById, getMoviesByGenre } from '@/data/movies';
import { MoviePlayer } from '@/components/movies/MoviePlayer';
import { Badge } from '@/components/ui/badge';
import { Star, CalendarDays, Clock, Video, Users, User } from 'lucide-react';
import Image from 'next/image';
import { FavoriteButton } from '@/components/movies/FavoriteButton';
import { MovieList } from '@/components/movies/MovieList';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MoviePageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: MoviePageProps) {
  const movie = await getMovieById(params.id);
  if (!movie) {
    return { title: 'Movie Not Found' };
  }
  return {
    title: `${movie.title} - MovieVerse`,
    description: movie.description,
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">Movie Not Found</h1>
        <p className="text-muted-foreground">The movie you are looking for does not exist or may have been removed.</p>
        <Button asChild className="mt-6">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    );
  }

  const relatedMovies = (await getMoviesByGenre(movie.genre))
    .filter(m => m.id !== movie.id)
    .slice(0, 5); // Show up to 5 related movies

  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <Image
            src={movie.posterUrl}
            alt={`Poster for ${movie.title}`}
            width={400}
            height={600}
            className="w-full object-cover rounded-lg shadow-xl"
            data-ai-hint={`${movie.genre.toLowerCase()} film`}
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-primary">{movie.title}</h1>
            <FavoriteButton movieId={movie.id} movieTitle={movie.title} className="mt-1" />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="default">{movie.genre}</Badge>
            <span className="flex items-center text-muted-foreground"><CalendarDays size={16} className="mr-1" /> {movie.releaseYear}</span>
            <span className="flex items-center text-muted-foreground"><Clock size={16} className="mr-1" /> {movie.durationMinutes} min</span>
            <span className="flex items-center text-amber-400 font-semibold"><Star size={16} className="mr-1 fill-current" /> {movie.rating.toFixed(1)}</span>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">{movie.description}</p>
          
          {movie.director && (
            <p className="text-sm text-muted-foreground"><strong className="text-foreground/90">Director:</strong> {movie.director}</p>
          )}
          {movie.cast && movie.cast.length > 0 && (
            <p className="text-sm text-muted-foreground"><strong className="text-foreground/90">Cast:</strong> {movie.cast.join(', ')}</p>
          )}

          <Button size="lg" className="mt-4 bg-accent hover:bg-accent/90 w-full sm:w-auto">
            <Video size={20} className="mr-2" /> Play Movie
          </Button>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Watch Trailer / Movie</h2>
        <MoviePlayer videoUrl={movie.videoUrl} title={movie.title} />
      </section>

      {relatedMovies.length > 0 && (
        <>
          <Separator />
          <section>
            <h2 className="text-2xl font-semibold mb-6">Related Movies</h2>
            <MovieList movies={relatedMovies} />
          </section>
        </>
      )}
    </div>
  );
}

// This function enables static generation for all movie pages
export async function generateStaticParams() {
  const { getMovies } = await import('@/data/movies');
  const movies = await getMovies();
  return movies.map((movie) => ({
    id: movie.id,
  }));
}
