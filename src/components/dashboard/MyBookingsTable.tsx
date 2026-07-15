"use client";

import Image from "next/image";
import axios from "axios";
import {
  Download,
  Eye,
  MapPin,
  Trash2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Booking } from "@/types/booking";
import {
  useCancelBooking,
  useDeleteBooking,
} from "@/hooks/useBookings";
import { generateBookingInvoice } from "@/utils/generateBookingInvoice";

interface Props {
  bookings: Booking[];
  onDetails?: (bookingId: string) => void;
}

export default function MyBookingsTable({
  bookings,
  onDetails,
}: Props) {
  const {
    mutate: cancelBooking,
    isPending: isCancelling,
  } = useCancelBooking();

  const {
    mutate: deleteBooking,
    isPending: isDeleting,
  } = useDeleteBooking();

  // Download Invoice
  const handleDownloadInvoice = (booking: Booking) => {
    generateBookingInvoice(booking);

    toast.success("Invoice downloaded successfully.");
  };

  // Cancel Booking
  const handleCancelBooking = (id: string) => {
    cancelBooking(id, {
      onSuccess: () => {
        toast.success("Booking cancelled successfully.");
      },

      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(
            error.response?.data?.message ??
              "Failed to cancel booking."
          );

          return;
        }

        toast.error("Failed to cancel booking.");
      },
    });
  };

  // Delete Booking
  const handleDeleteBooking = (id: string) => {
    deleteBooking(id, {
      onSuccess: () => {
        toast.success("Booking deleted successfully.");
      },

      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(
            error.response?.data?.message ??
              "Failed to delete booking."
          );

          return;
        }

        toast.error("Failed to delete booking.");
      },
    });
  };

  // Cancel Confirmation
  const confirmCancelBooking = (bookingId: string) => {
    toast("Cancel this booking?", {
      description:
        "This action cannot be undone.",

      action: {
        label: "Yes, Cancel",
        onClick: () =>
          handleCancelBooking(bookingId),
      },

      cancel: {
        label: "Keep",
        onClick: () => {},
      },

      duration: 10000,
    });
  };

  // Delete Confirmation
  const confirmDeleteBooking = (bookingId: string) => {
    toast("Delete this booking?", {
      description:
        "This booking will be permanently removed.",

      action: {
        label: "Delete",
        onClick: () =>
          handleDeleteBooking(bookingId),
      },

      cancel: {
        label: "Keep",
        onClick: () => {},
      },

      duration: 10000,
    });
  };

  return (
    <div className="overflow-x-auto rounded-3xl border border-base-300 bg-base-100 shadow-lg">
      <table className="table min-w-262.5 table-zebra">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
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
          {bookings.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="py-12 text-center"
              >
                <p className="text-lg font-semibold">
                  No bookings found
                </p>

                <p className="mt-1 text-sm text-base-content/60">
                  Start booking your favorite
                  spaces.
                </p>
              </td>
            </tr>
          ) : (
            bookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="transition-colors hover:bg-base-200/40"
              >
                {/* Serial */}
                <td className="font-semibold">
                  {index + 1}
                </td>

                {/* Space */}
                <td>
                  <div className="flex items-center gap-4">
                    <Image
  src={booking.imageUrl}
  alt={booking.title}
  width={70}
  height={70}
  className="h-14 w-14 rounded-xl object-cover md:h-[70px] md:w-[70px]"
/>

                    <div>
                      <h2 className="text-sm font-semibold md:text-base">
                        {booking.title}
                      </h2>

                      <p className="inline-flex items-center gap-1 text-xs text-base-content/60 md:text-sm">
                        <MapPin size={12} />
                        {booking.location}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td>
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </td>

                {/* Guests */}
                <td>{booking.guests}</td>

                {/* Total */}
                <td className="font-bold text-primary">
                  ${booking.totalPrice}
                </td>

                {/* Payment */}
                <td>
                  <span
                    className={`badge badge-sm md:badge-md ${
                      booking.paymentStatus ===
                      "paid"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>

                {/* Booking Status */}
                <td>
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
                </td>

                {/* Actions */}
                <td>
                  <div className="flex items-center gap-2 flex-row md:flex-wrap md:justify-center">

                    {/* Details */}
                    <button
                      onClick={() =>
                        onDetails?.(booking._id)
                      }
                      className="btn btn-xs md:btn-sm btn-outline btn-info"
                    >
                      <Eye size={16} />
                      Details
                    </button>

                    {/* Download Invoice */}
                    {booking.paymentStatus ===
                      "paid" &&
                      booking.bookingStatus ===
                        "confirmed" && (
                        <button
                          onClick={() =>
                            handleDownloadInvoice(
                              booking
                            )
                          }
                          className="btn btn-xs md:btn-sm btn-success"
                        >
                          <Download size={16} />
                          Invoice
                        </button>
                      )}

                    {/* Cancel */}
                    {booking.bookingStatus !==
                      "cancelled" &&
                      booking.paymentStatus !==
                        "paid" && (
                        <button
                          onClick={() =>
                            confirmCancelBooking(
                              booking._id
                            )
                          }
                          disabled={isCancelling}
                          className="btn btn-xs md:btn-sm btn-error"
                        >
                          <XCircle size={16} />

                          {isCancelling
                            ? "Cancelling..."
                            : "Cancel"}
                        </button>
                      )}

                    {/* Delete */}
                    {booking.bookingStatus ===
                      "cancelled" && (
                      <button
                        onClick={() =>
                          confirmDeleteBooking(
                            booking._id
                          )
                        }
                        disabled={isDeleting}
                        className="btn btn-xs md:btn-sm btn-outline btn-error"
                      >
                        <Trash2 size={16} />

                        {isDeleting
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}