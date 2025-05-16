
"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio"

interface MoviePlayerProps {
  videoUrl: string;
  title: string;
}

export function MoviePlayer({ videoUrl, title }: MoviePlayerProps) {
  const isYouTubeEmbed = videoUrl.includes('youtube.com/embed/');

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-black">
      <AspectRatio ratio={16 / 9}>
        {isYouTubeEmbed ? (
          <iframe
            src={videoUrl}
            title={`Trailer for ${title}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-presentation" // Added sandbox for security
          ></iframe>
        ) : (
          <video
            controls
            src={videoUrl}
            title={`Player for ${title}`}
            className="w-full h-full object-contain"
            poster={`https://placehold.co/1280x720.png?text=${encodeURIComponent(title)}`}
            preload="metadata"
          >
            Your browser does not support the video tag.
            <p>Try downloading the video: <a href={videoUrl} download>Download</a></p>
          </video>
        )}
      </AspectRatio>
    </div>
  );
}
