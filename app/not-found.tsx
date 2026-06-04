// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091c42] via-[#0b4d8c] to-[#0288d1] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Animated drop */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-float">
            <svg width="100" height="120" viewBox="0 0 24 30" fill="none">
              <path d="M12 0C12 0 2 12 2 19a10 10 0 0020 0C22 12 12 0 12 0z" fill="rgba(79,195,247,0.3)" stroke="rgba(79,195,247,0.8)" strokeWidth="0.5" />
              <text x="12" y="21" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="bold">404</text>
            </svg>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-7xl text-white mb-4">
          404
        </h1>
        <h2 className="font-display font-bold text-xl sm:text-2xl text-blue-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-blue-200/70 mb-8 leading-relaxed">
          Looks like this page has dried up! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-primary-700">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
