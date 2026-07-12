"use client";

import {
  Building2,
  LayoutGrid,
  MapPin,
  Star,
  RefreshCw,
} from "lucide-react";
import { useStats } from "@/hooks/useStats";

export default function StatsSection() {
  const {
    data: stats,
    isPending,
    isError,
    error,
    refetch,
  } = useStats();

  const items = [
    {
      label: "Spaces Listed",
      value: stats?.totalSpaces ?? 0,
      icon: Building2,
    },
    {
      label: "Cities Covered",
      value: stats?.totalLocations ?? 0,
      icon: MapPin,
    },
    {
      label: "Categories",
      value: stats?.totalCategories ?? 0,
      icon: LayoutGrid,
    },
    {
      label: "Average Rating",
      value: stats?.avgRating ?? "0.0",
      icon: Star,
    },
  ];

  // Loading State
  if (isPending) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-36 animate-pulse rounded-3xl bg-base-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (isError) {
    console.error("Error fetching stats:", error);

    return (
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl border border-error/20 bg-error/5 p-8 text-center">
            <h3 className="text-xl font-semibold text-error">
              Failed to load statistics
            </h3>

            <p className="mt-2 text-base-content/70">
              Something went wrong while fetching statistics.
            </p>

            <button
              onClick={() => refetch()}
              className="btn btn-error btn-outline mt-6 rounded-full"
            >
              <RefreshCw size={18} />
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Empty State
  if (!stats) {
    return (
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl border border-base-300 p-10 text-center">
            <h3 className="text-xl font-semibold">
              No statistics available
            </h3>

            <p className="mt-2 text-base-content/60">
              Statistics will appear once spaces are added.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Success State
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-violet-600/75 via-pink-500/75 to-amber-400 p-8 md:p-12">

          {/* Decorative Blur */}
          <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {items.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {value}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}