"use client";

import { Building2 } from "lucide-react";

import AddSpaceForm from "@/components/forms/AddSpaceForm";

export default function AddSpacePage() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl
        space-y-8
        px-4
        pb-16
        lg:px-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          rounded-3xl
          border
          border-base-300
          bg-base-100
          p-8
          shadow-sm
        "
      >
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
            Add New Space
          </h1>

          <p className="mt-2 text-base-content/60">
            Create a new workspace that users can browse and book.
          </p>
        </div>

        <div
          className="
            hidden
            rounded-2xl
            bg-linear-to-r
              from-violet-600/15
              via-pink-500/15
              to-amber-400/15
            p-5
            lg:block
          "
        >
          <Building2
            className="
              h-12
              w-12
              text-secondary
            "
          />
        </div>
      </div>

      {/* Form */}

      <AddSpaceForm />
    </section>
  );
}