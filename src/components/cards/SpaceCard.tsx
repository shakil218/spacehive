import Link from "next/link";
import { Space } from "@/types/space";
import { MapPin, Star, ArrowRight } from "lucide-react";


export default function SpaceCard({
  space,
}: {
  space: Space;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <figure className="relative h-56 overflow-hidden">
        {space.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={space.imageUrl}
            alt={space.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-base-200 text-base-content/40">
            No Image
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {space.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {space.rating.toFixed(1)}
        </div>
      </figure>

      {/* Content */}
      <div className="flex flex-col p-5">
        <h3 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-primary">
          {space.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/65">
          {space.shortDescription}
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-sm text-base-content/60">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="line-clamp-1">{space.location}</span>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-base-300" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              ${space.price}
            </p>
            <p className="text-xs text-base-content/50">
              Per Day
            </p>
          </div>

          <Link
            href={`/spaces/${space._id}`}
            className="btn rounded-full border-0 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 px-5 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}