"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { useFeaturedSpaces } from "@/hooks/useSpaces";
import SpaceCard from "../cards/SpaceCard";
import SpaceCardSkeleton from "../cards/SpaceCardSkeleton";

export default function FeaturedSpaces() {
  const {
    data: spaces,
    isPending,
    isError,
  } = useFeaturedSpaces();

  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 badge border border-white/40 bg-linear-to-r from-violet-600/15 via-pink-500/15 to-amber-400/15 backdrop-blur-sm px-4 py-4 text-sm font-medium text-base-content shadow-sm">
              <Sparkles size={16} />
              Featured Collection
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Discover Our{" "}
              <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                Featured Spaces
              </span>
            </h2>

            <p className="mt-3 text-base leading-7 text-base-content/65">
              Handpicked workspaces, creative studios, and premium venues
              trusted by thousands of professionals and businesses.
            </p>
          </div>

          <Link
            href="/spaces"
            className="btn rounded-full border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 px-6 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Spaces
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Loading */}
        {isPending && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SpaceCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-3xl border border-error/20 bg-error/5 py-16 text-center">
            <h3 className="text-xl font-semibold text-error">
              Something went wrong
            </h3>

            <p className="mt-2 text-base-content/60">
              We couldn&apos;t load the featured spaces right now.
            </p>
          </div>
        )}

        {/* Empty */}
        {!isPending && !isError && spaces?.length === 0 && (
          <div className="rounded-3xl border border-dashed border-base-300 py-20 text-center">
            <h3 className="text-xl font-semibold">
              No featured spaces available
            </h3>

            <p className="mt-2 text-base-content/60">
              Check back later for newly added spaces.
            </p>
          </div>
        )}

        {/* Cards */}
        {!isPending && !isError && spaces && spaces.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map((space) => (
              <SpaceCard
                key={space._id}
                space={space}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}