"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAllSpaces,
  getFeaturedSpaces,
  getSpaceById,
} from "@/services/space.service";

// Featured Spaces
export function useFeaturedSpaces() {
  return useQuery({
    queryKey: ["featured-spaces"],
    queryFn: getFeaturedSpaces,
  });
}

// All Spaces
export function useSpaces() {
  return useQuery({
    queryKey: ["spaces"],
    queryFn: getAllSpaces,
  });
}

// Single Space
export function useSpace(id: string) {
  return useQuery({
    queryKey: ["space", id],
    queryFn: () => getSpaceById(id),
    enabled: !!id,
  });
}