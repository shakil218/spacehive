"use client";

import { useEffect, useState } from "react";
import { RotateCcw, Search } from "lucide-react";

import { SpaceFilters } from "@/types/space";
import useDebounce from "@/hooks/useDebounce";

interface SpacesToolbarProps {
  filters: SpaceFilters;

  setFilters: (updater: (prev: SpaceFilters) => SpaceFilters) => void;
}

export default function SpacesToolbar({
  filters,
  setFilters,
}: SpacesToolbarProps) {
  // Local search state
  const [searchValue, setSearchValue] = useState(filters.search ?? "");

  // Debounce search
  const debouncedSearch = useDebounce(searchValue, 500);

  // Update URL after debounce
  useEffect(() => {
    if (debouncedSearch === filters.search) {
      return;
    }

    setFilters((prev) => ({
      ...prev,
      search: debouncedSearch,
      page: 1,
    }));
  }, [debouncedSearch, filters.search, setFilters]);

  const handleReset = () => {
    setSearchValue("");

    setFilters(() => ({
      search: "",
      category: "",
      rating: undefined,
      sort: "newest",
      page: 1,
      limit: 8,
    }));
  };

  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-11">
        {/* Search */}
        <label className="input input-bordered flex items-center gap-2 rounded-2xl lg:col-span-3">
          <Search className="h-4 w-4 text-base-content/50" />

          <input
            type="text"
            placeholder="Search spaces..."
            className="grow w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>

        {/* Category */}
        <select
          className="select select-bordered rounded-2xl lg:col-span-2"
          value={filters.category ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              category: e.target.value,
              page: 1,
            }))
          }
        >
          <option value="">All Categories</option>

          <option value="Co-working">Co-working</option>

          <option value="Meeting Room">Meeting Room</option>

          <option value="Studio">Studio</option>

          <option value="Event Venue">Event Venue</option>
        </select>

        {/* Rating */}
        <select
          className="select select-bordered rounded-2xl lg:col-span-2"
          value={filters.rating ?? ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,

              rating: e.target.value ? Number(e.target.value) : undefined,

              page: 1,
            }))
          }
        >
          <option value="">Any Rating</option>

          <option value="5">5 ★</option>

          <option value="4.5">4.5 ★ & Up</option>

          <option value="4">4 ★ & Up</option>

          <option value="3.5">3.5 ★ & Up</option>
        </select>

        {/* Sort */}
        <select
          className="select select-bordered rounded-2xl lg:col-span-2"
          value={filters.sort ?? "newest"}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,

              sort: e.target.value as SpaceFilters["sort"],

              page: 1,
            }))
          }
        >
          <option value="newest">Newest</option>

          <option value="rating">Top Rated</option>

          <option value="price-low">Low Price</option>

          <option value="price-high">High Price</option>
        </select>

        {/* Reset */}
        <button
          type="button"
          onClick={handleReset}
          className="btn rounded-2xl border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl lg:col-span-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>
    </section>
  );
}
