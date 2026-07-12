import axiosInstance from "@/lib/axios";
import { Space } from "@/types/space";

export const getFeaturedSpaces = async (): Promise<Space[]> => {
  const { data } = await axiosInstance.get("/api/spaces/featured");
  return data;
};

export const getAllSpaces = async (): Promise<Space[]> => {
  const { data } = await axiosInstance.get("/api/spaces");
  return data;
};