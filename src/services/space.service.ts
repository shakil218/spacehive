import axiosInstance from "@/lib/axios";
import { Space } from "@/types/space";

// Featured Spaces
export const getFeaturedSpaces = async (): Promise<Space[]> => {
  const { data } = await axiosInstance.get("/api/spaces/featured");
  return data;
};

// All Spaces
export const getAllSpaces = async (): Promise<Space[]> => {
  const { data } = await axiosInstance.get("/api/spaces");
  return data;
};

// Single Space
export const getSpaceById = async (id: string): Promise<Space> => {
  const { data } = await axiosInstance.get(`/api/spaces/${id}`);
  return data;
};