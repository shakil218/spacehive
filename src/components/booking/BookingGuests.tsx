"use client";

import { Minus, Plus, Users } from "lucide-react";

interface BookingGuestsProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  maxGuests: number;
}

export default function BookingGuests({
  guests,
  setGuests,
  maxGuests,
}: BookingGuestsProps) {
  const decrease = () => {
    if (guests > 1) {
      setGuests((prev) => prev - 1);
    }
  };

  const increase = () => {
    if (guests < maxGuests) {
      setGuests((prev) => prev + 1);
    }
  };

  return (
    <section className="rounded-2xl border border-base-300 p-5">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />

        <h3 className="font-semibold">
          Number of Guests
        </h3>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between rounded-2xl bg-base-200 p-4">

        <div>
          <p className="font-semibold">
            Guests
          </p>

          <p className="text-sm text-base-content/60">
            Maximum {maxGuests} guests
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={decrease}
            disabled={guests === 1}
            className="btn btn-circle btn-outline"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="min-w-10 text-center text-xl font-bold">
            {guests}
          </span>

          <button
            type="button"
            onClick={increase}
            disabled={guests === maxGuests}
            className="btn btn-circle btn-outline"
          >
            <Plus className="h-4 w-4" />
          </button>

        </div>
      </div>

      {guests === maxGuests && (
        <p className="mt-3 text-sm text-warning">
          Maximum guest capacity reached.
        </p>
      )}
    </section>
  );
}