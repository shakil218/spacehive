import axiosInstance from "@/lib/axios";
import {
  UsersResponse,
  UpdateUserRoleResponse,
  UpdateUserStatusResponse,
} from "@/types/user";

// ==============================
// Get All Users
// ==============================

export const getUsers = async (): Promise<UsersResponse> => {
  const { data } = await axiosInstance.get("/api/users");

  return data;
};

// ==============================
// Update User Role
// ==============================

export const updateUserRole = async (
  id: string,
  role: string,
): Promise<UpdateUserRoleResponse> => {
  const { data } = await axiosInstance.patch(
    `/api/users/${id}/role`,
    { role },
  );

  return data;
};

// ==============================
// Update User Status
// ==============================

export const updateUserStatus = async (
  id: string,
  status: string,
): Promise<UpdateUserStatusResponse> => {
  const { data } = await axiosInstance.patch(
    `/api/users/${id}/status`,
    { status },
  );

  return data;
};