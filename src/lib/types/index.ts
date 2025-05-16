export interface Movie {
  id: string; // App's internal ID
  imdbID?: string; // IMDb ID from OMDB
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  videoUrl: string; // This will still come from mock data, not OMDB
  releaseYear: number;
  rating: number;
  durationMinutes: number;
  director?: string;
  cast?: string[];
}
