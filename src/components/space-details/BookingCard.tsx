"use client";

import {
  CalendarDays,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { Space } from "@/types/space";

interface BookingCardProps {
  space: Space;
}

export default function BookingCard({
  space,
}: BookingCardProps) {
  return (
    <aside className="sticky top-24 self-start rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg">

      {/* Price */}
      <div className="mb-6 border-b border-base-300 pb-5">
        <h2 className="text-4xl font-bold text-primary">
          ${space.price}
          <span className="text-lg font-normal text-base-content/60">
            /day
          </span>
        </h2>
      </div>

      {/* Information */}
      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Rating
          </span>

          <span className="font-semibold">
            {space.rating}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <Users className="h-4 w-4" />
            Capacity
          </span>

          <span className="font-semibold">
            {space.capacity} People
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <MapPin className="h-4 w-4" />
            Location
          </span>

          <span className="font-semibold">
            {space.location}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-base-content/70">
            <CalendarDays className="h-4 w-4" />
            Available
          </span>

          <span className="font-semibold">
            {space.availableFrom}
          </span>
        </div>

      </div>

      {/* Button */}
      <button className="btn mt-8 w-full rounded-2xl border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white">
        Book Now
      </button>

      <p className="mt-4 text-center text-sm text-base-content/60">
        You won&apos;t be charged yet.
      </p>

    </aside>
  );
}