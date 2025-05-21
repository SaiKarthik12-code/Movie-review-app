
import type { Movie } from '@/lib/types';

// Initial mock movie data (provides base structure and fallback)
const baseMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A thief who steals information by entering people\'s dreams takes on the inverse task of planting an idea into a target\'s subconscious.',
    genre: 'Sci-Fi,Action', // TMDB genres for Inception: Action, Science Fiction, Adventure
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2010,
    rating: 8.8, // IMDb rating
    durationMinutes: 148,
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
  },
  {
    id: '2',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 1994,
    rating: 9.3, // IMDb rating
    durationMinutes: 142,
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action,Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2008,
    rating: 9.0, // IMDb rating
    durationMinutes: 152,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: 'Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    releaseYear: 1994,
    rating: 8.9, // IMDb rating
    durationMinutes: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
  },
  {
    id: '5',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    genre: 'Drama,Romance',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    releaseYear: 1994,
    rating: 8.8, // IMDb rating
    durationMinutes: 142,
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Action,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    releaseYear: 1999,
    rating: 8.7, // IMDb rating
    durationMinutes: 136,
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: '7',
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    genre: 'Animation,Adventure,Family',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    releaseYear: 2001,
    rating: 8.6, // IMDb rating
    durationMinutes: 125,
    director: 'Hayao Miyazaki',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
  },
  {
    id: '8',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    genre: 'Thriller,Comedy,Drama', 
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 8.5, // IMDb rating
    durationMinutes: 132,
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: '9',
    title: 'The Grand Budapest Hotel',
    description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
    genre: 'Comedy,Drama,Adventure',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    releaseYear: 2014,
    rating: 8.1, // IMDb rating
    durationMinutes: 99,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
  {
    id: '10',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    genre: 'Action,Adventure,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    releaseYear: 2015,
    rating: 8.1, // IMDb rating
    durationMinutes: 120,
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
  },
   {
    id: '11',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi,Drama,Adventure',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2014,
    rating: 8.7, // IMDb rating
    durationMinutes: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: '12',
    title: 'Whiplash',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    genre: 'Drama,Music',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 2014,
    rating: 8.5, // IMDb rating
    durationMinutes: 106,
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
  },
  {
    id: '13',
    title: 'Coco',
    description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
    genre: 'Animation,Adventure,Family',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    releaseYear: 2017,
    rating: 8.4, // IMDb rating
    durationMinutes: 105,
    director: 'Lee Unkrich, Adrian Molina',
    cast: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
  },
  {
    id: '14',
    title: 'Joker',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    genre: 'Thriller,Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 8.3, // IMDb rating, was 8.4
    durationMinutes: 122,
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    id: '15',
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    genre: 'Action,Adventure,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2019,
    rating: 8.4, // IMDb rating
    durationMinutes: 181,
    director: 'Anthony Russo, Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
  }
];

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_API_URL = `http://www.omdbapi.com/`;

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL_BASE = `https://api.themoviedb.org/3`;

async function fetchFromOMDB(params: Record<string, string>): Promise<any> {
  if (!OMDB_API_KEY) {
    // console.log("OMDB_API_KEY not available, skipping OMDB fetch.");
    return null;
  }
  const queryParams = new URLSearchParams({ ...params, apikey: OMDB_API_KEY });
  try {
    // console.log(`Fetching from OMDB: ${OMDB_API_URL}?${queryParams}`);
    const response = await fetch(`${OMDB_API_URL}?${queryParams}`);
    if (!response.ok) {
      console.error(`OMDB API error for params ${JSON.stringify(params)}: ${response.statusText} (Status: ${response.status})`);
      return null;
    }
    const data = await response.json();
    if (data.Response === "False") {
      // console.warn(`OMDB API returned Response: False for params ${JSON.stringify(params)}. Error: ${data.Error}`);
      return null;
    }
    // console.log(`OMDB Data received for ${params.t || params.i}:`, data.Title);
    return data;
  } catch (error) {
    console.error(`Network error fetching from OMDB for params ${JSON.stringify(params)}:`, error);
    return null;
  }
}

async function fetchTMDBData(endpoint: string, params: Record<string, string> = {}): Promise<any> {
  if (!TMDB_API_KEY) {
    // console.log("TMDB_API_KEY not available, skipping TMDB fetch.");
    return null;
  }
  const queryParams = new URLSearchParams({ ...params, api_key: TMDB_API_KEY, language: 'en-US' });
  try {
    // console.log(`Fetching from TMDB: ${TMDB_API_URL_BASE}${endpoint}?${queryParams}`);
    const response = await fetch(`${TMDB_API_URL_BASE}${endpoint}?${queryParams}`);
    if (!response.ok) {
      console.error(`TMDB API error for endpoint ${endpoint} with params ${JSON.stringify(params)}: ${response.statusText} (Status: ${response.status})`);
      return null;
    }
    const data = await response.json();
    // console.log(`TMDB Data received for ${endpoint}:`, endpoint.includes('search') ? `${data.results?.length} results` : data.title || data.name);
    return data;
  } catch (error) {
    console.error(`Network error fetching from TMDB for endpoint ${endpoint} with params ${JSON.stringify(params)}:`, error);
    return null;
  }
}

