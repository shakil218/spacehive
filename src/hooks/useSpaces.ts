"use client";

import { useQuery } from "@tanstack/react-query";
import { getFeaturedSpaces } from "@/services/space.service";

export function useFeaturedSpaces() {
  return useQuery({
    queryKey: ["featured-spaces"],
    queryFn: getFeaturedSpaces,
  });
}