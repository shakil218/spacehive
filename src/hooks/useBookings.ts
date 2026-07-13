"use client";

import { useMutation } from "@tanstack/react-query";

import {
  createBooking,
  createCheckoutSession,
} from "@/services/booking.service";

export function useCreateBooking() {
  return useMutation({
    mutationFn: createBooking,
  });
}

export function useCreateCheckoutSession() {
  return useMutation({
    mutationFn: createCheckoutSession,
  });
}