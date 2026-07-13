"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Space } from "@/types/space";

import BookingSummary from "./BookingSummary";
import BookingDatePicker from "./BookingDatePicker";
import BookingGuests from "./BookingGuests";

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

          {/* Space Summary */}
          <BookingSummary space={space} />

          {/* Date */}
          <BookingDatePicker
            value={bookingDate}
            onChange={setBookingDate}
            minDate={space.availableFrom}
          />

          {/* Guests */}
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
              {guests} Guest{guests > 1 ? "s" : ""} × ${space.price} per day
            </p>
          </div>

          {/* Continue */}
          <button
            disabled={!bookingDate}
            className="btn w-full rounded-2xl border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue to Payment
          </button>

        </div>
      </div>
    </div>
  );
}