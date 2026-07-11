import Link from "next/link";
import { FaXTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];
export default function Footer() { 
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-xl font-bold bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200">
            🐝 SpaceHive
          </Link>
          <p className="mt-3 text-sm text-neutral-content/70">
            Find and book co-working spaces, event venues, and creative studios near you.
          </p>
        </div>

        <div>
          <h3 className="footer-title text-white/90 mb-2">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/spaces" className="link link-hover">Browse Spaces</Link></li>
            <li><Link href="/spaces?category=Co-working" className="link link-hover">Co-working</Link></li>
            <li><Link href="/spaces?category=Event+Venue" className="link link-hover">Event Venues</Link></li>
            <li><Link href="/spaces?category=Studio" className="link link-hover">Studios</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title text-white/90 mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="link link-hover">About Us</Link></li>
            <li><Link href="/contact" className="link link-hover">Contact</Link></li>
            <li><Link href="/items/add" className="link link-hover">List Your Space</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title text-white/90 mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-neutral-content/80">
            <li>123 Market Street, Dhaka, BD</li>
            <li><a href="mailto:hello@spacehive.app" className="link link-hover">hello@spacehive.app</a></li>
            <li><a href="tel:+8801000000000" className="link link-hover">+880 1000-000000</a></li>
          </ul>
          <div className="flex gap-3 mt-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="btn btn-circle btn-sm btn-ghost text-neutral-content/80 hover:text-black/90"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-content/60">
        © {new Date().getFullYear()} <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">SpaceHive</span>. All rights reserved.
      </div>
    </footer>
  );
}