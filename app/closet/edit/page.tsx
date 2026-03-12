// import Image from "next/image";
import Link from "next/link";

export default function ClosetEditPage() {
  return (
    <div className="max-w-300 mx-auto px-5 pb-20 pt-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold mb-2">Review & Edit Item</h1>
        <p className="text-muted">Our AI analyzed your photo. Please confirm the details below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Image Preview */}
        <div className="md:col-span-5">
          <div className="aspect-3/4 relative bg-gray-100 rounded-2xl overflow-hidden border border-black/5 flex items-center justify-center">
             <span className="text-6xl grayscale opacity-50">👕</span>
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm text-center shadow-sm">
                Original Image
             </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <label htmlFor="item-name" className="text-sm font-semibold text-muted uppercase tracking-wider">Item Name</label>
            <input 
              id="item-name"
              type="text" 
              defaultValue="White Baby Tee"
              className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-foreground transition-colors text-lg font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-semibold text-muted uppercase tracking-wider">Category</label>
              <select id="category" className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer">
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="shoes">Shoes</option>
                <option value="outerwear">Outerwear</option>
                <option value="accessory">Accessory</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted uppercase tracking-wider">Color</label>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white">
                <div className="w-6 h-6 rounded-full bg-white border border-gray-300 shadow-sm"></div>
                <input 
                  type="text" 
                  defaultValue="White"
                  className="w-full outline-none text-foreground font-medium"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted uppercase tracking-wider">AI Tags</label>
            <div className="flex flex-wrap gap-2">
              {['Y2K', 'Casual', 'Cotton', 'Cropped'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2 group cursor-pointer hover:bg-gray-200 transition-colors">
                  {tag}
                  <button className="text-gray-400 group-hover:text-red-500 transition-colors">×</button>
                </span>
              ))}
              <button className="px-4 py-2 border border-dashed border-gray-300 rounded-full text-sm text-muted hover:border-foreground hover:text-foreground transition-colors">
                + Add Tag
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="warmth" className="text-sm font-semibold text-muted uppercase tracking-wider">Warmth Level (1-5)</label>
            <input id="warmth" type="range" min="1" max="5" defaultValue="2" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-foreground" />
            <div className="flex justify-between text-xs text-muted font-medium">
              <span>Very Light</span>
              <span>Heavy / Winter</span>
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <Link href="/closet" className="flex-1">
              <button className="w-full py-4 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </Link>
            <Link href="/closet" className="flex-1">
              <button className="w-full py-4 rounded-full bg-foreground text-bold font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Save to Closet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
