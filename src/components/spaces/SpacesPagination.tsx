"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SpacesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function SpacesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: SpacesPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section className="mt-12 flex items-center justify-center gap-2 flex-wrap">
      {/* Previous */}
      <button
        className="btn btn-outline rounded-xl"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`btn rounded-xl min-w-12 ${
            currentPage === page
              ? "border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white"
              : "btn-outline"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        className="btn btn-outline rounded-xl"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <ChevronRight size={18} />
      </button>
    </section>
  );
}