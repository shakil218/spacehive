
"use client";

import Link from "next/link";
import { LogOut } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

const loggedOutLinks = [
  { href: "/spaces", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const loggedInExtraLinks = [
  { href: "/items/add", label: "Add Space" },
  { href: "/items/manage", label: "Manage Spaces" },
];

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const links = session ? [...loggedOutLinks, ...loggedInExtraLinks] : loggedOutLinks;

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  // Helper function to check if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-50 px-4 md:px-8 backdrop-blur-md bg-opacity-90">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 p-2 shadow-xl border border-base-200 text-lg font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={isActive(link.href) ? "bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent border-2 border-b-pink-500 hover:opacity-90 transition-opacity duration-200 font-semibold bg-base-200" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {!session && (
              <>
                <div className="divider my-1"></div>
                <li><Link href="/login">Log In</Link></li>
                <li><Link href="/register" className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200 font-semibold">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
        
        {/* Logo with Pretty Linear Gradient */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight px-2 bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200"
        >
          🐝 SpaceHive
        </Link>
      </div>

      {/* Desktop links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? "bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent font-bold border-2 border-b-pink-500 bg-base-200/60" 
                    : "hover:text-violet-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth area */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary" />
        ) : session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder hover:scale-105 transition-transform">
              <div className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 rounded-full w-9 shadow-md">
                <span className="text-sm font-semibold">
                  {session.user.name?.[0]?.toUpperCase() ?? "U"}
                </span>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-base-200">
              <li className="menu-title border-b border-base-200 pb-2 mb-1 text-base-content/70">
                Hi, {session.user.name}
              </li>
              <li><Link href="/items/manage">Manage Spaces</Link></li>
              <li>
                <button 
                  onClick={handleSignOut} 
                  className="text-error hover:bg-error/10 active:bg-error/20"
                >
                  <span><LogOut className="h-4 w-4" /> </span>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost hidden sm:inline-flex hover:bg-base-200 transition-colors">
              Log In
            </Link>
            <Link 
              href="/register" 
              className="btn border-none text-white bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 hover:from-violet-700 hover:via-pink-600 hover:to-amber-500 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}