"use client";

import { authClient } from "@/lib/auth-client";

import { useUserBookingStatistics } from "@/hooks/useBookings";

import SummaryCards from "@/components/dashboard/SummaryCards";
import UserBookingStatistics from "@/components/dashboard/UserBookingStatistics";
import SpaceCardSkeleton from "@/components/cards/SpaceCardSkeleton";

export default function DashboardPage() {
  const { data: session } = authClient.useSession();

  const userId = session?.user.id;

  const { data: statisticsData, isLoading } = useUserBookingStatistics(userId);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <SpaceCardSkeleton />
      </div>
    );
  }

  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-4 lg:px-8
        space-y-8
        pb-16
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

      <SummaryCards summary={statisticsData?.summary} />

      <UserBookingStatistics data={statisticsData?.chartData ?? []} />
    </section>
  );
}
