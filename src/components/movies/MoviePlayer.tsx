"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio"

interface MoviePlayerProps {
  videoUrl: string;
  title: string;
}

export function MoviePlayer({ videoUrl, title }: MoviePlayerProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-black">
      <AspectRatio ratio={16 / 9}>
        <video
          controls
          src={videoUrl}
          title={`Player for ${title}`}
          className="w-full h-full object-contain"
          poster={`https://placehold.co/1280x720.png?text=${encodeURIComponent(title)}`} // Optional poster
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
    </div>
  );
}
