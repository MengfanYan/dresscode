import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | DressCode",
  description: "Help us improve your recommendations.",
};

export default function FeedbackPage() {
  return (
    <div className="max-w-250 mx-auto px-5 pb-20 pt-10">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-semibold mb-4">Help Us Learn</h1>
        <p className="text-muted text-lg">Rate your recent recommendations to improve your future outfits.</p>
      </div>

      <div className="space-y-12">
        
        {/* Section: Outfit Recommendations */}
        <section>
            <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                <span>👗</span> Recent Outfits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feedback Card 1 */}
                <div className="bento-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="text-xs font-bold text-muted uppercase tracking-wider">Yesterday • Commute</div>
                            <h3 className="font-semibold text-lg mt-1">Y2K Casual Mix</h3>
                        </div>
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs text-muted">Worn</div>
                    </div>
                    
                    {/* Outfit Mini Visual */}
                    <div className="flex gap-2 mb-6 h-24">
                        <div className="flex-1 bg-pink-50 rounded-lg border border-black/5"></div>
                        <div className="flex-1 bg-blue-50 rounded-lg border border-black/5"></div>
                        <div className="flex-1 bg-gray-100 rounded-lg border border-black/5"></div>
                    </div>

                    <div className="mt-auto">
                        <label className="text-sm font-medium mb-3 block">How was this recommendation?</label>
                        <div className="flex gap-2 mb-4">
                             {/* Rating Buttons */}
                             <button className="flex-1 py-2 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors">👎 Dislike</button>
                             <button className="flex-1 py-2 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 hover:text-green-600 transition-colors">👍 Like</button>
                        </div>
                        
                        {/* Refine Tags */}
                        <div className="space-y-2">
                             <p className="text-xs text-muted font-medium uppercase">What didn&apos;t work?</p>
                             <div className="flex flex-wrap gap-2">
                                <button className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs hover:bg-gray-100">Too Cold</button>
                                <button className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs hover:bg-gray-100">Colors Clash</button>
                                <button className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs hover:bg-gray-100">Too Formal</button>
                             </div>
                        </div>
                    </div>
                </div>
                 {/* Feedback Card 2 */}
                 <div className="bento-card opacity-60">
                     <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="text-xs font-bold text-muted uppercase tracking-wider">Monday • Work</div>
                            <h3 className="font-semibold text-lg mt-1">Smart Casual Blazer</h3>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Rated 👍</div>
                    </div>
                     <div className="flex gap-2 mb-6 h-24">
                        <div className="flex-1 bg-gray-200 rounded-lg border border-black/5"></div>
                        <div className="flex-1 bg-black/5 rounded-lg border border-black/5"></div>
                    </div>
                    <div className="mt-auto text-center text-muted text-sm py-4">
                        Thanks for your feedback!
                    </div>
                 </div>
            </div>
        </section>

        {/* Section: Shopping Suggestions */}
        <section>
            <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                <span>🛍️</span> Shopping Suggestions
            </h2>
             <div className="bento-card">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-32 h-32 bg-blue-100 rounded-xl shrink-0"></div>
                    <div className="grow">
                        <div className="flex justify-between items-start">
                             <h3 className="font-semibold text-xl mb-1">Cropped Denim Jacket</h3>
                             <span className="text-xs bg-gray-100 px-2 py-1 rounded text-muted">Shown Today</span>
                        </div>
                        <p className="text-muted text-sm mb-4">Suggested to complete your &quot;Y2K Commute&quot; look.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span className="text-sm font-medium whitespace-nowrap">Is this relevant?</span>
                            <div className="flex gap-2 flex-wrap">
                                <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:border-foreground transition-colors">Yes, saving it</button>
                                <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:border-foreground transition-colors">Already own similar</button>
                                <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:border-foreground transition-colors">Not my budget</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}