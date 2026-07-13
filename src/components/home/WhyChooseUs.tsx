import { ShieldCheck, Wallet, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Hosts",
    description: "Every space is listed by a reviewed, verified host.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "The price you see is the price you pay — no hidden fees.",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "No back-and-forth. Reserve a space the moment you find it.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Real help from our team whenever you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">SpaceHive</span></h2>
          <p className="text-base-content/60 mt-2">
            Everything you need to book with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-base-300 bg-base-100 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-violet-600/10 via-pink-500/10 to-amber-400/10 text-pink-500 transition-all duration-300 group-hover:scale-110 ">
              
              <f.icon className="h-6 w-6" />
            </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-base-content/60 mt-1">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}