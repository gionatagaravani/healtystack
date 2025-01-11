import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12 bg-[url('/images/hero-recipe.jpg')] bg-cover bg-center relative rounded-3xl overflow-hidden mx-4">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 space-y-8 py-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Homemade <span className="text-recipe-light">Happiness</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Discover delicious family recipes, cooking tips, and kitchen stories that bring joy to your table.
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Link 
              href="/blog" 
              className="px-8 py-3 bg-recipe-primary text-white font-medium rounded-lg hover:bg-recipe-dark transition-colors"
            >
              Browse Recipes
            </Link>
            <a 
              href="#newsletter" 
              className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Weekly Recipes
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What's Cooking?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From family favorites to seasonal specialties, find the perfect recipe for any occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Family Favorites',
              description: 'Time-tested recipes that have been passed down through generations, perfect for family gatherings.',
              icon: '👨‍👩‍👧‍👦',
              tag: 'family-favorites'
            },
            {
              title: 'Quick & Easy',
              description: 'Delicious meals ready in 30 minutes or less, perfect for busy weeknight dinners.',
              icon: '⏰',
              tag: 'quick-and-easy'
            },
            {
              title: 'Seasonal Specials',
              description: 'Fresh and flavorful recipes that celebrate the best ingredients each season has to offer.',
              icon: '🍂',
              tag: 'seasonal'
            }
          ].map((feature, index) => (
            <Link 
              key={index} 
              href={`/blog?category=${feature.tag}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Recipes Preview */}
      <section className="py-12 bg-transparent">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fresh from the Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest recipes, cooking tips, and kitchen adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {allPosts
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, 3)
            .map((recipe) => (
              <div key={recipe._id} className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-6">
                {recipe.image && (
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    <Link href={recipe.url}>{recipe.title}</Link>
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>⏱ 30 mins</span>
                    <span className="mx-2">•</span>
                    <span>👩‍🍳 By Christina</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center">
          <Link 
            href="/blog" 
            className="inline-block px-8 py-3 bg-recipe-primary text-white font-medium rounded-lg hover:bg-recipe-dark transition-colors"
          >
            View All Recipes
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}
