import axiosInstance from "@/lib/axios";
import {
  PaginatedSpaces,
  Space,
  SpaceFilters,
} from "@/types/space";

// Featured Spaces
export const getFeaturedSpaces = async (): Promise<Space[]> => {
  const { data } = await axiosInstance.get("/api/spaces/featured");
  return data;
};

// All Spaces
export const getAllSpaces = async (
  filters: SpaceFilters
): Promise<PaginatedSpaces> => {
  const { data } = await axiosInstance.get("/api/spaces", {
    params: filters,
  });

  return data;
};

// Single Space
export const getSpaceById = async (
  id: string
): Promise<Space> => {
  const { data } = await axiosInstance.get(`/api/spaces/${id}`);
  return data;
};

// Related Spaces
export const getRelatedSpaces = async (
  id: string
): Promise<Space[]> => {
  const { data } = await axiosInstance.get(
    `/api/spaces/related/${id}`
  );

  return data;
};