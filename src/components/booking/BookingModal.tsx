"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Space } from "@/types/space";

import BookingSummary from "./BookingSummary";
import BookingDatePicker from "./BookingDatePicker";
import BookingGuests from "./BookingGuests";

import {
  useCreateBooking,
  useCreateCheckoutSession,
} from "@/hooks/useBookings";

import { authClient } from "@/lib/auth-client";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  space: Space;
}

export default function BookingModal({
  open,
  onClose,
  space,
}: BookingModalProps) {
  const [bookingDate, setBookingDate] = useState("");
  const [guests, setGuests] = useState(1);

  const { data: session } = authClient.useSession();

  const createBookingMutation = useCreateBooking();
  const checkoutMutation = useCreateCheckoutSession();

  const isLoading =
    createBookingMutation.isPending || checkoutMutation.isPending;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  const totalPrice = guests * space.price;

  const handleCheckout = async () => {
    if (isLoading) return;

    if (!bookingDate) {
      toast.error("Please select a booking date.");
      return;
    }

    if (!session?.user) {
      toast.error("Please login first.");
      return;
    }

    try {
      // Step 1: Save booking
      const booking = await createBookingMutation.mutateAsync({
        userId: session.user.id,
        userName: session.user.name,
        userEmail: session.user.email,

        spaceId: space._id,
        title: space.title,
        imageUrl: space.imageUrl,
        location: space.location,

        bookingDate,
        guests,

        pricePerDay: space.price,
        totalPrice,
      });

      // Step 2: Create Stripe Checkout Session
      const checkout =
        await checkoutMutation.mutateAsync(
          booking.insertedId
        );

      toast.success("Redirecting to Stripe...");

      window.location.href = checkout.url;
    } catch (error) {
      console.error(error);

      toast.error(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-base-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-base-300 bg-base-100 px-6 py-5">
          <h2 className="text-2xl font-bold">
            Book Your Space
          </h2>

          <button
            onClick={onClose}
            className="btn btn-circle btn-ghost"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          <BookingSummary space={space} />

          <BookingDatePicker
            value={bookingDate}
            onChange={setBookingDate}
            minDate={space.availableFrom}
          />

          <BookingGuests
            guests={guests}
            setGuests={setGuests}
            maxGuests={space.capacity}
          />

          {/* Total */}
          <div className="rounded-2xl bg-base-200 p-5">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-3xl font-bold text-primary">
                ${totalPrice}
              </span>
            </div>

            <p className="mt-2 text-sm text-base-content/60">
              {guests} Guest{guests > 1 ? "s" : ""} × $
              {space.price} per day
            </p>
          </div>

          {/* Continue */}
          <button
            onClick={handleCheckout}
            disabled={!bookingDate || isLoading}
            className="btn w-full rounded-2xl border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading
              ? "Redirecting to Stripe..."
              : "Continue to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}