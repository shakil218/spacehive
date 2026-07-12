import api from "@/lib/axios";

export interface Stats {
  totalSpaces: number;
  totalLocations: number;
  totalCategories: number;
  avgRating: string;
}

export const getStats = async (): Promise<Stats> => {
  const { data } = await api.get("/api/stats");
  return data;
};