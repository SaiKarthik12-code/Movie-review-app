
"use client";

import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateMovieRecommendations, type GenerateMovieRecommendationsOutput } from '@/ai/flows/generate-movie-recommendations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const FormSchema = z.object({
  viewingHistory: z.string().min(1, "Please enter at least one movie you've watched."),
  preferences: z.string().min(1, "Please describe your movie preferences."),
});

type RecommendationFormValues = z.infer<typeof FormSchema>;

export function RecommendationClientPage() {
  const { user, loading: authLoading } = useAuth();
  const [recommendations, setRecommendations] = useState<GenerateMovieRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      viewingHistory: "",
      preferences: "",
    },
  });

  const onSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const historyArray = data.viewingHistory.split(',').map(item => item.trim()).filter(item => item.length > 0);
      const result = await generateMovieRecommendations({
        viewingHistory: historyArray,
        preferences: data.preferences,
      });
      setRecommendations(result);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-20 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">Please log in to get personalized movie recommendations.</p>
            <Button asChild>
              <Link href="/login">Login to Get Recommendations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className="space-y-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Wand2 className="mr-2 h-6 w-6 text-primary" />
            AI Movie Recommendations
          </CardTitle>
          <CardDescription>
            Tell us what you've watched and what you like, and our AI will suggest movies you might enjoy!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="viewingHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Viewing History</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Inception, The Matrix, Parasite"
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter movies you've watched, separated by commas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I love sci-fi movies with complex plots, or funny romantic comedies."
                        {...field}
                        rows={3}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe what kind of movies you typically enjoy.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Get Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {recommendations && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Here are your recommendations!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Recommended Movies:</h3>
              {recommendations.recommendations.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {recommendations.recommendations.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific movie titles were recommended based on your input.</p>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Reasoning:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{recommendations.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
