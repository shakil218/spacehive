import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Chowdhury",
    role: "Freelance Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    quote:
      "I booked a co-working desk for a week while traveling and the whole process took under two minutes. The listing photos matched exactly what I got.",
  },
  {
    name: "Rafiul Islam",
    role: "Event Planner",
    imageUrl:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=400",
    quote:
      "We've hosted three client launch parties through SpaceHive now. Filtering by capacity and price up front saves me hours of back-and-forth emails.",
  },
  {
    name: "Priya Nair",
    role: "Content Creator",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    quote:
      "Found a podcast studio ten minutes from my apartment with same-day availability. The reviews from other creators helped me pick with confidence.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-base-200 py-16">
      {/* Background Blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="badge border-pink-500/20 bg-linear-to-r from-violet-600/10 via-pink-500/10 to-amber-400/10 px-4 py-3 text-pink-500">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Loved by{" "}
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              Thousands of Professionals
            </span>
          </h2>

          <p className="mt-4 text-base-content/70">
            Discover why freelancers, startups, creators, and businesses trust
            SpaceHive to book their perfect workspace.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group rounded-3xl border border-base-300 bg-base-100/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Quote Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 via-pink-500 to-amber-400 text-white shadow-lg">
                <Quote size={20} />
              </div>

              {/* Quote */}
              <p className="leading-8 text-base-content/70">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4 border-t border-base-300 pt-6">
                <div className="avatar">
                  <div className="h-14 w-14 rounded-full ring ring-primary/20 ring-offset-2 ring-offset-base-100">
                    <Image
                      src={t.imageUrl}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-base-content/60">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="absolute inset-x-8 bottom-0 h-1 rounded-full bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}