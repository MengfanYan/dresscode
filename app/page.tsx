// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="view-section">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-5 py-10 overflow-hidden">
        <div className="hero-bg-blob" />
        
        <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.1] mb-6 max-w-4xl">
          Wear what you own.<br />Love what you wear.
        </h1>
        
        <p className="text-xl text-muted max-w-lg mb-10 leading-relaxed">
          The AI stylist that organizes your closet, learns your taste, and tells you exactly what to wear based on the weather and occasion.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
          <Link href="/recommendations">
            <button className="bg-[#FF9A9E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-pink-200">
              Generate Outfit
            </button>
          </Link>
          <Link href="/closet/upload">
            <button className="bg-white text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-md hover:shadow-lg text-foreground">
              Upload Closet
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <div className="max-w-300 mx-auto px-5 pb-20 grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Feature 1 */}
        <div className="bento-card md:col-span-4">
          <div className="w-12 h-12 bg-foreground text-white rounded-xl flex items-center justify-center text-2xl mb-4">
            📸
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Digitize</h3>
          <p className="text-muted">
            Upload photos of your clothes. We auto-tag category, color, and warmth.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bento-card md:col-span-4">
          <div className="w-12 h-12 bg-foreground text-white rounded-xl flex items-center justify-center text-2xl mb-4">
            🌡️
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Context Aware</h3>
          <p className="text-muted">
            We check the weather forecast so you don&apos;t have to. Never freeze in a tee again.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bento-card md:col-span-4">
          <div className="w-12 h-12 bg-foreground text-white rounded-xl flex items-center justify-center text-2xl mb-4">
            🛍️
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">Smart Shop</h3>
          <p className="text-muted">
            We only suggest buying things that match at least 5 items you already own.
          </p>
        </div>

        {/* Large Feature / App Preview Placeholder */}
        <div className="bento-card md:col-span-12 min-h-100 flex items-center justify-center bg-gray-50 border-dashed border-2 border-gray-200">
          <p className="text-muted font-medium">
            ✨ App Interactive Demo Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
