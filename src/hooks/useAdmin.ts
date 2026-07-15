"use client";

import { useQuery } from "@tanstack/react-query";

import { getAdminDashboard } from "@/services/admin.service";

export function useAdminDashboard() {
  return useQuery({
    queryKey: ["admin-dashboard"],

    queryFn: getAdminDashboard,

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}