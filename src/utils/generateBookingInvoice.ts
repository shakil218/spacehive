import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import QRCode from "qrcode";

import { Booking } from "@/types/booking";
import { invoiceTheme } from "./invoiceTheme";

export async function generateBookingInvoice(
  booking: Booking
) {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const bottomMargin = 20;
  const topMargin = 20;

  let y = 20;

  // Adds a new page and resets y whenever the next block wouldn't fit
  // on the remaining space of the current page.
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - bottomMargin) {
      doc.addPage();
      y = topMargin;
    }
  };

  // Background Header
  doc.setFillColor(...invoiceTheme.primary);
  doc.rect(0, 0, pageWidth, 45, "F");

  // Brand Name
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(26);

  doc.text("SPACEHIVE", pageWidth / 2, 18, {
    align: "center",
  });

  // Subtitle
  doc.setFontSize(11);

  doc.text(
    "Coworking Space Booking Platform",
    pageWidth / 2,
    27,
    {
      align: "center",
    }
  );

  // Invoice Title
  doc.setFontSize(17);

  doc.text(
    "BOOKING INVOICE",
    pageWidth / 2,
    37,
    {
      align: "center",
    }
  );

  y = 60;

  doc.setTextColor(...invoiceTheme.dark);

  const invoiceNumber = `INV-${booking._id
    .slice(-6)
    .toUpperCase()}`;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");

  doc.text("Invoice Information", 15, y);

  y += 10;

  doc.setFont("helvetica", "normal");

  doc.text(
    `Invoice No: ${invoiceNumber}`,
    15,
    y
  );

  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    120,
    y
  );

  y += 8;

  doc.text(
    `Booking ID: ${booking._id}`,
    15,
    y
  );

  doc.text(
    `Payment ID: ${
      booking.stripePaymentIntentId ?? "N/A"
    }`,
    120,
    y
  );

  y += 18;

  checkPageBreak(35);

  doc.setFillColor(...invoiceTheme.light);

  doc.roundedRect(
    12,
    y - 5,
    186,
    30,
    3,
    3,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);

  doc.text(
    "Customer Information",
    18,
    y + 2
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    `Name: ${booking.userName}`,
    18,
    y + 10
  );

  doc.text(
    `Email: ${booking.userEmail}`,
    18,
    y + 18
  );

  y += 40;

  checkPageBreak(45);

  doc.setFillColor(...invoiceTheme.light);

  doc.roundedRect(
    12,
    y - 5,
    186,
    40,
    3,
    3,
    "F"
  );

  doc.setFont("helvetica", "bold");

  doc.text(
    "Booking Information",
    18,
    y + 2
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    `Workspace: ${booking.title}`,
    18,
    y + 10
  );

  doc.text(
    `Location: ${booking.location}`,
    18,
    y + 18
  );

  doc.text(
    `Booking Date: ${new Date(
      booking.bookingDate
    ).toLocaleDateString()}`,
    18,
    y + 26
  );

  doc.text(
    `Guests: ${booking.guests}`,
    18,
    y + 34
  );

  y += 50;

  checkPageBreak(40);

  autoTable(doc, {
    startY: y,

    head: [["Description", "Value"]],

    body: [
      ["Workspace", booking.title],
      ["Location", booking.location],
      [
        "Booking Date",
        new Date(
          booking.bookingDate
        ).toLocaleDateString(),
      ],
      ["Guests", booking.guests.toString()],
      [
        "Price Per Day",
        `$${booking.pricePerDay.toFixed(2)}`,
      ],
      [
        "Total Price",
        `$${booking.totalPrice.toFixed(2)}`,
      ],
    ],

    theme: "grid",

    headStyles: {
      fillColor: invoiceTheme.primary,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center",
    },

    bodyStyles: {
      textColor: invoiceTheme.dark,
      fontSize: 11,
    },

    alternateRowStyles: {
      fillColor: [248, 248, 248],
    },

    styles: {
      cellPadding: 4,
      lineColor: [220, 220, 220],
      lineWidth: 0.2,
    },

    columnStyles: {
      0: {
        fontStyle: "bold",
        cellWidth: 80,
      },

      1: {
        cellWidth: 90,
      },
    },
  });

  y = (doc as jsPDF & {
    lastAutoTable: {
      finalY: number;
    };
  }).lastAutoTable.finalY + 15;

  checkPageBreak(50);

  doc.setFillColor(...invoiceTheme.light);

  doc.roundedRect(
    12,
    y,
    186,
    42,
    3,
    3,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);

  doc.text(
    "Payment Summary",
    18,
    y + 8
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    `Payment Status: ${booking.paymentStatus.toUpperCase()}`,
    18,
    y + 18
  );

  doc.text(
    `Booking Status: ${booking.bookingStatus.toUpperCase()}`,
    18,
    y + 28
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);

  doc.setTextColor(...invoiceTheme.success);

  doc.text(
    `$${booking.totalPrice.toFixed(2)}`,
    170,
    y + 20,
    {
      align: "right",
    }
  );

  doc.setTextColor(...invoiceTheme.dark);

  y += 60;

  const qrData = JSON.stringify({
    invoice: invoiceNumber,
    bookingId: booking._id,
    paymentId: booking.stripePaymentIntentId,
    customer: booking.userEmail,
    total: booking.totalPrice,
    status: booking.paymentStatus,
  });

  const qrImage = await QRCode.toDataURL(qrData);

  checkPageBreak(68);

  doc.setFillColor(...invoiceTheme.light);

  doc.roundedRect(
    12,
    y,
    186,
    58,
    3,
    3,
    "F"
  );

  doc.setFont("helvetica", "bold");

  doc.setFontSize(13);

  doc.text("Verification", 18, y + 10);

  doc.setFont("helvetica", "normal");

  doc.setFontSize(11);

  doc.text(
    "Scan this QR code to verify",
    18,
    y + 20
  );

  doc.text(
    "the booking information.",
    18,
    y + 28
  );

  doc.setFont("helvetica", "bold");

  doc.text(
    `Booking: ${booking._id.slice(-8)}`,
    18,
    y + 40
  );

  doc.text(
    `Invoice: ${invoiceNumber}`,
    18,
    y + 48
  );

  doc.addImage(
    qrImage,
    "PNG",
    155,
    y + 6,
    32,
    32
  );

  y += 70;

  checkPageBreak(90);

  doc.setDrawColor(...invoiceTheme.primary);

  doc.setLineWidth(0.4);

  doc.line(15, y, 195, y);

  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(...invoiceTheme.primary);

  doc.text(
    "Thank you for choosing SpaceHive",
    105,
    y,
    {
      align: "center",
    }
  );

  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...invoiceTheme.dark);

  doc.text(
    "Need help? Contact our support team anytime.",
    105,
    y,
    {
      align: "center",
    }
  );

  y += 7;

  doc.text(
    "support@spacehive.com",
    105,
    y,
    {
      align: "center",
    }
  );

  y += 6;

  doc.text(
    "www.spacehive.com",
    105,
    y,
    {
      align: "center",
    }
  );

  y += 10;

  doc.setFillColor(248, 248, 248);

  doc.roundedRect(
    15,
    y,
    180,
    22,
    2,
    2,
    "F"
  );

  doc.setFontSize(9);

  doc.text(
    "This document serves as your official booking invoice and payment receipt.",
    105,
    y + 8,
    {
      align: "center",
    }
  );

  doc.text(
    "Please keep it for your records.",
    105,
    y + 15,
    {
      align: "center",
    }
  );

  // Stamp every page (not just the first) with a footer showing the
  // generation date and the correct "Page X of N" for that page.
  const totalPages = doc.getNumberOfPages();
  const generatedOn = new Date().toLocaleString();

  for (let page = 1; page <= totalPages; page++) {
    doc.setPage(page);

    doc.setFontSize(8);
    doc.setTextColor(120);

    doc.text(
      `Generated on ${generatedOn}`,
      15,
      pageHeight - 11
    );

    doc.text(
      `Page ${page} of ${totalPages}`,
      195,
      pageHeight - 11,
      {
        align: "right",
      }
    );
  }

  return doc.save(`SpaceHive-Invoice-${invoiceNumber}.pdf`);
}