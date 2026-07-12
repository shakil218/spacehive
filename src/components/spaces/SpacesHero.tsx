import { Building2 } from "lucide-react";

export default function SpacesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="max-w-3xl mx-auto text-center space-y-3">

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 badge border border-white/40 bg-linear-to-r from-violet-600/15 via-pink-500/15 to-amber-400/15 backdrop-blur-sm px-4 py-4 text-sm font-medium text-base-content shadow-sm">
            <Building2 size={16} className="text-pink-500" />
            Explore Premium Spaces
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Your Perfect{" "}
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              Space
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-base-content/70 leading-relaxed">
            Browse modern co-working spaces, meeting rooms, event venues,
            creative studios, and more. Book the ideal place for work,
            collaboration, or your next event.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8">

            <div>
              <h3 className="text-3xl font-bold text-pink-500">500+</h3>
              <p className="text-sm text-base-content/60">
                Premium Spaces
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">50+</h3>
              <p className="text-sm text-base-content/60">
                Cities
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-500">4.9★</h3>
              <p className="text-sm text-base-content/60">
                Average Rating
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}