import { getMovies, getGenres, getMoviesByGenre } from '@/data/movies';
import { MovieList } from '@/components/movies/MovieList';
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  const allGenres = await getGenres();
  // For a more Netflix-like feel, fetch a limited number of movies per genre for the homepage
  const moviesPerGenre = 6; 

  const genreSections = await Promise.all(
    allGenres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre);
      return {
        genre,
        movies: movies.slice(0, moviesPerGenre),
      };
    })
  );

  // Example: A "Trending" section could be curated or use a different logic
  const allMovies = await getMovies();
  const trendingMovies = allMovies.sort((a,b) => b.rating - a.rating).slice(0, moviesPerGenre);


  return (
    <div className="space-y-12">
      {/* Trending Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary">Trending Now</h2>
        <MovieList movies={trendingMovies} />
      </section>
      <Separator />

      {/* Genre Sections */}
      {genreSections.filter(section => section.movies.length > 0).map((section) => (
        <section key={section.genre}>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary">{section.genre}</h2>
          <MovieList movies={section.movies} />
        </section>
      ))}

      {genreSections.length === 0 && !trendingMovies.length && (
         <p className="text-center text-muted-foreground text-xl py-20">No movies available at the moment. Please check back later.</p>
      )}
    </div>
  );
}
