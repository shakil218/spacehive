import {
  Wifi,
  Coffee,
  Car,
  Monitor,
  Snowflake,
  Utensils,
  Tv,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface SpaceAmenitiesProps {
  amenities: string[];
}

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi,
  Coffee: Coffee,
  Parking: Car,
  Projector: Monitor,
  "Air Conditioning": Snowflake,
  Kitchen: Utensils,
  TV: Tv,
  Security: ShieldCheck,
};

export default function SpaceAmenities({
  amenities,
}: SpaceAmenitiesProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          What this space offers
        </h2>

        <p className="mt-2 text-base-content/60">
          Everything included with your booking.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {amenities.map((amenity) => {
          const Icon =
            amenityIcons[amenity] ?? CheckCircle2;

          return (
            <div
              key={amenity}
              className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>

              <span className="font-medium">
                {amenity}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}