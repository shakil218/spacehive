"use client";

import { useSpace } from "@/hooks/useSpaces";
import SpaceGallery from "./SpaceGallery";
import SpaceInfo from "./SpaceInfo";
import BookingCard from "./BookingCard";
import SpaceAmenities from "./SpaceAmenities";
import SpaceHost from "./SpaceHost";
import RelatedSpaces from "./RelatedSpaces";
import SpaceCardSkeleton from "../cards/SpaceCardSkeleton";

export default function SpaceClient({ id }: { id: string }) {
  const { data: space, isPending, isError } = useSpace(id);

  if (isPending) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SpaceCardSkeleton />
        </div>
      </section>
    );
  }

  if (isError || !space) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">Space not found.</div>
      </section>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <SpaceGallery imageUrl={space.imageUrl} title={space.title} />

      <div className="grid items-start gap-10 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
          <SpaceInfo space={space} />

          <SpaceAmenities amenities={space.amenities} />

          <SpaceHost hostName={space.hostName} />
        </div>

        <div className="lg:col-span-1 self-start">
          <BookingCard space={space} />
        </div>
      </div>

      <RelatedSpaces id={space._id} />
    </main>
  );
}
