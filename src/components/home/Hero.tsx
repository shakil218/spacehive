"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Star, ShieldCheck } from "lucide-react";

const spotlights = [
  {
    title: "Skyline Loft Co-working",
    location: "Manhattan, New York",
    price: 45,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
  },
  {
    title: "The Glasshouse Event Hall",
    location: "Austin, Texas",
    price: 220,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  {
    title: "Northlight Photo Studio",
    location: "Portland, Oregon",
    price: 60,
    rating: 5.0,
    imageUrl:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % spotlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = spotlights[index];

  return (
    <section className="relative min-h-[60vh] md:min-h-[68vh] flex items-center overflow-hidden">
      {/* Ambient gradient blobs — echo the spotlight's violet/pink/amber palette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-base-100/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center w-full py-16">
        {/* Left: copy + search */}
        <div>
          <span className="inline-flex items-center gap-1.5 badge border border-white/40 bg-linear-to-r from-violet-600/15 via-pink-500/15 to-amber-400/15 backdrop-blur-sm px-4 py-4 text-sm font-medium text-base-content shadow-sm">
            <ShieldCheck size={18} className="text-pink-500" />
            Trusted by 10,000+ Professionals
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Find Your Perfect{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-600 via-pink-500 to-amber-400">
              Space
            </span>
          </h1>
          <p className="mt-4 text-base-content/70 text-lg max-w-md">
            Book co-working spaces, event venues, and creative studios from
            trusted hosts — in minutes, not days.
          </p>

          <form
            action="/spaces"
            className="mt-8 flex items-center gap-2 bg-base-100/90 backdrop-blur-sm rounded-full p-2 shadow-lg shadow-violet-500/10 border border-base-300 max-w-md"
          >
            <Search className="h-5 w-5 text-base-content/40 ml-2 shrink-0" />
            <input
              type="text"
              name="search"
              placeholder="Search by name, city, or category..."
              className="input input-ghost grow focus:outline-none border-none bg-transparent"
              suppressHydrationWarning
            />
            <button
              type="submit"
              className="btn border-none rounded-full px-6 text-white bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 hover:brightness-110 hover:shadow-md transition-all"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-2.5 mt-5">
            {["Co-working", "Event Venue", "Studio"].map((cat) => (
              <Link
                key={cat}
                href={`/spaces?category=${encodeURIComponent(cat)}`}
                className="badge badge-outline badge-lg px-4 py-3 bg-base-100/70 backdrop-blur-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: rotating spotlight card */}
        <div className="hidden md:block">
          <div className="relative max-w-sm ml-auto">
            {/* Glow that sits behind the card, matching the active gradient */}
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-r from-violet-600/30 via-pink-500/30 to-amber-400/30 blur-2xl -z-10" />

            <div className="card bg-base-100 rounded-2xl shadow-xl overflow-hidden border border-base-300">
              <figure className="h-56 w-full relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.imageUrl}
                  alt={active.title}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />
                <span className="absolute top-3 left-3 badge border-none text-white text-xs font-medium bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 px-3 py-3 shadow-md">
                  Today&apos;s Special
                </span>
              </figure>
              <div className="card-body p-5">
                <h3 className="font-semibold">{active.title}</h3>
                <p className="text-sm text-base-content/60">
                  {active.location}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-linear-to-r from-violet-600 via-pink-500 to-amber-400">
                    ${active.price}
                    <span className="text-xs font-normal text-base-content/50">
                      /day
                    </span>
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                    {active.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-1.5 justify-end mt-4 mr-2">
            {spotlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show spotlight ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400"
                    : "w-1.5 bg-base-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
