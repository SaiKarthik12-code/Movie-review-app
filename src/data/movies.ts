
import type { Movie } from '@/lib/types';

// Initial mock movie data (provides base structure and fallback)
const baseMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A thief who steals information by entering people\'s dreams takes on the inverse task of planting an idea into a target\'s subconscious.',
    genre: 'Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2010,
    rating: 4.8,
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
    rating: 4.9,
    durationMinutes: 142,
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2008,
    rating: 4.9,
    durationMinutes: 152,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: 'Crime',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    releaseYear: 1994,
    rating: 4.7,
    durationMinutes: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
  },
  {
    id: '5',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    releaseYear: 1994,
    rating: 4.8,
    durationMinutes: 142,
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    releaseYear: 1999,
    rating: 4.7,
    durationMinutes: 136,
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: '7',
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    genre: 'Animation',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    releaseYear: 2001,
    rating: 4.8,
    durationMinutes: 125,
    director: 'Hayao Miyazaki',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
  },
  {
    id: '8',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    genre: 'Thriller', // Changed from Drama to Thriller to match user's intent in earlier prompts
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 4.6,
    durationMinutes: 132,
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: '9',
    title: 'The Grand Budapest Hotel',
    description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
    genre: 'Comedy',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    releaseYear: 2014,
    rating: 4.5,
    durationMinutes: 99,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
  {
    id: '10',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    releaseYear: 2015,
    rating: 4.7,
    durationMinutes: 120,
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
  },
   {
    id: '11',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi', // Was Adventure, TMDB and common consensus is Sci-Fi
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2014,
    rating: 4.8,
    durationMinutes: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: '12',
    title: 'Whiplash',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 2014,
    rating: 4.7,
    durationMinutes: 106,
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
  },
  {
    id: '13',
    title: 'Coco',
    description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
    genre: 'Animation',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    releaseYear: 2017,
    rating: 4.7,
    durationMinutes: 105,
    director: 'Lee Unkrich, Adrian Molina',
    cast: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
  },
  {
    id: '14',
    title: 'Joker',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    genre: 'Thriller', // Was Crime, TMDB often lists as Drama/Thriller/Crime. Thriller is a good primary.
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 4.6,
    durationMinutes: 122,
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    id: '15',
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2019,
    rating: 4.8,
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
    return null;
  }
  const queryParams = new URLSearchParams({ ...params, apikey: OMDB_API_KEY });
  try {
    const response = await fetch(`${OMDB_API_URL}?${queryParams}`);
    if (!response.ok) {
      console.error(`OMDB API error for params ${JSON.stringify(params)}: ${response.statusText} (Status: ${response.status})`);
      return null;
    }
    const data = await response.json();
    if (data.Response === "False") {
      console.warn(`OMDB API returned Response: False for params ${JSON.stringify(params)}. Error: ${data.Error}`);
      return null;
    }
    return data;
  } catch (error) {
    console.error(`Network error fetching from OMDB for params ${JSON.stringify(params)}:`, error);
    return null;
  }
}

