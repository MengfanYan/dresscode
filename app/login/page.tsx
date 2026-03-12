import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | DressCode",
  description: "Access your digital wardrobe.",
};

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background px-5 overflow-hidden">
      <div className="bento-card max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-semibold mb-2">
            Welcome Back
          </h1>
          <p className="text-muted">Sign in to your DressCode account</p>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-muted"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-foreground transition-colors bg-gray-50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-muted"
              >
                Password
              </label>
              <a href="#" className="text-xs text-muted hover:text-foreground">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-foreground transition-colors bg-gray-50"
              placeholder="••••••••"
            />
          </div>

          <button className="bg-foreground text-bold p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2">
            <Link href="/">Sign In</Link>
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-foreground font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
