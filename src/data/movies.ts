
import type { Movie } from '@/lib/types';

// Initial mock movie data with IMDb IDs for better enrichment
const baseMovies: Movie[] = [
  {
    id: '1',
    imdbID: 'tt1375666',
    title: 'Inception',
    description: 'A thief who steals information by entering people\'s dreams takes on the inverse task of planting an idea into a target\'s subconscious.',
    genre: 'Sci-Fi,Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2010,
    rating: 8.8,
    durationMinutes: 148,
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
  },
  {
    id: '2',
    imdbID: 'tt0111161',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 1994,
    rating: 9.3,
    durationMinutes: 142,
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  {
    id: '3',
    imdbID: 'tt0468569',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action,Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2008,
    rating: 9.0,
    durationMinutes: 152,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    id: '4',
    imdbID: 'tt0110912',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: 'Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    releaseYear: 1994,
    rating: 8.9,
    durationMinutes: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
  },
  {
    id: '5',
    imdbID: 'tt0109830',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    genre: 'Drama,Romance',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    releaseYear: 1994,
    rating: 8.8,
    durationMinutes: 142,
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
  },
  {
    id: '6',
    imdbID: 'tt0133093',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Action,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    releaseYear: 1999,
    rating: 8.7,
    durationMinutes: 136,
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: '7',
    imdbID: 'tt0245429',
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    genre: 'Animation,Adventure,Family',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    releaseYear: 2001,
    rating: 8.6,
    durationMinutes: 125,
    director: 'Hayao Miyazaki',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
  },
  {
    id: '8',
    imdbID: 'tt6751668',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    genre: 'Thriller,Comedy,Drama', 
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 8.5,
    durationMinutes: 132,
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: '9',
    imdbID: 'tt2278388',
    title: 'The Grand Budapest Hotel',
    description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
    genre: 'Comedy,Drama,Adventure',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    releaseYear: 2014,
    rating: 8.1,
    durationMinutes: 99,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
  {
    id: '10',
    imdbID: 'tt1392190',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    genre: 'Action,Adventure,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    releaseYear: 2015,
    rating: 8.1,
    durationMinutes: 120,
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
  },
   {
    id: '11',
    imdbID: 'tt0816692',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi,Drama,Adventure',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2014,
    rating: 8.7,
    durationMinutes: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: '12',
    imdbID: 'tt2582802',
    title: 'Whiplash',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    genre: 'Drama,Music',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 2014,
    rating: 8.5,
    durationMinutes: 106,
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
  },
  {
    id: '13',
    imdbID: 'tt2380307',
    title: 'Coco',
    description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
    genre: 'Animation,Adventure,Family',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    releaseYear: 2017,
    rating: 8.4,
    durationMinutes: 105,
    director: 'Lee Unkrich, Adrian Molina',
    cast: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
  },
  {
    id: '14',
    imdbID: 'tt7286456',
    title: 'Joker',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    genre: 'Thriller,Crime,Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 8.3,
    durationMinutes: 122,
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    id: '15',
    imdbID: 'tt4154796',
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    genre: 'Action,Adventure,Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2019,
    rating: 8.4,
    durationMinutes: 181,
    director: 'Anthony Russo, Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
  }
];

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const OMDB_API_URL = 'https://www.omdbapi.com/';
const TMDB_API_URL_BASE = 'https://api.themoviedb.org/3';


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
    console.error(`Network error fetching from OMDB for params ${JSON.stringify(params)}:`, String(error));
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
    console.error(`Network error fetching from TMDB for endpoint ${endpoint} with params ${JSON.stringify(params)}:`, String(error));
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
        return (yearStr > 1800 && yearStr < new Date().getFullYear() + 20) ? yearStr : 0;
    }
    const yearString = String(yearStr);
    // Handles "YYYY-MM-DD" or "YYYY"
    const match = yearString.match(/^(\d{4})/);
    if (match && match[1]) {
        const year = parseInt(match[1], 10);
        return (year > 1800 && year < new Date().getFullYear() + 20) ? year : 0;
    }
    // Handles cases where yearStr might be just "YYYY" or a full date that Date.parse can handle
    const parsedDateYear = new Date(yearString).getFullYear();
    if (!isNaN(parsedDateYear) && parsedDateYear > 1800 && parsedDateYear < new Date().getFullYear() + 20) {
        return parsedDateYear;
    }
    return 0;
}

