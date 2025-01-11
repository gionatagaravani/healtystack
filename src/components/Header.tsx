import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Recipes', href: '/blog' },
  // { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-recipe-light">
      <nav className="container mx-auto px-4 max-w-6xl h-20">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center h-full py-2">
            <div className="relative h-full aspect-[4/1]">
              <Image
                src="/logo.png"
                alt="Homemade Happiness Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-display text-recipe-dark hover:text-recipe-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="px-4 py-2 bg-recipe-primary text-white rounded-lg hover:bg-recipe-secondary transition-colors duration-200 font-display"
            >
              Get Weekly Recipes
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-recipe-dark hover:text-recipe-primary">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
