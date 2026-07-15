"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getUsers,
  updateUserRole,
  updateUserStatus,
} from "@/services/user.service";

// ==============================
// Get All Users
// ==============================

export function useUsers() {
  return useQuery({
    queryKey: ["users"],

    queryFn: getUsers,

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// ==============================
// Update User Role
// ==============================

export function useUpdateUserRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      role,
    }: {
      id: string;
      role: string;
    }) => updateUserRole(id, role),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}

// ==============================
// Update User Status
// ==============================

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: string;
    }) => updateUserStatus(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}