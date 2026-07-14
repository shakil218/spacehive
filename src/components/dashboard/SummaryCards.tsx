"use client";

import {
  CalendarDays,
  CircleCheckBig,
  CircleX,
  CreditCard,
} from "lucide-react";

interface SummaryProps {
  summary?: {
    totalBookings: number;
    confirmedBookings: number;
    cancelledBookings: number;
    totalSpent: number;
  };
}

export default function SummaryCards({ summary }: SummaryProps) {
  const cards = [
    {
      title: "Total Bookings",
      value: summary?.totalBookings ?? 0,
      icon: CalendarDays,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Confirmed",
      value: summary?.confirmedBookings ?? 0,
      icon: CircleCheckBig,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Cancelled",
      value: summary?.cancelledBookings ?? 0,
      icon: CircleX,
      color: "text-error",
      bg: "bg-error/10",
    },
    {
      title: "Total Spending",
      value: `$${(summary?.totalSpent ?? 0).toFixed(2)}`,
      icon: CreditCard,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-3xl
              border
              border-base-300
              bg-base-100
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-base-content/60">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div className={`${card.bg} rounded-2xl p-4`}>
                <Icon className={`h-8 w-8 ${card.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}