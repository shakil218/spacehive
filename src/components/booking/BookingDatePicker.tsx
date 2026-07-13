"use client";

import { CalendarDays } from "lucide-react";

interface BookingDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  minDate: string;
}

export default function BookingDatePicker({
  value,
  onChange,
  minDate,
}: BookingDatePickerProps) {
  const today = new Date().toISOString().split("T")[0];

  const minimum =
    minDate > today
      ? minDate
      : today;

  return (
    <section className="rounded-2xl border border-base-300 p-5">
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-primary" />

        <h3 className="font-semibold">
          Select Booking Date
        </h3>
      </div>

      <input
        type="date"
        value={value}
        min={minimum}
        onChange={(e) => onChange(e.target.value)}
        className="input input-bordered w-full rounded-2xl"
      />

      <p className="mt-3 text-sm text-base-content/60">
        Earliest available booking date:{" "}
        <span className="font-semibold">
          {minimum}
        </span>
      </p>
    </section>
  );
}