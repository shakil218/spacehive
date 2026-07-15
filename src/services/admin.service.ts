import axiosInstance from "@/lib/axios";

import { AdminDashboardResponse } from "@/types/admin";

// Get Admin Dashboard
export const getAdminDashboard =
  async (): Promise<AdminDashboardResponse> => {
    const { data } =
      await axiosInstance.get<AdminDashboardResponse>(
        "/api/admin/dashboard/stats",
      );

    return data;
  };