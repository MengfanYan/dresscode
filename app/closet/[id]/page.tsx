import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Item Details | DressCode",
  description: "Detailed view of your wardrobe item.",
};

export default function ClosetItemDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-250 mx-auto px-5 pb-20 pt-10">
       <Link href="/closet" className="text-muted hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors">
         ← Back to Closet
       </Link>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="aspect-3/4 bg-pink-50 rounded-2xl relative overflow-hidden border border-black/5 shadow-sm">
             {/* In a real app, use the ID to fetch the correct image */}
             <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">👚</div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-8">
             <div>
                <div className="flex justify-between items-start">
                   <div>
                      <span className="text-sm font-bold text-muted uppercase tracking-wider">Top</span>
                      <h1 className="font-serif text-4xl font-semibold mt-2 text-balance">White Baby Tee</h1>
                   </div>
                   <Link href="/closet/edit">
                    <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors" title="Edit Item">
                        ✏️
                    </button>
                   </Link>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-foreground">Uniqlo</span>
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-foreground">White</span>
                   <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Y2K</span>
                   <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">Casual</span>
                </div>
             </div>

             {/* The Story Card */}
             <div className="bento-card bg-linear-to-br from-[#FFF0F5] to-white border-pink-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">✨</div>
                
                <div className="flex items-center gap-2 mb-3 relative z-10">
                   <span className="text-xl">💌</span>
                   <h3 className="font-serif text-lg font-semibold text-pink-900">Wardrobe Memory</h3>
                </div>
                <p className="text-pink-900/80 leading-relaxed italic relative z-10">
                   &quot;You added this piece on a rainy Tuesday in March. Since then, it&apos;s become your &apos;Lucky Charm&apos; for first dates—you&apos;ve worn it to 3 of them, and 2 led to second dates! It loves being paired with your <strong>Low-rise Jeans</strong> but surprisingly hasn&apos;t met your <strong>Denim Jacket</strong> yet.&quot;
                </p>
                <div className="mt-4 pt-4 border-t border-pink-200/50 flex justify-between items-center relative z-10">
                   <span className="text-xs font-bold text-pink-900/50 uppercase tracking-widest">Based on 12 wears</span>
                   <span className="text-xs font-medium text-pink-800 bg-pink-100 px-2 py-1 rounded">High Utility</span>
                </div>
             </div>

             {/* Stats / Metadata Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                   <div className="text-muted text-xs uppercase font-bold tracking-wider mb-1">Added On</div>
                   <div className="font-medium">March 10, 2026</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                   <div className="text-muted text-xs uppercase font-bold tracking-wider mb-1">Cost per Wear</div>
                   <div className="font-medium text-green-600">$1.25</div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                   <div className="text-muted text-xs uppercase font-bold tracking-wider mb-1">Warmth</div>
                   <div className="font-medium flex items-center gap-1">
                        Light
                        <span className="flex gap-0.5 ml-1">
                            <span className="w-2 h-2 rounded-full bg-foreground"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                        </span>
                   </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                   <div className="text-muted text-xs uppercase font-bold tracking-wider mb-1">Condition</div>
                   <div className="font-medium">Excellent</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}