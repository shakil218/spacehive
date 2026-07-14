"use client";

import Image from "next/image";
import {
  X,
  MapPin,
  CalendarDays,
  Users,
  DollarSign,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

import { useBooking } from "@/hooks/useBookings";

interface Props {
  bookingId: string | null;
  open: boolean;
  onClose: () => void;
}

export default function BookingDetailsModal({
  bookingId,
  open,
  onClose,
}: Props) {
  const { data, isLoading } = useBooking(bookingId ?? undefined);

  if (!open) return null;

  const booking = data?.booking;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-base-100 shadow-2xl"
        >
          {/* Header */}

          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-base-300 bg-base-100 px-6 py-5">
            <h2 className="text-2xl font-bold">
              Booking Details
            </h2>

            <button
              onClick={onClose}
              className="btn btn-circle btn-ghost"
            >
              <X size={20} />
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : booking ? (
            <div className="space-y-8 p-6 pb-8">
              {/* Image */}

              <div className="relative h-64 md:h-80 overflow-hidden rounded-3xl">
                <Image
                  src={booking.imageUrl}
                  alt={booking.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-3xl font-bold">
                    {booking.title}
                  </h1>

                  <p className="mt-2 flex items-center gap-2">
                    <MapPin size={18} />
                    {booking.location}
                  </p>
                </div>
              </div>

              {/* Stats */}

              <div className="grid gap-5 md:grid-cols-4">
                <div className="rounded-2xl bg-base-200 p-5">
                  <CalendarDays className="mb-3 text-primary" />

                  <p className="text-sm text-base-content/60">
                    Booking Date
                  </p>

                  <p className="mt-1 font-semibold">
                    {new Date(
                      booking.bookingDate
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <Users className="mb-3 text-primary" />

                  <p className="text-sm text-base-content/60">
                    Guests
                  </p>

                  <p className="mt-1 font-semibold">
                    {booking.guests}
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <DollarSign className="mb-3 text-primary" />

                  <p className="text-sm text-base-content/60">
                    Total
                  </p>

                  <p className="mt-1 text-xl font-bold text-primary">
                    ${booking.totalPrice}
                  </p>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <BadgeCheck className="mb-3 text-primary" />

                  <p className="text-sm text-base-content/60">
                    Price / Day
                  </p>

                  <p className="mt-1 font-semibold">
                    ${booking.pricePerDay}
                  </p>
                </div>
              </div>

              {/* Details */}

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Booking Info */}

                <div className="rounded-3xl border border-base-300 p-6">
                  <h3 className="mb-5 text-xl font-bold">
                    Booking Information
                  </h3>

                  <div className="space-y-5">
                    <div className="flex justify-between">
                      <span className="text-base-content/60">
                        Booking ID
                      </span>

                      <span className="font-medium">
                        {booking._id}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-base-content/60">
                        User
                      </span>

                      <span>{booking.userName}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-base-content/60">
                        Email
                      </span>

                      <span>{booking.userEmail}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-base-content/60">
                        Space ID
                      </span>

                      <span>{booking.spaceId}</span>
                    </div>
                  </div>
                </div>

                {/* Payment */}

                <div className="rounded-3xl border border-base-300 p-6">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
                    <CreditCard size={20} />
                    Payment & Status
                  </h3>

                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span>Payment</span>

                      <span
                        className={`badge ${
                          booking.paymentStatus === "paid"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {booking.paymentStatus}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Status</span>

                      <span
                        className={`badge ${
                          booking.bookingStatus ===
                          "confirmed"
                            ? "badge-success"
                            : booking.bookingStatus ===
                                "cancelled"
                              ? "badge-error"
                              : "badge-neutral"
                        }`}
                      >
                        {booking.bookingStatus}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Total Amount</span>

                      <span className="font-bold text-primary">
                        ${booking.totalPrice}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Guests</span>

                      <span>{booking.guests}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}

              <div className="flex justify-end border-t border-base-300 pt-6">
                <button
                  onClick={onClose}
                  className="btn rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center">
              Booking not found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}