let tmdbGenresMap: Record<number, string> | null = null;

async function getTMDBGenresMap(): Promise<Record<number, string>> {
  if (tmdbGenresMap) {
    return tmdbGenresMap;
  }
  if (!TMDB_API_KEY) {
    console.warn("TMDB_API_KEY not available, cannot fetch genres.");
    return {};
  }
  console.log("[Genres] Fetching TMDB genres map.");
  const data = await fetchTMDBData('/genre/movie/list');
  if (data && data.genres) {
    tmdbGenresMap = data.genres.reduce((acc: Record<number, string>, genre: any) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
    console.log("[Genres] TMDB genres map fetched and cached.");
    return tmdbGenresMap;
  }
  console.warn("[Genres] Failed to fetch TMDB genres map.");
  return {};
}


function parseDuration(runtimeStr?: string): number | undefined {
  if (!runtimeStr || runtimeStr === "N/A") return undefined;
  const minutes = parseInt(runtimeStr.replace(/\s*min/i, ""));
  return isNaN(minutes) ? undefined : minutes;
}

function parseRating(ratingStr?: string): number | undefined {
  if (!ratingStr || ratingStr === "N/A") return undefined;
  const rating = parseFloat(ratingStr);
  return isNaN(rating) ? undefined : rating;
}

function parseYear(yearStr?: string | number): number {
    if (!yearStr || yearStr === "N/A") return 0;
    if (typeof yearStr === 'number') {
        return (yearStr > 1800 && yearStr < new Date().getFullYear() + 10) ? yearStr : 0;
    }
    // Handles "YYYY-MM-DD" or "YYYY"
    const match = yearStr.match(/^(\d{4})/);
    if (match && match[1]) {
        const year = parseInt(match[1], 10);
        return (year > 1800 && year < new Date().getFullYear() + 10) ? year : 0;
    }
    const parsedDateYear = new Date(yearStr).getFullYear();
    if (!isNaN(parsedDateYear) && parsedDateYear > 1800 && parsedDateYear < new Date().getFullYear() + 10) {
        return parsedDateYear;
    }
    return 0;
}

async function transformTMDBMovieToAppMovie(tmdbId: string | number, genresMap: Record<number, string>): Promise<Movie | undefined> {
  if (!TMDB_API_KEY) return undefined;

  console.log(`[TMDB Detail] Fetching full details for TMDB ID: ${tmdbId}`);
  const movieDetails = await fetchTMDBData(`/movie/${tmdbId}`);
  if (!movieDetails) return undefined;

  const credits = await fetchTMDBData(`/movie/${tmdbId}/credits`);
  const videos = await fetchTMDBData(`/movie/${tmdbId}/videos`);

  const director = credits?.crew?.find((person: any) => person.job === 'Director')?.name;
  const cast = credits?.cast?.slice(0, 5).map((actor: any) => actor.name) || [];
  
  const officialTrailer = videos?.results?.find((v: any) => v.site === 'YouTube' && v.type === 'Trailer' && v.official === true);
  const trailer = officialTrailer || videos?.results?.find((v: any) => v.site === 'YouTube' && v.type === 'Trailer');
  const videoUrl = trailer?.key ? `https://www.youtube.com/embed/${trailer.key}` : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return {
    id: String(movieDetails.id),
    imdbID: movieDetails.imdb_id,
    title: movieDetails.title || 'N/A',
    description: movieDetails.overview || 'No description available.',
    genre: movieDetails.genres?.map((g: any) => g.name).join(', ') || 'N/A',
    posterUrl: movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : 'https://placehold.co/300x450.png',
    videoUrl,
    releaseYear: parseYear(movieDetails.release_date),
    rating: parseFloat((movieDetails.vote_average || 0).toFixed(1)), // TMDB rating is 0-10
    durationMinutes: movieDetails.runtime || undefined,
    director: director || undefined,
    cast: cast.length > 0 ? cast : undefined,
  };
}


async function fetchAndEnrichMovieData(baseMovie: Movie): Promise<Movie> {
  let movie = { ...baseMovie };

  if (OMDB_API_KEY && OMDB_API_KEY.trim() !== "") {
    const omdbParams: Record<string, string> = { plot: 'full' };
    if (movie.imdbID) omdbParams.i = movie.imdbID;
    else if (movie.title) {
      omdbParams.t = movie.title;
      if (movie.releaseYear) omdbParams.y = String(movie.releaseYear);
    }

    if (omdbParams.t || omdbParams.i) {
        const omdbData = await fetchFromOMDB(omdbParams);
        if (omdbData) {
          movie = {
            ...movie,
            imdbID: omdbData.imdbID || movie.imdbID,
            title: (omdbData.Title && omdbData.Title !== "N/A") ? omdbData.Title : movie.title,
            description: (omdbData.Plot && omdbData.Plot !== "N/A") ? omdbData.Plot : movie.description,
            genre: (omdbData.Genre && omdbData.Genre !== "N/A") ? omdbData.Genre.split(',').map((g:string)=>g.trim()).slice(0,2).join(',') : movie.genre,
            posterUrl: (omdbData.Poster && omdbData.Poster !== "N/A") ? omdbData.Poster : movie.posterUrl,
            releaseYear: parseYear(omdbData.Released) || movie.releaseYear,
            rating: parseRating(omdbData.imdbRating) || movie.rating,
            durationMinutes: parseDuration(omdbData.Runtime) || movie.durationMinutes,
            director: (omdbData.Director && omdbData.Director !== "N/A") ? omdbData.Director : movie.director,
            cast: (omdbData.Actors && omdbData.Actors !== "N/A") ? omdbData.Actors.split(',').map((actor: string) => actor.trim()) : movie.cast,
          };
        }
    }
  }

  if (TMDB_API_KEY && TMDB_API_KEY.trim() !== "" && (!movie.videoUrl || movie.videoUrl.includes('gtv-videos-bucket/sample') || movie.videoUrl.includes('placehold.co'))) {
    const tmdbMovieId = movie.imdbID 
      ? (await fetchTMDBData(`/find/${movie.imdbID}`, { external_source: 'imdb_id' }))?.movie_results?.[0]?.id
      : (await fetchTMDBData('/search/movie', { query: movie.title, year: String(movie.releaseYear) }))?.results?.[0]?.id;

    if (tmdbMovieId) {
      const videos = await fetchTMDBData(`/movie/${tmdbMovieId}/videos`);
      const officialTrailer = videos?.results?.find((v:any) => v.site === 'YouTube' && v.type === 'Trailer' && v.official === true);
      const trailer = officialTrailer || videos?.results?.find((v:any) => v.site === 'YouTube' && v.type === 'Trailer');
      if (trailer?.key) {
        movie.videoUrl = `https://www.youtube.com/embed/${trailer.key}`;
      }
    }
  }
  return movie;
}

const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 50));

