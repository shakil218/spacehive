import Image from "next/image";

interface SpaceGalleryProps {
  imageUrl: string;
  title: string;
}

export default function SpaceGallery({
  imageUrl,
  title,
}: SpaceGalleryProps) {
  return (
    <section className="group overflow-hidden rounded-3xl">
      <div className="relative h-80 md:h-125 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}