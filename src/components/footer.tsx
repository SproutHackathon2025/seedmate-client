'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SeedMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
