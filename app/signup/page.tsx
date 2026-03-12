import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up | DressCode",
  description: "Create your digital wardrobe account.",
};

export default function SignupPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background px-5 overflow-hidden">
      <div className="bento-card max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-semibold mb-2">
            Create Account
          </h1>
          <p className="text-muted">Join DressCode today</p>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-muted"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-foreground transition-colors bg-gray-50"
              placeholder="Jane Doe"
            />
          </div>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-muted"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-foreground transition-colors bg-gray-50"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium mb-1 text-muted"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-foreground transition-colors bg-gray-50"
              placeholder="••••••••"
            />
          </div>

          <button className="bg-foreground text-bold p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2">
            <Link href="/">Sign Up</Link>
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-foreground font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
