"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname === "/login" || pathname === "/signup" || pathname === "/not-found") {
    return null;
  }

  return (
    <footer className="border-t border-black/5 py-16 text-center text-muted bg-white mt-20">
      <p>&copy; 2026 DressCode AI. Built with Next.js, FastAPI & pgvector.</p>
      <div className="mt-4 opacity-60 text-sm flex justify-center gap-6">
        <Link href="#">Privacy</Link>
        <Link href="#">Terms</Link>
        <Link href="#">GitHub</Link>
      </div>
    </footer>
  );
}