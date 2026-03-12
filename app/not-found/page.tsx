import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="bento-card max-w-md w-full text-center py-16">
            <h2 className="font-serif text-6xl font-semibold mb-4">404</h2>
            <p className="text-muted text-lg mb-8">This outfit seems to be missing from your closet.</p>
            <Link href="/">
                <button className="bg-foreground text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                    Return Home
                </button>
            </Link>
        </div>
    </div>
  )
}