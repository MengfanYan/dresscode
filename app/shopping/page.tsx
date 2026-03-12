import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping | DressCode",
  description: "Smart shopping suggestions to complete your look.",
};

export default function ShoppingPage() {
  return (
    <div className="max-w-300 mx-auto px-5 pb-20 pt-10">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-semibold mb-4">Completing Your Look</h2>
        <p className="text-lg text-muted">We found items that match at least 5 pieces you already own.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        
        {/* Shop Item 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-card flex flex-col md:flex-row gap-8 items-start md:items-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full md:w-32 h-32 bg-blue-100 rounded-xl shrink-0"></div>
            <div className="grow">
                <div className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">✨ Completes &quot;Y2K Commute&quot;</div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Cropped Denim Jacket</h3>
                <p className="text-muted mb-4">Adds warmth without hiding the waistline of your baby tee. Matches your white sneakers perfectly.</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="font-bold text-xl">$45.00</div>
                    <button className="bg-foreground text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                        Buy on ASOS
                    </button>
                </div>
            </div>
        </div>

        {/* Shop Item 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-card flex flex-col md:flex-row gap-8 items-start md:items-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-full md:w-32 h-32 bg-pink-50 rounded-xl shrink-0"></div>
            <div className="grow">
                <div className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">♻️ High Utility Score</div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Silver Shoulder Bag</h3>
                <p className="text-muted mb-4">You don&apos;t have a metallic accessory yet. This matches 12 other outfits in your closet.</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="font-bold text-xl">$28.00</div>
                    <button className="bg-foreground text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                        View on Amazon
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
