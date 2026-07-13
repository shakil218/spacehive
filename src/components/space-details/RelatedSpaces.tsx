"use client";

import SpaceCard from "@/components/cards/SpaceCard";
import { useRelatedSpaces } from "@/hooks/useSpaces";

interface Props {
  id: string;
}

export default function RelatedSpaces({
  id,
}: Props) {
  const {
    data: spaces,
    isPending,
  } = useRelatedSpaces(id);

  if (isPending) {
    return null;
  }

  if (!spaces?.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Related Spaces
        </h2>

        <p className="mt-2 text-base-content/60">
          Similar spaces you may also like.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {spaces.map((space) => (
          <SpaceCard
            key={space._id}
            space={space}
          />
        ))}
      </div>
    </section>
  );
}