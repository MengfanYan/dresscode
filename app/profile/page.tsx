import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Profile | DressCode",
  description: "Customize your style preferences.",
};

export default function ProfilePage() {
  return (
    <div className="max-w-200 mx-auto px-5 pb-20 pt-10">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-semibold mb-4">Your Style Profile</h1>
        <p className="text-lg text-muted">Help us understand what you like to wear.</p>
      </div>

      <div className="space-y-8">
        
        {/* Style Vibes */}
        <div className="bento-card">
          <h2 className="font-serif text-2xl font-semibold mb-4">Style Vibes</h2>
          <p className="text-muted mb-4">Select the styles that resonate with you most.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Minimalist', 'Streetwear', 'Y2K', 'Vintage', 'Preppy', 'Boho', 'Athleisure', 'Grunge'].map((style) => (
              <label key={style} className="cursor-pointer group">
                <input type="checkbox" className="peer sr-only" />
                <div className="px-4 py-3 rounded-xl border-2 border-transparent bg-gray-50 text-center font-medium transition-all peer-checked:border-foreground peer-checked:bg-white peer-checked:shadow-sm group-hover:bg-gray-100">
                  {style}
                </div>
              </label>
            ))}
            <input 
              type="text" 
              placeholder="Type a style..." 
              className="px-3 py-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-foreground text-sm col-span-2 md:col-span-3"
            />
          </div>
        </div>

        {/* Color Preferences */}
        <div className="bento-card">
          <h2 className="font-serif text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-muted uppercase tracking-wide">Colors I Avoid</label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium flex items-center gap-2 border border-red-100 cursor-pointer hover:bg-red-100">
                  Neon Green <span className="text-red-400">×</span>
                </span>
                <input 
                  type="text" 
                  placeholder="Type a color..." 
                  className="px-3 py-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-foreground text-sm min-w-30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Usage Context */}
        <div className="bento-card">
          <h2 className="font-serif text-2xl font-semibold mb-4">Typical Week</h2>
          <p className="text-muted mb-4">What do you usually dress for?</p>
          <div className="space-y-3">
            {['Work (Formal)', 'Work (Casual)', 'Gym / Workout', 'Night Out', 'Lounging'].map((ctx) => (
              <label key={ctx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 accent-foreground cursor-pointer" />
                <span className="font-medium">{ctx}</span>
              </label>
            ))}
            <input 
              type="text" 
              placeholder="Type an occasion..." 
              className="px-3 py-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-foreground text-sm col-span-2 md:col-span-3"
            />
          </div>
        </div>

        <button className="w-full bg-foreground text-bold py-4 rounded-full text-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg">
          Save Preferences
        </button>

      </div>
    </div>
  );
}