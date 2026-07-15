"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { useUserBookings } from "@/hooks/useBookings";
import { Booking } from "@/types/booking";

import MyBookingsTable from "@/components/dashboard/MyBookingsTable";
import BookingsTableSkeleton from "@/components/dashboard/BookingsTableSkeleton";
import BookingDetailsModal from "@/components/dashboard/BookingDetailsModal";

export default function MyBookingsPage() {
  const { data: session } = authClient.useSession();

  const { data, isLoading } = useUserBookings(session?.user.id);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="py-16">
        <BookingsTableSkeleton />
      </div>
    );
  }

  const bookings: Booking[] = data?.bookings ?? [];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-3xl font-bold text-transparent">
            My Bookings
          </h1>

          <p className="mt-1 text-base-content/60">
            Manage your workspace reservations.
          </p>
        </div>

        <div className="badge border border-white/40 bg-linear-to-r from-violet-600/15 via-pink-500/15 to-amber-400/15 backdrop-blur-sm px-4 py-4 text-sm font-medium text-base-content shadow-sm">
          {bookings.length} Booking{bookings.length !== 1 && "s"}
        </div>
      </div>

      {/* Content */}
      {bookings.length === 0 ? (
        <div className="flex flex-col items-center rounded-3xl border border-dashed border-base-300 bg-base-100 px-6 py-20 text-center shadow-sm">
          <CalendarDays className="mb-5 h-16 w-16 text-base-content/30" />

          <h2 className="text-2xl font-bold">
            No Bookings Yet
          </h2>

          <p className="mt-2 max-w-md text-base-content/60">
            You haven&apos;t booked any coworking spaces yet.
            Explore available spaces and reserve one today.
          </p>

          <Link
            href="/spaces"
            className="btn bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white mt-8 rounded-xl"
          >
            Explore Spaces
          </Link>
        </div>
      ) : (
        <MyBookingsTable bookings={bookings} onDetails={setSelectedBookingId} />
      )}
      <BookingDetailsModal bookingId={selectedBookingId} open={!!selectedBookingId} onClose={() => setSelectedBookingId(null)} />
    </section>
  );
}