"use client";

import { authClient } from "@/lib/auth-client";
import { useAdminDashboard } from "@/hooks/useAdmin";

import AdminSummaryCards from "@/components/dashboard/AdminSummaryCards";
import UserTableSkeleton from "@/components/skeletons/UserTableSkeleton";
import AdminStatisticsChart from "@/components/dashboard/AdminStatisticsChart";
import RecentPaymentsTable from "@/components/dashboard/RecentPaymentsTable";

export default function AdminDashboardPage() {
  const { data: session } = authClient.useSession();

  const { data, isLoading } = useAdminDashboard();

  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8 pb-16">
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
          Monitor your platform from one place.
        </p>
      </div>

{isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-36 animate-pulse rounded-3xl bg-base-200"/>
          ))}
        </div>
      ) : (
      <AdminSummaryCards summary={data!.summary} />
      )}

{isLoading ? (
        <div className="h-130 animate-pulse rounded-3xl bg-base-200" />
      ) : (
        
      <AdminStatisticsChart data={data?.chartData ?? []} />
      )}

{isLoading ? (
        <section className="mx-auto max-w-7xl py-16 space-y-8">
      <div>
        <div className="skeleton h-9 w-64" />
        <div className="mt-3 skeleton h-5 w-80" />
      </div>

      <UserTableSkeleton />
    </section>
      ) : (
      
      <RecentPaymentsTable payments={data?.recentPayments ?? []} />
      )}


    </section>
  );
}
