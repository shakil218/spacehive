import { Search, CalendarCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description:
      "Filter by category, price, and location to find spaces that fit your event or workday.",
  },
  {
    icon: CalendarCheck,
    title: "Book Instantly",
    description:
      "Create an account, review the details, and reserve your space in a few clicks.",
  },
  {
    icon: PartyPopper,
    title: "Show Up & Enjoy",
    description:
      "Arrive at your booked space and get straight to work, your event, or your shoot.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-base-content/60 mt-2">
          From search to booking in three simple steps.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="group relative rounded-3xl border border-base-200 bg-base-100/80 p-8 pt-10 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
          >
            {/* Step Number */}
            <div className="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              {i + 1}
            </div>

            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-violet-600/10 via-pink-500/10 to-amber-400/10 text-pink-500 transition-all duration-300 group-hover:scale-110 ">
              <step.icon className="h-7 w-7" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-base-content">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-xs leading-7 text-base-content/70">
              {step.description}
            </p>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-8 bottom-0 h-1 rounded-full bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
