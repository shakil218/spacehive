import Link from "next/link";
import {
  Building2,
  PartyPopper,
  Camera,
  Presentation,
} from "lucide-react";

const categories = [
  {
    name: "Co-working",
    description: "Flexible desks and private offices for freelancers, startups, and remote teams.",
    icon: Building2,
  },
  {
    name: "Meeting Room",
    description: "Professional meeting rooms equipped for presentations, interviews, and team discussions.",
    icon: Presentation,
  },
  {
    name: "Event Venue",
    description: "Spacious venues for conferences, weddings, parties, workshops, and community events.",
    icon: PartyPopper,
  },
  {
    name: "Studio",
    description: "Fully equipped photo, video, music, and podcast studios ready for production.",
    icon: Camera,
  },
];

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Browse by{" "}
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              Category
            </span>
          </h2>

          <p className="mt-4 text-base-content/60">
            Explore spaces tailored to your work, meetings, events, and creative
            projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, description, icon: Icon }) => (
            <Link
              key={name}
              href={`/spaces?category=${encodeURIComponent(name)}`}
              className="group rounded-3xl border border-base-300 bg-base-100 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-violet-600/10 via-pink-500/10 to-amber-400/10 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-8 w-8 text-pink-500" />
              </div>

              <h3 className="text-xl font-semibold">{name}</h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}