"use client";

import { Search, RotateCcw } from "lucide-react";

export default function SpacesToolbar() {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-12">

        {/* Search */}
        <label className="input input-bordered flex items-center gap-2 rounded-2xl lg:col-span-4">
          <Search className="h-4 w-4 text-base-content/50" />

          <input
            type="text"
            placeholder="Search spaces..."
            className="grow"
          />
        </label>

        {/* Category */}
        <select className="select select-bordered rounded-2xl lg:col-span-2">
          <option>All Categories</option>
          <option>Co-working</option>
          <option>Meeting Room</option>
          <option>Studio</option>
          <option>Event Venue</option>
        </select>

        {/* Location */}
        <select className="select select-bordered rounded-2xl lg:col-span-2">
          <option>All Locations</option>
          <option>London</option>
          <option>New York</option>
          <option>Berlin</option>
          <option>Tokyo</option>
        </select>

        {/* Sort */}
        <select className="select select-bordered rounded-2xl lg:col-span-2">
          <option>Newest</option>
          <option>Highest Rated</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
        </select>

        {/* Reset */}
        <button
          type="button"
          className="btn rounded-2xl lg:col-span-2 border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 px-5 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>
    </section>
  );
}