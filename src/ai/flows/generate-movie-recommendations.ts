'use server';

/**
 * @fileOverview AI agent that generates personalized movie recommendations based on viewing history and preferences.
 *
 * - generateMovieRecommendations - A function that generates movie recommendations.
 * - GenerateMovieRecommendationsInput - The input type for the generateMovieRecommendations function.
 * - GenerateMovieRecommendationsOutput - The return type for the generateMovieRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMovieRecommendationsInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of movie titles the user has watched.'),
  preferences: z
    .string()
    .describe('A description of the user\u2019s movie preferences.'),
});
export type GenerateMovieRecommendationsInput =
  z.infer<typeof GenerateMovieRecommendationsInputSchema>;

const GenerateMovieRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of movie titles recommended for the user.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the movie recommendations.'),
});
export type GenerateMovieRecommendationsOutput =
  z.infer<typeof GenerateMovieRecommendationsOutputSchema>;

export async function generateMovieRecommendations(
  input: GenerateMovieRecommendationsInput
): Promise<GenerateMovieRecommendationsOutput> {
  return generateMovieRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMovieRecommendationsPrompt',
  input: {schema: GenerateMovieRecommendationsInputSchema},
  output: {schema: GenerateMovieRecommendationsOutputSchema},
  prompt: `You are a movie expert. Given a user's viewing history and preferences, you will generate a list of personalized movie recommendations.

Viewing History: {{{viewingHistory}}}
Preferences: {{{preferences}}}

Based on this information, recommend movies the user might enjoy, and provide a brief explanation for each recommendation.

Format your response as a JSON object with "recommendations" (an array of movie titles) and "reasoning" (an explanation for the recommendations) fields.
`,
});

const generateMovieRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateMovieRecommendationsFlow',
    inputSchema: GenerateMovieRecommendationsInputSchema,
    outputSchema: GenerateMovieRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
