import Link from "next/link";
import { Building2, PartyPopper, Camera } from "lucide-react";

const categories = [
  {
    name: "Co-working",
    description: "Desks and private offices for teams and freelancers",
    icon: Building2,
  },
  {
    name: "Event Venue",
    description: "Halls and rooftops for parties, weddings, and meetups",
    icon: PartyPopper,
  },
  {
    name: "Studio",
    description: "Photo, video, and podcast studios ready to shoot",
    icon: Camera,
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Browse by <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">Category</span></h2>
        <p className="text-base-content/60 mt-2">
          Whatever you&apos;re planning, there&apos;s a space built for it.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/spaces?category=${encodeURIComponent(cat.name)}`}
            className="card bg-base-100 border border-base-300 rounded-2xl p-6 text-center hover:border-pink-500 hover:shadow-md transition-all"
          >
            <div className="mx-auto bg-linear-to-r from-violet-600/20 via-pink-500/20 to-amber-400/20 text-primary rounded-full h-14 w-14 flex items-center justify-center mb-4">
              <cat.icon className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="font-semibold text-lg">{cat.name}</h3>
            <p className="text-sm text-base-content/60 mt-1">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}