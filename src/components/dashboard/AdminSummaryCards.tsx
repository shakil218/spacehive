"use client";

import {
  CreditCard,
  LayoutDashboard,
  Users,
  CalendarDays,
} from "lucide-react";

interface Props {
  summary: {
    totalUsers: number;
    totalSpaces: number;
    totalBookings: number;
    totalRevenue: number;
  };
}

export default function AdminSummaryCards({
  summary,
}: Props) {
  const cards = [
    {
      title: "Total Users",
      value: summary.totalUsers,
      icon: Users,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Total Spaces",
      value: summary.totalSpaces,
      icon: LayoutDashboard,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      title: "Total Bookings",
      value: summary.totalBookings,
      icon: CalendarDays,
      iconBg: "bg-info/10",
      iconColor: "text-info",
    },
    {
      title: "Total Revenue",
      value: `$${summary.totalRevenue.toLocaleString()}`,
      icon: CreditCard,
      iconBg: "bg-success/10",
      iconColor: "text-success",
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

              <div
                className={`
                  ${card.iconBg}
                  rounded-2xl
                  p-4
                `}
              >
                <Icon
                  className={`h-8 w-8 ${card.iconColor}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}