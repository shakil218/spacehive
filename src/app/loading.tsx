"use client";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <h1 className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-4xl font-black text-transparent">
          🐝 SpaceHive
        </h1>

        {/* Loading Spinner */}
        <div className="relative">
          <span className="loading loading-spinner loading-lg text-violet-600" />

          <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/20" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            Loading...
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            Preparing your workspace
          </p>
        </div>
      </div>
    </div>
  );
}