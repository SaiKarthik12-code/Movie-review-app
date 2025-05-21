export interface Movie {
  id: string; // App's internal ID or TMDB ID
  imdbID?: string; // IMDb ID from OMDB or TMDB
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  videoUrl: string; 
  releaseYear: number;
  rating: number;
  durationMinutes?: number; // Made optional
  director?: string;
  cast?: string[];
}
