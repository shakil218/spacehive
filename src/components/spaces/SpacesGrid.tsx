"use client";

import SpaceCard from "@/components/cards/SpaceCard";
import SpaceCardSkeleton from "@/components/cards/SpaceCardSkeleton";
import { useSpaces } from "@/hooks/useSpaces";

export default function SpacesGrid() {
  const {
    data: spaces,
    isPending,
    isError,
    error,
    refetch,
  } = useSpaces();

  // Loading State
  if (isPending) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SpaceCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error State
  if (isError) {
    console.error(error);

    return (
      <div className="rounded-3xl border border-error/20 bg-error/5 p-12 text-center">
        <h3 className="text-2xl font-semibold text-error">
          Failed to load spaces
        </h3>

        <p className="mt-3 text-base-content/60">
          Something went wrong while loading the available spaces.
        </p>

        <button
          onClick={() => refetch()}
          className="btn btn-error btn-outline rounded-full mt-6"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty State
  if (!spaces || spaces.length === 0) {
    return (
      <div className="rounded-3xl border border-base-300 bg-base-100 p-16 text-center">
        <h3 className="text-2xl font-semibold">
          No Spaces Found
        </h3>

        <p className="mt-3 text-base-content/60">
          There are no spaces available at the moment.
        </p>
      </div>
    );
  }

  // Success State
  return (
    <>
      {/* Result Count */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {spaces.length} Spaces Available
        </h2>

        <p className="text-sm text-base-content/60">
          Showing all available spaces
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {spaces.map((space) => (
          <SpaceCard
            key={space._id}
            space={space}
          />
        ))}
      </div>
    </>
  );
}