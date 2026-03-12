import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upload to Closet | DressCode",
  description: "Digitize your wardrobe.",
};

export default function ClosetUploadPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 pb-20 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Upload Zone & Grid */}
        <div className="bento-card md:col-span-8">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold mb-2">Digitize Your Wardrobe</h2>
            <p className="text-muted">Drag and drop images here to process them with our AI.</p>
          </div>
          
          <Link href="/closet/edit">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-all">
              <span className="text-4xl block mb-4">☁️</span>
              <strong className="text-foreground">Click to upload</strong> or drag and drop<br />
              <span className="text-muted text-sm">Supports JPG, PNG, HEIC</span>
            </div>
          </Link>

          <h3 className="mt-12 font-serif text-xl font-semibold mb-4">Recently Added</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {/* Item 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-black/5 relative shadow-sm group">
               <div className="h-48 bg-pink-50 w-full object-cover relative">
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Processing...</div>
               </div>
               <div className="p-3">
                  <div className="font-semibold text-sm">Analysing...</div>
               </div>
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm">
               <div className="h-48 bg-blue-50 w-full object-cover"></div>
               <div className="p-3">
                  <div className="font-semibold text-sm">Low-rise Jeans</div>
                  <div className="text-xs text-muted mt-1">Denim</div>
               </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm">
               <div className="h-48 bg-gray-100 w-full object-cover"></div>
               <div className="p-3">
                  <div className="font-semibold text-sm">Black Blazer</div>
                  <div className="text-xs text-muted mt-1">Formal</div>
               </div>
            </div>
          </div>
        </div>

        {/* AI Parsing Sidebar */}
        <div className="bento-card md:col-span-4 h-fit">
          <h3 className="font-serif text-2xl font-semibold mb-4">AI Parsing</h3>
          <p className="text-muted mb-4">We automatically detect:</p>
          <ul className="flex flex-col gap-3">
            <li className="bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">🏷️ Category</li>
            <li className="bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">🎨 Color Palette</li>
            <li className="bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">❄️ Warmth Level</li>
            <li className="bg-gray-50 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">✨ Style Vibe</li>
          </ul>
        </div>

      </div>
    </div>
  );
}