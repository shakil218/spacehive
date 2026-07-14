"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  cancelBooking,
  createBooking,
  createCheckoutSession,
  deleteBooking,
  getBookingById,
  getUserBookings,
  getUserBookingStatistics,
} from "@/services/booking.service";
import {
  UserBookingStatisticsResponse,
} from "@/types/booking";

// Create Booking
export function useCreateBooking() {
  return useMutation({
    mutationFn: createBooking,
  });
}

// Create Stripe Checkout Session
export function useCreateCheckoutSession() {
  return useMutation({
    mutationFn: createCheckoutSession,
  });
}

// Get User Bookings
export function useUserBookings(userId?: string) {
  return useQuery({
    queryKey: ["user-bookings", userId],

    queryFn: () => getUserBookings(userId!),

    enabled: !!userId,
  });
}

// Get Booking By Id
export function useBooking(id?: string) {
  return useQuery({
    queryKey: ["booking", id],

    queryFn: () => getBookingById(id!),

    enabled: !!id,
  });
}

// Cancel User Booking
export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-bookings"],
      });
    },
  });
}

// Delete Booking
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-bookings"],
      });
    },
  });
}

// Get User Booking Statistics
export function useUserBookingStatistics(userId?: string) {
  return useQuery<UserBookingStatisticsResponse>({
    queryKey: ["user-booking-statistics", userId],

    queryFn: () => getUserBookingStatistics(userId!),

    enabled: !!userId,

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
