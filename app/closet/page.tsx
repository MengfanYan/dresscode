import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Closet | DressCode",
  description: "View your digital wardrobe.",
};

export default function ClosetPage() {
  return (
    <div className="max-w-300 mx-auto px-5 pb-20 pt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-semibold mb-2">My Closet</h1>
          <p className="text-muted">Managed by AI • 12 Items</p>
        </div>
        <Link href="/closet/upload">
          <button className="bg-foreground text-bold px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-md">
            + Add New Item
          </button>
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {['All', 'Tops', 'Bottoms', 'Shoes', 'Outerwear', 'Accessories'].map((cat, i) => (
          <button 
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-black text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Mock Items */}
        {[
          { name: "White Baby Tee", cat: "Top", bg: "bg-pink-50" },
          { name: "Low-rise Jeans", cat: "Bottom", bg: "bg-blue-50" },
          { name: "Chunky Sneakers", cat: "Shoes", bg: "bg-gray-100" },
          { name: "Denim Jacket", cat: "Outerwear", bg: "bg-blue-100" },
          { name: "Black Blazer", cat: "Outerwear", bg: "bg-gray-200" },
          { name: "Cargo Pants", cat: "Bottom", bg: "bg-green-50" },
          { name: "Silver Bag", cat: "Accessory", bg: "bg-gray-100" },
          { name: "Graphic Hoodie", cat: "Top", bg: "bg-purple-50" },
        ].map((item, idx) => (
          <Link href={`/closet/${idx}`} key={idx}>
            <div className="group bg-white rounded-2xl border border-black/5 overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-card cursor-pointer h-full flex flex-col">
              <div className={`aspect-3/4 ${item.bg} relative`}>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm truncate pr-2">{item.name}</h3>
                    <p className="text-xs text-muted mt-0.5">{item.cat}</p>
                  </div>
                  {idx < 2 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-accent/10 text-accent px-2 py-1 rounded-md">New</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
