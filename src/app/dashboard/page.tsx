"use client";

import { authClient } from "@/lib/auth-client";

import { useUserBookingStatistics } from "@/hooks/useBookings";

import SummaryCards from "@/components/dashboard/SummaryCards";
import UserBookingStatistics from "@/components/dashboard/UserBookingStatistics";

export default function DashboardPage() {
  const { data: session } = authClient.useSession();

  const userId = session?.user.id;

  const { data: statisticsData, isLoading } = useUserBookingStatistics(userId);

  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-4 lg:px-8
        space-y-8
        py-16
      "
    >
      {/* Header */}

      <div>
        <h1
          className="
            bg-linear-to-r
            from-violet-600
            via-pink-500
            to-amber-400
            bg-clip-text
            text-3xl
            font-bold
            text-transparent
          "
        >
          Welcome Back, {session?.user.name}
        </h1>

        <p className="mt-2 text-base-content/60">
          Track your workspace bookings and activity.
        </p>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-36 animate-pulse rounded-3xl bg-base-200"/>
          ))}
        </div>
      ) : (
        <SummaryCards summary={statisticsData?.summary} />
      )}

      {isLoading ? (
        <div className="h-130 animate-pulse rounded-3xl bg-base-200" />
      ) : (
        <UserBookingStatistics data={statisticsData?.chartData ?? []} />
      )}
    </section>
  );
}
