"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  
  if (pathname === "/login" || pathname === "/signup" || pathname === "/not-found") {
    return null;
  }

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-300 px-8 py-4 z-50 rounded-full glass-panel flex justify-between items-center shadow-sm">
      <Link href="/" className="font-extrabold text-xl tracking-tighter">
        DressCode
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
        <Link href="/closet" className="hover:text-foreground transition-colors">Closet</Link>
        <Link href="/recommendations" className="hover:text-foreground transition-colors">Recommendations</Link>
        <Link href="/shopping" className="hover:text-foreground transition-colors">Shopping</Link>
        <Link href="/profile" className="hover:text-foreground transition-colors">Profile</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/signup">
          <button className="bg-accent text-bold px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all shadow-md">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
