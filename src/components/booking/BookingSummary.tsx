import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { Space } from "@/types/space";

interface BookingSummaryProps {
  space: Space;
}

export default function BookingSummary({
  space,
}: BookingSummaryProps) {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 p-5">

      <div className="flex flex-col gap-5 md:flex-row">

        {/* Image */}

        <div className="relative h-52 w-full overflow-hidden rounded-2xl md:h-40 md:w-60">
          <Image
            src={space.imageUrl}
            alt={space.title}
            fill
            sizes="300px"
            className="object-cover"
          />
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              {space.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-base-content/60">
              {space.shortDescription}
            </p>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">

            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{space.location}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{space.rating}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span>{space.capacity} Seats</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{space.availableFrom}</span>
            </div>

          </div>

          <div className="mt-6 flex items-end justify-between">

            <div>

              <p className="text-sm text-base-content/60">
                Price Per Day
              </p>

              <h4 className="text-3xl font-bold text-primary">
                ${space.price}
              </h4>

            </div>

            <span className="badge badge-success badge-lg">
              Available
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}