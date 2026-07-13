import { UserRound, BadgeCheck } from "lucide-react";

interface SpaceHostProps {
  hostName: string;
}

export default function SpaceHost({
  hostName,
}: SpaceHostProps) {
  const initials = hostName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Meet your host
        </h2>

        <p className="mt-2 text-base-content/60">
          Your booking is managed by an experienced host.
        </p>
      </div>

      <div className="flex flex-col gap-5 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:flex-row sm:items-center">

        {/* Avatar */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-2xl font-bold text-white">
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">
              {hostName}
            </h3>

            <BadgeCheck className="h-5 w-5 text-primary" />
          </div>

          <p className="mt-2 text-base-content/70 leading-7">
            Passionate about creating comfortable and inspiring
            spaces for professionals, teams, and events.
            Dedicated to providing a smooth booking experience
            with quick communication and reliable support.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="badge badge-primary badge-outline">
              Verified Host
            </span>

            <span className="badge badge-secondary badge-outline">
              Fast Response
            </span>

            <span className="badge badge-accent badge-outline">
              Trusted Community
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <UserRound className="h-8 w-8 text-primary" />
        </div>

      </div>
    </section>
  );
}