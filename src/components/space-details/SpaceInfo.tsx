import {
  CalendarDays,
  MapPin,
  Star,
  Users,
  Tag,
} from "lucide-react";

import { Space } from "@/types/space";

interface SpaceInfoProps {
  space: Space;
}

export default function SpaceInfo({
  space,
}: SpaceInfoProps) {
  return (
    <section className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold">
          {space.title}
        </h1>

        <p className="mt-2 text-base-content/70">
          {space.shortDescription}
        </p>
      </div>

      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <MapPin className="h-5 w-5 text-primary" />

          <div>
            <p className="text-xs text-base-content/60">
              Location
            </p>

            <p className="font-medium">
              {space.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

          <div>
            <p className="text-xs text-base-content/60">
              Rating
            </p>

            <p className="font-medium">
              {space.rating} / 5
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <Tag className="h-5 w-5 text-primary" />

          <div>
            <p className="text-xs text-base-content/60">
              Category
            </p>

            <p className="font-medium">
              {space.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <Users className="h-5 w-5 text-primary" />

          <div>
            <p className="text-xs text-base-content/60">
              Capacity
            </p>

            <p className="font-medium">
              {space.capacity} People
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <CalendarDays className="h-5 w-5 text-primary" />

          <div>
            <p className="text-xs text-base-content/60">
              Available From
            </p>

            <p className="font-medium">
              {space.availableFrom}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4">
          <span className="text-xl font-bold text-primary">
            $
          </span>

          <div>
            <p className="text-xs text-base-content/60">
              Price
            </p>

            <p className="font-bold text-primary">
              ${space.price}/day
            </p>
          </div>
        </div>

      </div>

      {/* Description */}
      <div>
        <h2 className="mb-3 text-2xl font-semibold">
          About this space
        </h2>

        <p className="leading-8 text-base-content/70">
          {space.description}
        </p>
      </div>

    </section>
  );
}