async function fetchTMDBData(endpoint: string, params: Record<string, string> = {}): Promise<any> {
  if (!TMDB_API_KEY) {
    return null;
  }
  const queryParams = new URLSearchParams({ ...params, api_key: TMDB_API_KEY });
  try {
    const response = await fetch(`${TMDB_API_URL_BASE}${endpoint}?${queryParams}`);
    if (!response.ok) {
      console.error(`TMDB API error for endpoint ${endpoint} with params ${JSON.stringify(params)}: ${response.statusText} (Status: ${response.status})`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Network error fetching from TMDB for endpoint ${endpoint} with params ${JSON.stringify(params)}:`, error);
    return null;
  }
}

async function searchMovieOnTMDB(title: string, year?: number): Promise<number | null> {
  const params: Record<string, string> = { query: title };
  if (year) {
    params.year = String(year);
  }
  const data = await fetchTMDBData('/search/movie', params);
  if (data && data.results && data.results.length > 0) {
    const movieResult = year
      ? data.results.find((m: any) => m.release_date && new Date(m.release_date).getFullYear() === year)
      : data.results[0];
    return movieResult ? movieResult.id : (data.results[0]?.id || null);
  }
  return null;
}

async function getMovieVideosFromTMDB(tmdbMovieId: number): Promise<any[]> {
  const data = await fetchTMDBData(`/movie/${tmdbMovieId}/videos`);
  return (data && data.results) ? data.results : [];
}

function parseDuration(runtimeStr?: string): number | undefined {
  if (!runtimeStr || runtimeStr === "N/A") return undefined;
  const minutes = parseInt(runtimeStr.replace(/\s*min/i, ""));
  return isNaN(minutes) ? undefined : minutes;
}

function parseRating(imdbRatingStr?: string): number | undefined {
  if (!imdbRatingStr || imdbRatingStr === "N/A") return undefined;
  const rating = parseFloat(imdbRatingStr);
  return isNaN(rating) ? undefined : rating;
}

function parseYear(releasedStr?: string): number | undefined {
    if (!releasedStr || releasedStr === "N/A") return undefined;
    // Handle cases like "01 Jan 1994" or just "1994"
    const yearMatch = releasedStr.match(/\d{4}/);
    if (yearMatch) {
        const year = parseInt(yearMatch[0]);
        return isNaN(year) || year < 1800 || year > new Date().getFullYear() + 5 ? undefined : year;
    }
    // Fallback for simple year strings if direct parsing fails.
    const simpleYear = parseInt(releasedStr);
     if (!isNaN(simpleYear) && simpleYear > 1800 && simpleYear < new Date().getFullYear() + 5) {
        return simpleYear;
    }
    // Final attempt with Date parsing if it's a fuller date string
    const date = new Date(releasedStr);
    const fullYear = date.getFullYear();
    return isNaN(fullYear) || fullYear < 1800 || fullYear > new Date().getFullYear() + 5 ? undefined : fullYear;
}

async function fetchAndEnrichMovieData(baseMovie: Movie): Promise<Movie> {
  let movie = { ...baseMovie };

  if (OMDB_API_KEY && OMDB_API_KEY.trim() !== "") {
    const omdbData = await fetchFromOMDB({ t: movie.title, y: String(movie.releaseYear), plot: 'full' });
    if (omdbData) {
      movie = {
        ...movie,
        imdbID: omdbData.imdbID || movie.imdbID,
        title: (omdbData.Title && omdbData.Title !== "N/A") ? omdbData.Title : movie.title,
        description: (omdbData.Plot && omdbData.Plot !== "N/A") ? omdbData.Plot : movie.description,
        genre: (omdbData.Genre && omdbData.Genre !== "N/A") ? omdbData.Genre.split(',')[0].trim() : movie.genre,
        posterUrl: (omdbData.Poster && omdbData.Poster !== "N/A") ? omdbData.Poster : movie.posterUrl,
        releaseYear: parseYear(omdbData.Released) || movie.releaseYear,
        rating: parseRating(omdbData.imdbRating) || movie.rating,
        durationMinutes: parseDuration(omdbData.Runtime) || movie.durationMinutes,
        director: (omdbData.Director && omdbData.Director !== "N/A") ? omdbData.Director : movie.director,
        cast: (omdbData.Actors && omdbData.Actors !== "N/A") ? omdbData.Actors.split(',').map((actor: string) => actor.trim()) : movie.cast,
      };
    }
  }

  if (TMDB_API_KEY && TMDB_API_KEY.trim() !== "") {
    const tmdbMovieId = await searchMovieOnTMDB(movie.title, movie.releaseYear);
    if (tmdbMovieId) {
      const videos = await getMovieVideosFromTMDB(tmdbMovieId);
      const officialTrailer = videos.find(v => v.site === 'YouTube' && v.type === 'Trailer' && v.official === true);
      const trailer = officialTrailer || videos.find(v => v.site === 'YouTube' && v.type === 'Trailer');

      if (trailer && trailer.key) {
        const isPlaceholderVideo = !movie.videoUrl || movie.videoUrl.includes('gtv-videos-bucket/sample');
        const isAlreadyYouTube = movie.videoUrl && movie.videoUrl.includes('youtube.com/embed/');
        if (isPlaceholderVideo && !isAlreadyYouTube) {
             movie.videoUrl = `https://www.youtube.com/embed/${trailer.key}`;
        }
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
    if (!OMDB_API_KEY || OMDB_API_KEY.trim() === "") {
      console.warn("OMDB_API_KEY is not defined or is empty. OMDB enrichment will be skipped for all movies.");
    } else {
      // console.log("OMDB_API_KEY is set. Attempting OMDB enrichment.");
    }
    hasLoggedOMDBKeyStatus = true;
  }

  if (!hasLoggedTMDBKeyStatus) {
    if (!TMDB_API_KEY || TMDB_API_KEY.trim() === "") {
      console.warn("TMDB_API_KEY is not defined or is empty. TMDB trailer fetching will be skipped for all movies.");
    } else {
      // console.log("TMDB_API_KEY is set. Attempting TMDB trailer fetching.");
    }
    hasLoggedTMDBKeyStatus = true;
  }

  const enrichedMovies = await Promise.all(baseMovies.map(fetchAndEnrichMovieData));
  return enrichedMovies;
};

export const getMovieById = async (id: string): Promise<Movie | undefined> => {
  await simulateDelay();
  const baseMovieToEnrich = baseMovies.find(movie => movie.id === id);
  if (!baseMovieToEnrich) return undefined;
  return fetchAndEnrichMovieData(baseMovieToEnrich);
};

export const getMoviesByGenre = async (genre: string): Promise<Movie[]> => {
  await simulateDelay();
  const lowerGenre = genre.toLowerCase();

  const moviesInGenre = baseMovies.filter(movie => {
    const currentMovieGenre = (movie.genre || '').toLowerCase();
    return currentMovieGenre === lowerGenre ||
           currentMovieGenre.split(',').map(g => g.trim()).includes(lowerGenre);
  });

  const enrichedMoviesInGenre = await Promise.all(moviesInGenre.map(fetchAndEnrichMovieData));
  return enrichedMoviesInGenre;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  await simulateDelay();
  const lowerQuery = query.toLowerCase();
  console.log(`[Search] Received query: "${query}", Lowercase: "${lowerQuery}"`);

  const allMovies = await getMovies();
  console.log(`[Search] Total movies fetched for searching: ${allMovies.length}`);

  const results = allMovies.filter(movie => {
    const titleMatch = (movie.title || '').toLowerCase().includes(lowerQuery);
    const descriptionMatch = (movie.description || '').toLowerCase().includes(lowerQuery);
    const genreString = typeof movie.genre === 'string' ? movie.genre : (Array.isArray(movie.genre) ? movie.genre.join(' ') : '');
    const genreMatch = genreString.toLowerCase().split(',').some(g => g.trim().toLowerCase().includes(lowerQuery));
    const directorMatch = movie.director && (movie.director || '').toLowerCase().includes(lowerQuery);
    const castMatch = movie.cast && movie.cast.some(actor => (actor || '').toLowerCase().includes(lowerQuery));
    const imdbIDMatch = movie.imdbID && (movie.imdbID || '').toLowerCase().includes(lowerQuery);

    return titleMatch || descriptionMatch || genreMatch || directorMatch || castMatch || imdbIDMatch;
  });

  console.log(`[Search] Found ${results.length} results for query "${query}"`);
  return results;
};

export const getGenres = async (): Promise<string[]> => {
  await simulateDelay();
  const allMovies = await getMovies(); // Use enriched movies to get the most accurate genre list
  const genres = new Set<string>();
  allMovies.forEach(movie => {
    if (movie.genre) {
      movie.genre.split(',').forEach(g => genres.add(g.trim()));
    }
  });
  return Array.from(genres).filter(g => g).sort();
};


    