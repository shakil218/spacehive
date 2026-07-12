"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SpacesHero from "@/components/spaces/SpacesHero";
import SpacesToolbar from "@/components/spaces/SpacesToolbar";
import SpacesGrid from "@/components/spaces/SpacesGrid";
import SpacesPagination from "@/components/spaces/SpacesPagination";

import { useSpaces } from "@/hooks/useSpaces";
import { SpaceFilters } from "@/types/space";

export default function SpacesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo<SpaceFilters>(
    () => ({
      search: searchParams.get("search") ?? "",
      category: searchParams.get("category") ?? "",
      location: searchParams.get("location") ?? "",
      rating: searchParams.get("rating")
        ? Number(searchParams.get("rating"))
        : undefined,
      sort:
        (searchParams.get("sort") as SpaceFilters["sort"]) ??
        "newest",
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || 8,
    }),
    [searchParams]
  );

  const updateFilters = (
    updater: (prev: SpaceFilters) => SpaceFilters
  ) => {
    const next = updater(filters);

    const params = new URLSearchParams();

    Object.entries(next).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== "" &&
        value !== null
      ) {
        params.set(key, String(value));
      }
    });

    router.replace(`/spaces?${params.toString()}`);
  };

  const { data, isPending, isError } = useSpaces(filters);

  return (
    <>
      <SpacesHero />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-6">
        <SpacesToolbar
          filters={filters}
          setFilters={updateFilters}
        />

        <SpacesGrid
          data={data}
          isPending={isPending}
          isError={isError}
        />

        {data && data.totalPages > 1 && (
          <SpacesPagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={(page) =>
              updateFilters((prev) => ({
                ...prev,
                page,
              }))
            }
          />
        )}
      </section>
    </>
  );
}