"use client";

import {
  CalendarDays,
  CheckCircle,
  Clock3,
  CreditCard,
  MapPin,
  Star,
  Users,
  XCircle,
} from "lucide-react";

import { Space } from "@/types/space";

interface BookingCardProps {
  space: Space;
}

export default function BookingCard({
  space,
}: BookingCardProps) {

  const today = new Date();
  const availableDate = new Date(space.availableFrom);

  const isAvailable = availableDate <= today;
  const isFull = space.capacity <= 0;

  const disabled = !isAvailable || isFull;

  const diff = availableDate.getTime() - today.getTime();

  const days = Math.max(
    0,
    Math.ceil(diff / (1000 * 60 * 60 * 24))
  );

  return (
    <aside className="sticky top-24 self-start rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg">

      {/* Price */}

      <div className="border-b border-base-300 pb-6">

        <p className="text-sm text-base-content/60">
          Starting from
        </p>

        <h2 className="mt-1 text-4xl font-bold text-primary">
          ${space.price}
        </h2>

        <p className="text-base-content/60">
          per day
        </p>

      </div>

      {/* Availability */}

      <div className="mt-6">

        {isFull ? (
          <div className="alert alert-error">
            <XCircle size={18} />
            <span>Fully booked</span>
          </div>
        ) : isAvailable ? (
          <div className="alert alert-success">
            <CheckCircle size={18} />
            <span>Available for booking</span>
          </div>
        ) : (
          <div className="alert alert-warning">
            <Clock3 size={18} />
            <span>Available in {days} day(s)</span>
          </div>
        )}

      </div>

      {/* Information */}

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Rating
          </span>

          <span className="font-semibold">
            {space.rating}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <Users className="h-4 w-4" />
            Seats Left
          </span>

          <span className="font-semibold">
            {space.capacity}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <MapPin className="h-4 w-4" />
            Location
          </span>

          <span className="font-semibold text-right">
            {space.location}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <CalendarDays className="h-4 w-4" />
            Available
          </span>

          <span className="font-semibold">
            {space.availableFrom}
          </span>
        </div>

      </div>

      {/* Trust */}

      <div className="mt-8 space-y-3 rounded-2xl bg-base-200 p-4">

        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-success" />
          Instant confirmation
        </div>

        <div className="flex items-center gap-2 text-sm">
          <CreditCard className="h-4 w-4 text-primary" />
          Secure Stripe payment
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock3 className="h-4 w-4 text-warning" />
          Free cancellation within 24 hours
        </div>

      </div>

      {/* Button */}

      <button
        disabled={disabled}
        className="btn mt-8 w-full rounded-2xl border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isFull
          ? "Fully Booked"
          : !isAvailable
          ? `Available in ${days} Days`
          : "Book Now"}
      </button>

      <p className="mt-4 text-center text-sm text-base-content/60">
        You won&apos;t be charged until checkout.
      </p>

    </aside>
  );
}