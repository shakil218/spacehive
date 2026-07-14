"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  cancelBooking,
  createBooking,
  createCheckoutSession,
  getUserBookings,
} from "@/services/booking.service";


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
    queryKey: [
      "user-bookings",
      userId,
    ],

    queryFn: () => getUserBookings(userId!),

    enabled: !!userId,
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