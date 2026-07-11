"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "How do I book a space?",
    a: "Browse or search for a space, open its details page, and use the booking contact on the listing to confirm availability with the host. You'll need a free SpaceHive account to save and manage bookings.",
  },
  {
    q: "Can I list my own space?",
    a: "Yes — once you're signed in, go to Add Space from the navbar, fill in your space's details, and it will appear in the public listing immediately.",
  },
  {
    q: "Is there a fee to join SpaceHive?",
    a: "Creating an account and browsing spaces is completely free. Hosts only pay a small service fee when a booking is confirmed.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancellation policies are set by individual hosts and shown on each space's details page before you book.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-base-100 py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mt-4 text-4xl font-black">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base-content/70">
            Everything you need to know about SpaceHive.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 via-pink-500 to-amber-400 text-white shadow-lg">
                      {index + 1}
                    </span>

                    <h3 className="text-lg font-semibold">
                      {faq.q}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-violet-600/10 via-pink-500/10 to-amber-400/10 text-pink-500 transition-all duration-300 group-hover:scale-110">
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-20 pb-6 leading-7 text-base-content/70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}