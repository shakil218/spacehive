"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SpacesPagination() {
  return (
    <section className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">

      {/* Result Info */}
      <p className="text-sm text-base-content/60">
        Showing <span className="font-semibold">1–8</span> of{" "}
        <span className="font-semibold">32</span> spaces
      </p>

      {/* Pagination */}
      <div className="join">

        <button className="join-item btn btn-outline">
          <ChevronLeft size={18} />
        </button>

        <button className="join-item btn btn-active">
          1
        </button>

        <button className="join-item btn">
          2
        </button>

        <button className="join-item btn">
          3
        </button>

        <button className="join-item btn">
          4
        </button>

        <button className="join-item btn btn-outline">
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
}