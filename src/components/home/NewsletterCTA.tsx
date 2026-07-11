"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production this would POST to /api/newsletter
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <div className="bg-linear-to-r from-violet-600/75 via-pink-500/75 to-amber-400 rounded-3xl p-10 md:p-14 text-center text-primary-content">
        <h2 className="text-3xl font-bold">Ready to Find Your Space?</h2>
        <p className="mt-2 text-primary-content/90 max-w-lg mx-auto">
          Join thousands of hosts and renters already using SpaceHive. Get
          new listings and offers straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input grow rounded-full text-base-content"
          />
          <button type="submit" className="btn btn-neutral rounded-full">
            {submitted ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>

        <Link href="/spaces" className="btn btn-outline btn-sm rounded-full mt-6 border-primary-content text-primary-content hover:bg-primary-content hover:text-secondary">
          Or Browse Spaces Now
        </Link>
      </div>
    </section>
  );
}