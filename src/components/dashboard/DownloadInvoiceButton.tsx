"use client";

import { Download } from "lucide-react";

import { Booking } from "@/types/booking";
import { generateBookingInvoice } from "@/utils/generateBookingInvoice";

interface DownloadInvoiceButtonProps {
  booking: Booking;
}

export default function DownloadInvoiceButton({
  booking,
}: DownloadInvoiceButtonProps) {
  const handleDownload = () => {
    generateBookingInvoice(booking);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary"
    >
      <Download size={18} />
      Download Invoice
    </button>
  );
}