async function transformTMDBMovieToAppMovie(tmdbId: string | number, genresMap: Record<number, string>): Promise<Movie | undefined> {
  if (!TMDB_API_KEY) return undefined;

  // console.log(`[TMDB Detail] Fetching full details for TMDB ID: ${tmdbId}`);
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
    id: String(movieDetails.id), // Use TMDB ID as the primary ID for these movies
    imdbID: movieDetails.imdb_id,
    title: movieDetails.title || 'N/A',
    description: movieDetails.overview || 'No description available.',
    genre: movieDetails.genres?.map((g: any) => g.name).join(', ') || 'N/A',
    posterUrl: movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : 'https://placehold.co/300x450.png',
    videoUrl,
    releaseYear: parseYear(movieDetails.release_date),
    rating: parseFloat((movieDetails.vote_average || 0).toFixed(1)), // TMDB rating is 0-10
    durationMinutes: movieDetails.runtime || undefined,
    director: (director && director !== "N/A") ? director : undefined,
    cast: cast.length > 0 ? cast : undefined,
  };
}


async function fetchAndEnrichMovieData(baseMovieInput: Movie): Promise<Movie> {
  let movie = { ...baseMovieInput }; // Create a mutable copy

  // console.log(`[Enrichment] Starting for: ${movie.title} (ID: ${movie.id}, IMDbID: ${movie.imdbID})`);

  if (OMDB_API_KEY && OMDB_API_KEY.trim() !== "") {
    const omdbParams: Record<string, string> = { plot: 'full' };
    if (movie.imdbID) { // Prioritize IMDb ID for OMDB lookup
      omdbParams.i = movie.imdbID;
    } else if (movie.title) {
      omdbParams.t = movie.title;
      if (movie.releaseYear && movie.releaseYear > 0) omdbParams.y = String(movie.releaseYear);
    }

    if (omdbParams.t || omdbParams.i) {
        const omdbData = await fetchFromOMDB(omdbParams);
        if (omdbData) {
          // console.log(`[Enrichment - OMDB] Data found for ${movie.title}: ${omdbData.Title}`);
          movie = {
            ...movie,
            imdbID: omdbData.imdbID || movie.imdbID, // Keep original if OMDB doesn't provide
            title: (omdbData.Title && omdbData.Title !== "N/A") ? omdbData.Title : movie.title,
            description: (omdbData.Plot && omdbData.Plot !== "N/A") ? omdbData.Plot : movie.description,
            // OMDB genre can be very broad, take first 2 if multiple, or keep existing if more specific
            genre: (omdbData.Genre && omdbData.Genre !== "N/A") ? omdbData.Genre.split(',').map((g:string)=>g.trim()).slice(0,2).join(',') : movie.genre,
            posterUrl: (omdbData.Poster && omdbData.Poster !== "N/A") ? omdbData.Poster : movie.posterUrl,
            releaseYear: parseYear(omdbData.Released) || movie.releaseYear,
            rating: parseRating(omdbData.imdbRating) || movie.rating,
            durationMinutes: parseDuration(omdbData.Runtime) || movie.durationMinutes,
            director: (omdbData.Director && omdbData.Director !== "N/A") ? omdbData.Director : movie.director,
            cast: (omdbData.Actors && omdbData.Actors !== "N/A") ? omdbData.Actors.split(',').map((actor: string) => actor.trim()) : movie.cast,
          };
        } else {
          // console.log(`[Enrichment - OMDB] No data found for ${movie.title}`);
        }
    }
  }

  // Fetch TMDB trailer if videoUrl is a placeholder or missing, using IMDb ID if available
  if (TMDB_API_KEY && TMDB_API_KEY.trim() !== "" && (!movie.videoUrl || movie.videoUrl.includes('gtv-videos-bucket/sample') || movie.videoUrl.includes('placehold.co'))) {
    let tmdbMovieIdForTrailer: string | number | undefined;

    if (movie.imdbID) {
      // console.log(`[Enrichment - TMDB Trailer] Finding TMDB ID for ${movie.title} using IMDb ID: ${movie.imdbID}`);
      const findData = await fetchTMDBData(`/find/${movie.imdbID}`, { external_source: 'imdb_id' });
      tmdbMovieIdForTrailer = findData?.movie_results?.[0]?.id;
    }
    
    if (!tmdbMovieIdForTrailer && movie.title) { // Fallback to search by title/year if IMDb ID didn't yield result or wasn't present
      // console.log(`[Enrichment - TMDB Trailer] Finding TMDB ID for ${movie.title} by title/year search.`);
      const searchData = await fetchTMDBData('/search/movie', { query: movie.title, year: String(movie.releaseYear) });
      tmdbMovieIdForTrailer = searchData?.results?.[0]?.id;
    }

    if (tmdbMovieIdForTrailer) {
      // console.log(`[Enrichment - TMDB Trailer] Found TMDB ID ${tmdbMovieIdForTrailer} for ${movie.title}. Fetching videos.`);
      const videos = await fetchTMDBData(`/movie/${tmdbMovieIdForTrailer}/videos`);
      const officialTrailer = videos?.results?.find((v:any) => v.site === 'YouTube' && v.type === 'Trailer' && v.official === true);
      const trailer = officialTrailer || videos?.results?.find((v:any) => v.site === 'YouTube' && v.type === 'Trailer');
      if (trailer?.key) {
        // console.log(`[Enrichment - TMDB Trailer] Found trailer for ${movie.title}: ${trailer.key}`);
        movie.videoUrl = `https://www.youtube.com/embed/${trailer.key}`;
      } else {
        // console.log(`[Enrichment - TMDB Trailer] No YouTube trailer found for ${movie.title} (TMDB ID: ${tmdbMovieIdForTrailer}).`);
      }
    } else {
      // console.log(`[Enrichment - TMDB Trailer] Could not find TMDB ID for ${movie.title} to fetch trailer.`);
    }
  }
  // console.log(`[Enrichment] Finished for: ${movie.title}. Final videoUrl: ${movie.videoUrl}`);
  return movie;
}

