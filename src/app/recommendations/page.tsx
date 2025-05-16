import { RecommendationClientPage } from '@/components/recommendations/RecommendationClientPage';

export const metadata = {
  title: 'AI Movie Recommendations - MovieVerse',
  description: 'Get personalized movie recommendations based on your viewing history and preferences.',
};

export default function RecommendationsPage() {
  return (
    <div>
      <RecommendationClientPage />
    </div>
  );
}
