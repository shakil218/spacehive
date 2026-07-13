"use client";

import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "@/services/payment.service";

export function useCheckoutSession() {
  return useMutation({
    mutationFn: createCheckoutSession,
  });
}