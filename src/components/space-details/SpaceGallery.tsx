import Image from "next/image";

interface SpaceGalleryProps {
  imageUrl: string;
  title: string;
  availableFrom: string;
  capacity: number;
}

export default function SpaceGallery({
  imageUrl,
  title,
  availableFrom,
  capacity,
}: SpaceGalleryProps) {
  const now = new Date();
  const availableDate = new Date(availableFrom);

  const isAvailable = availableDate <= now;
  const isFull = capacity <= 0;

  const diff = availableDate.getTime() - now.getTime();

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  );

  return (
    <section className="group overflow-hidden rounded-3xl">
      <div className="relative h-80 w-full md:h-125">

        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Status Badge */}

        <div className="absolute right-6 top-6">

          {isFull ? (
            <span className="badge badge-error badge-lg px-5 py-4">
              Fully Booked
            </span>
          ) : isAvailable ? (
            <span className="badge badge-success badge-lg px-5 py-4">
              Available Now
            </span>
          ) : (
            <span className="badge badge-warning badge-lg px-5 py-4">
              Opens in {days}d {hours}h
            </span>
          )}

        </div>

        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}