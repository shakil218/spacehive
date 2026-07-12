"use client";

import SpaceCard from "@/components/cards/SpaceCard";
import SpaceCardSkeleton from "@/components/cards/SpaceCardSkeleton";
import { PaginatedSpaces } from "@/types/space";

interface SpacesGridProps {
  data?: PaginatedSpaces;
  isPending: boolean;
  isError: boolean;
}

export default function SpacesGrid({
  data,
  isPending,
  isError,
}: SpacesGridProps) {
  // Loading State
  if (isPending) {
    return (
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SpaceCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  // Error State
  if (isError) {
    return (
      <section className="rounded-3xl border border-error/20 bg-error/5 p-12 text-center">
        <h2 className="text-2xl font-bold text-error">
          Failed to load spaces
        </h2>

        <p className="mt-2 text-base-content/70">
          Something went wrong while fetching spaces.
        </p>
      </section>
    );
  }

  // Empty State
  if (!data || data.spaces.length === 0) {
    return (
      <section className="rounded-3xl border border-base-300 p-16 text-center">
        <h2 className="text-2xl font-bold">
          No spaces found
        </h2>

        <p className="mt-2 text-base-content/60">
          Try changing your search or filters.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">

      {/* Result Count */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Available Spaces
        </h2>

        <p className="text-sm text-base-content/60">
          Showing{" "}
          <span className="font-semibold">
            {data.spaces.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold">
            {data.totalSpaces}
          </span>{" "}
          spaces
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.spaces.map((space) => (
          <SpaceCard
            key={space._id}
            space={space}
          />
        ))}
      </div>
    </section>
  );
}