const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 50)); // Reduced delay

let hasLoggedOMDBKeyStatus = false;
let hasLoggedTMDBKeyStatus = false;

export const getMovies = async (): Promise<Movie[]> => {
  await simulateDelay();

  if (!hasLoggedOMDBKeyStatus) {
    // console.log(OMDB_API_KEY && OMDB_API_KEY.trim() !== "" ? "[OMDB] Key found. OMDB enrichment will be attempted." : "[OMDB] Key NOT found or empty. OMDB enrichment will be skipped.");
    hasLoggedOMDBKeyStatus = true;
  }

  if (!hasLoggedTMDBKeyStatus) {
    // console.log(TMDB_API_KEY && TMDB_API_KEY.trim() !== "" ? "[TMDB] Key found. TMDB functionalities will be attempted." : "[TMDB] Key NOT found or empty. TMDB functionalities will be skipped.");
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

  // 1. Check if the ID matches one of our base movies
  const baseMovieMatch = baseMovies.find(movie => movie.id === id);

  if (baseMovieMatch) {
    console.log(`[getMovieById] Found movie in baseMovies: ${baseMovieMatch.title}. Enriching...`);
    return fetchAndEnrichMovieData(baseMovieMatch);
  }

  // 2. If not in baseMovies, and ID is numeric, assume it's a TMDB ID
  // (This handles movies found via TMDB search, which will have TMDB numeric IDs)
  if (/^\d+$/.test(id) && TMDB_API_KEY) {
    console.log(`[getMovieById] ID ${id} not in baseMovies, treating as numeric TMDB ID.`);
    const genresMap = await getTMDBGenresMap(); // Ensure genresMap is available
    const tmdbMovie = await transformTMDBMovieToAppMovie(id, genresMap); // This fetches full details from TMDB
    if (tmdbMovie) {
      console.log(`[getMovieById] Found movie directly via TMDB: ${tmdbMovie.title}`);
      // The transformTMDBMovieToAppMovie already does the "enrichment" (fetching details, credits, videos)
      return tmdbMovie; 
    }
    console.warn(`[getMovieById] Movie with TMDB ID ${id} not found via TMDB API, or API key missing.`);
  }
  
  // 3. If not found by any method
  console.warn(`[getMovieById] Movie with ID ${id} not found by any method.`);
  return undefined;
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
    const movies: Movie[] = searchData.results
      .map((tmdbMovie: any): Movie | null => {
        if (!tmdbMovie.title || !tmdbMovie.release_date) return null; // Skip movies without title or release_date
        const genreNames = tmdbMovie.genre_ids?.map((id: number) => genresMap[id]).filter(Boolean).slice(0, 2).join(', ') || 'N/A';
        
        return {
          id: String(tmdbMovie.id), // Use TMDB ID
          title: tmdbMovie.title,
          description: tmdbMovie.overview || 'No description available.',
          posterUrl: tmdbMovie.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` : 'https://placehold.co/300x450.png',
          releaseYear: parseYear(tmdbMovie.release_date),
          rating: parseFloat((tmdbMovie.vote_average || 0).toFixed(1)),
          genre: genreNames,
          // These fields are not fully available in search results, will be fetched on detail page visit
          videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Placeholder
          durationMinutes: undefined, 
          director: undefined,
          cast: undefined, 
          imdbID: undefined, // Will be fetched on detail page if needed
        };
      })
      .filter((movie: Movie | null): movie is Movie => movie !== null && movie.releaseYear !== 0); // Filter out nulls and movies with invalid year
    
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

  // For genre pages, we still primarily source from baseMovies and enrich them.
  // If TMDB key is available, one could also fetch popular movies by genre from TMDB.
  // For now, sticking to enriching baseMovies for genre pages.
  const moviesInGenre = baseMovies.filter(movie => {
    const currentMovieGenre = (movie.genre || '').toLowerCase();
    // Check if the target genre is one of the comma-separated genres in the movie
    return currentMovieGenre.split(',').map(g => g.trim()).includes(lowerGenre);
  });
  
  if (moviesInGenre.length === 0) {
    console.log(`[getMoviesByGenre] No movies found in baseMovies for genre: ${genre}.`);
    return [];
  }

  // console.log(`[getMoviesByGenre] Found ${moviesInGenre.length} movies in base for genre ${genre}. Enriching...`);
  const enrichedMoviesInGenre = await Promise.all(moviesInGenre.map(fetchAndEnrichMovieData));
  return enrichedMoviesInGenre;
};

export const getGenres = async (): Promise<string[]> => {
  await simulateDelay();
  if (TMDB_API_KEY) {
    const genresMap = await getTMDBGenresMap();
    const genreNames = Object.values(genresMap);
    if (genreNames.length > 0) {
      // console.log("[getGenres] Returning genres from TMDB.");
      return genreNames.sort();
    }
  }
  // console.log("[getGenres] Falling back to genres from baseMovies (TMDB API key missing or fetch failed).");
  const allMovies = await getMovies(); // Uses enriched movies
  const genres = new Set<string>();
  allMovies.forEach(movie => {
    if (movie.genre && typeof movie.genre === 'string') {
      movie.genre.split(',').forEach(g => {
        const trimmedGenre = g.trim();
        if (trimmedGenre) genres.add(trimmedGenre);
      });
    }
  });
  return Array.from(genres).filter(g => g).sort();
};
