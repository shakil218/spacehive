"use client";

import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-10">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        {/* 404 */}
        <h1 className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/60 md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn border-none bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
  href="/spaces"
  className="btn btn-outline border-violet-500"
>
  <Search
    size={18}
    className="text-violet-600"
  />

  <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
    Explore Spaces
  </span>
</Link>
        </div>

        {/* Illustration */}
        <div>
          <div className="mx-auto flex h-30 w-30 items-center justify-center rounded-full bg-linear-to-r from-violet-600/15 via-pink-500/15 to-amber-400/15">
            <span className="text-7xl">🐝</span>
          </div>

          <p className="mt-6 text-sm text-base-content/50">
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">SpaceHive </span>couldn&apos;t find the page you requested.
          </p>
        </div>
      </div>
    </section>
  );
}