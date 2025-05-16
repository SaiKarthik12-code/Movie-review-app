export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  videoUrl: string;
  releaseYear: number;
  rating: number; // Example: 1-5 or 1-10
  durationMinutes: number;
  director?: string;
  cast?: string[];
}
