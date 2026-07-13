"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAllSpaces,
  getFeaturedSpaces,
  getSpaceById,
  getRelatedSpaces,
} from "@/services/space.service";
import { SpaceFilters } from "@/types/space";

// Featured Spaces
export function useFeaturedSpaces() {
  return useQuery({
    queryKey: ["featured-spaces"],
    queryFn: getFeaturedSpaces,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// All Spaces
export function useSpaces(filters: SpaceFilters) {
  return useQuery({
    queryKey: ["spaces", filters],
    queryFn: () => getAllSpaces(filters),

    // Keep previous data while fetching new filters/pages
    placeholderData: (previousData) => previousData,

    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}

// Single Space
export function useSpace(id: string) {
  return useQuery({
    queryKey: ["space", id],
    queryFn: () => getSpaceById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// Related Spaces
export function useRelatedSpaces(id: string) {
  return useQuery({
    queryKey: ["related-spaces", id],
    queryFn: () => getRelatedSpaces(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}