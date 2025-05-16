import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star as StarIcon, CalendarDays } from 'lucide-react';
import { FavoriteButton } from './FavoriteButton';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const dataAiHintWords = movie.genre.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <Card className="overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background">
      <Link href={`/movies/${movie.id}`} className="group block h-full">
        <CardHeader className="p-0 relative">
          <Image
            src={movie.posterUrl}
            alt={`Poster for ${movie.title}`}
            width={300}
            height={450}
            className="w-full h-auto object-cover aspect-[2/3]"
            data-ai-hint={dataAiHintWords || "movie poster"}
          />
          <div className="absolute top-2 right-2 z-10">
            <FavoriteButton movieId={movie.id} movieTitle={movie.title} />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors truncate" title={movie.title}>
            {movie.title}
          </CardTitle>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
            <Badge variant="secondary">{movie.genre}</Badge>
            <span className="flex items-center">
              <CalendarDays size={14} className="mr-1" />
              {movie.releaseYear}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3" title={movie.description}>
            {movie.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center text-sm font-medium text-amber-400">
            <StarIcon size={16} className="mr-1 fill-current" />
            {movie.rating.toFixed(1)}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
