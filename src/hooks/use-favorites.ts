"use client";

import { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";

const FAVORITES_STORAGE_KEY = 'movieverse-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage", error);
      // Fallback to empty array if localStorage is not available or corrupted
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites to localStorage", error);
      }
    }
  }, [favorites, isMounted]);

  const addFavorite = useCallback((movieId: string, movieTitle?: string) => {
    if (!isMounted) return;
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(movieId)) {
        toast({
          title: "Added to Favorites",
          description: `${movieTitle || 'Movie'} has been added to your favorites.`,
        });
        return [...prevFavorites, movieId];
      }
      return prevFavorites;
    });
  }, [toast, isMounted]);

  const removeFavorite = useCallback((movieId: string, movieTitle?: string) => {
    if (!isMounted) return;
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        toast({
          title: "Removed from Favorites",
          description: `${movieTitle || 'Movie'} has been removed from your favorites.`,
          variant: "destructive",
        });
        return prevFavorites.filter((id) => id !== movieId);
      }
      return prevFavorites;
    });
  }, [toast, isMounted]);

  const isFavorite = useCallback((movieId: string): boolean => {
    if (!isMounted) return false;
    return favorites.includes(movieId);
  }, [favorites, isMounted]);

  const toggleFavorite = useCallback((movieId: string, movieTitle?: string) => {
    if (!isMounted) return;
    if (isFavorite(movieId)) {
      removeFavorite(movieId, movieTitle);
    } else {
      addFavorite(movieId, movieTitle);
    }
  }, [addFavorite, removeFavorite, isFavorite, isMounted]);
  
  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite, isMounted };
}