let hasLoggedOMDBKeyStatus = false;
let hasLoggedTMDBKeyStatus = false;

export const getMovies = async (): Promise<Movie[]> => {
  await simulateDelay();

  if (!hasLoggedOMDBKeyStatus) {
    console.log(OMDB_API_KEY && OMDB_API_KEY.trim() !== "" ? "[OMDB] Key found. OMDB enrichment will be attempted." : "[OMDB] Key NOT found or empty. OMDB enrichment will be skipped.");
    hasLoggedOMDBKeyStatus = true;
  }

  if (!hasLoggedTMDBKeyStatus) {
    console.log(TMDB_API_KEY && TMDB_API_KEY.trim() !== "" ? "[TMDB] Key found. TMDB functionalities will be attempted." : "[TMDB] Key NOT found or empty. TMDB functionalities will be skipped.");
    hasLoggedTMDBKeyStatus = true;
  }
  // console.log("[getMovies] Enriching base movies list.");
  const enrichedMovies = await Promise.all(baseMovies.map(fetchAndEnrichMovieData));
  // console.log(`[getMovies] Finished enriching. Total movies: ${enrichedMovies.length}`);
  return enrichedMovies;
};

export const getMovieById = async (id: string): Promise<Movie | undefined> => {
  await simulateDelay();
  console.log(`[getMovieById] Requested ID: ${id}`);

  // Check if ID is purely numeric (potential TMDB ID)
  if (/^\d+$/.test(id) && TMDB_API_KEY) {
    console.log(`[getMovieById] ID ${id} is numeric, attempting TMDB fetch.`);
    const genresMap = await getTMDBGenresMap();
    const tmdbMovie = await transformTMDBMovieToAppMovie(id, genresMap);
    if (tmdbMovie) {
      console.log(`[getMovieById] Found movie in TMDB: ${tmdbMovie.title}`);
      return tmdbMovie;
    }
    console.warn(`[getMovieById] Movie with TMDB ID ${id} not found via TMDB API, or API key missing.`);
  }
  
  // Fallback to original baseMovies logic
  console.log(`[getMovieById] ID ${id} not TMDB numeric or TMDB fetch failed, checking baseMovies.`);
  const baseMovieToEnrich = baseMovies.find(movie => movie.id === id);
  if (!baseMovieToEnrich) {
    console.warn(`[getMovieById] Movie with ID ${id} not found in baseMovies.`);
    return undefined;
  }
  console.log(`[getMovieById] Found movie in baseMovies: ${baseMovieToEnrich.title}. Enriching...`);
  return fetchAndEnrichMovieData(baseMovieToEnrich);
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  await simulateDelay();
  const lowerQuery = query.toLowerCase();
  console.log(`[Search] Received query: "${query}", Lowercase: "${lowerQuery}"`);

  if (!TMDB_API_KEY) {
    console.warn("[Search] TMDB_API_KEY is not available. Search will be empty.");
    return [];
  }

  const genresMap = await getTMDBGenresMap();
  const searchData = await fetchTMDBData('/search/movie', { query, include_adult: 'false' });

  if (searchData && searchData.results) {
    console.log(`[Search] TMDB API returned ${searchData.results.length} results for query "${query}".`);
    const movies: Movie[] = searchData.results.map((tmdbMovie: any): Movie => {
      const genreNames = tmdbMovie.genre_ids?.map((id: number) => genresMap[id]).filter(Boolean).slice(0, 2).join(', ') || 'N/A';
      return {
        id: String(tmdbMovie.id),
        title: tmdbMovie.title || "N/A",
        description: tmdbMovie.overview || 'No description available.',
        posterUrl: tmdbMovie.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` : 'https://placehold.co/300x450.png',
        releaseYear: parseYear(tmdbMovie.release_date),
        rating: parseFloat((tmdbMovie.vote_average || 0).toFixed(1)), // TMDB rating is 0-10
        genre: genreNames,
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Placeholder
        // These fields will be populated by getMovieById if the detail page is visited
        durationMinutes: undefined, 
        director: undefined,
        cast: undefined,
        imdbID: undefined, 
      };
    }).filter((movie: Movie) => movie.title !== "N/A" && movie.releaseYear !== 0); // Filter out results with no title or year
    
    console.log(`[Search] Mapped ${movies.length} valid movies for query "${query}".`);
    return movies;
  }
  console.warn(`[Search] No results or error from TMDB API for query "${query}".`);
  return [];
};


export const getMoviesByGenre = async (genre: string): Promise<Movie[]> => {
  await simulateDelay();
  const lowerGenre = genre.toLowerCase();
  console.log(`[getMoviesByGenre] Requested genre: ${genre}`);

  const moviesInGenre = baseMovies.filter(movie => {
    const currentMovieGenre = (movie.genre || '').toLowerCase();
    return currentMovieGenre === lowerGenre ||
           currentMovieGenre.split(',').map(g => g.trim()).includes(lowerGenre);
  });
  
  if (moviesInGenre.length === 0) {
    console.log(`[getMoviesByGenre] No movies found in baseMovies for genre: ${genre}. Consider TMDB genre search if needed.`);
    // Potentially, you could add a TMDB search by genre here if baseMovies yield no results.
    // For now, it only searches baseMovies for genre pages.
    return [];
  }

  // console.log(`[getMoviesByGenre] Found ${moviesInGenre.length} movies in base for genre ${genre}. Enriching...`);
  const enrichedMoviesInGenre = await Promise.all(moviesInGenre.map(fetchAndEnrichMovieData));
  return enrichedMoviesInGenre;
};

export const getGenres = async (): Promise<string[]> => {
  await simulateDelay();
  // For site navigation, using TMDB genres is more comprehensive
  if (TMDB_API_KEY) {
    const genresMap = await getTMDBGenresMap();
    const genreNames = Object.values(genresMap);
    if (genreNames.length > 0) {
      console.log("[getGenres] Returning genres from TMDB.");
      return genreNames.sort();
    }
  }
  // Fallback to genres from baseMovies if TMDB fails or key not present
  console.log("[getGenres] Falling back to genres from baseMovies.");
  const allMovies = await getMovies(); // Uses enriched movies to get the most accurate genre list
  const genres = new Set<string>();
  allMovies.forEach(movie => {
    if (movie.genre) {
      movie.genre.split(',').forEach(g => {
        const trimmedGenre = g.trim();
        if (trimmedGenre) genres.add(trimmedGenre);
      });
    }
  });
  return Array.from(genres).filter(g => g).sort();
};
