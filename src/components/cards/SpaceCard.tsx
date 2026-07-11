import Link from "next/link";
import { Star, MapPin } from "lucide-react";

export interface SpaceCardData {
  _id: string;
  title: string;
  shortDescription: string;
  price: number;
  location: string;
  rating: number;
  imageUrl: string;
  category: string;
}

export default function SpaceCard({ space }: { space: SpaceCardData }) {
  return (
    <div className="card bg-base-100 border border-base-300 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
      <figure className="h-44 w-full bg-base-200 shrink-0">
        {space.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={space.imageUrl}
            alt={space.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-base-content/30 text-sm">
            No image
          </div>
        )}
      </figure>

      <div className="card-body p-4 grow flex flex-col">
        <span className="badge badge-secondary badge-sm w-fit">{space.category}</span>
        <h3 className="font-semibold text-base mt-1 line-clamp-1">{space.title}</h3>
        <p className="text-sm text-base-content/60 line-clamp-2 grow">
          {space.shortDescription}
        </p>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="flex items-center gap-1 text-base-content/60">
            <MapPin className="h-3.5 w-3.5" />
            <span className="line-clamp-1">{space.location}</span>
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            {space.rating.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-base-200">
          <span className="font-bold text-primary">${space.price}<span className="text-xs font-normal text-base-content/50">/day</span></span>
          <Link href={`/spaces/${space._id}`} className="btn btn-primary btn-sm rounded-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}