"use client";

import Image from "next/image";
import { Eye, XCircle } from "lucide-react";

import { Booking } from "@/types/booking";

interface Props {
  bookings: Booking[];
}

export default function MyBookingsTable({
  bookings,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100 shadow">
      <table className="table">
        <thead>
          <tr>
            <th>Space</th>
            <th>Date</th>
            <th>Guests</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th className="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.title}
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="font-semibold">
                      {booking.title}
                    </h2>

                    <p className="text-sm text-base-content/60">
                      {booking.location}
                    </p>
                  </div>
                </div>
              </td>

              <td>{booking.bookingDate}</td>

              <td>{booking.guests}</td>

              <td className="font-semibold">
                ${booking.totalPrice}
              </td>

              <td>
                <span
                  className={`badge ${
                    booking.paymentStatus === "paid"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </td>

              <td>
                <span
                  className={`badge ${
                    booking.bookingStatus === "confirmed"
                      ? "badge-success"
                      : "badge-neutral"
                  }`}
                >
                  {booking.bookingStatus}
                </span>
              </td>

              <td>
                <div className="flex justify-center gap-2">
                  <button className="btn btn-sm btn-outline btn-info">
                    <Eye size={16} />
                    Details
                  </button>

                  <button
                    className="btn btn-sm btn-error"
                    disabled={
                      booking.bookingStatus ===
                        "cancelled" ||
                      booking.paymentStatus ===
                        "paid"
                    }
                  >
                    <XCircle size={16} />
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}