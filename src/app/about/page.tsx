import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Me - Christina Anderson | Homemade Happiness',
  description: 'Meet Christina Anderson, a passionate home cook and mom sharing family recipes and kitchen wisdom with food lovers everywhere.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-recipe-primary">Me</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Home Cook, Recipe Creator, and Proud Mom
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Christina Anderson
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Hello! I'm a 44-year-old American mom who found her true passion in the heart of the kitchen. What started as cooking meals for my family has blossomed into a journey of sharing love through food with people around the world.
            </p>
            <p>
              Based in sunny California, I believe that the best recipes are the ones that bring families together. My kitchen is where memories are made, traditions are passed down, and new flavors are discovered. When I'm not experimenting with recipes, you'll find me at the local farmers' market searching for fresh, seasonal ingredients or teaching my kids the joy of cooking.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
          <Image
            src="/christina-kitchen.jpg"
            alt="Christina Anderson in her kitchen"
            fill
            className="object-cover hover:opacity-95 transition-opacity"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-white text-sm">
              Creating magic in my California kitchen
            </p>
          </div>
        </div>
      </div>

      {/* Expertise & Philosophy */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kitchen Expertise
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Family-Friendly Recipes</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Seasonal Cooking</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Meal Planning</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Baking Specialties</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Cooking Philosophy
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Fresh, Simple Ingredients</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Family-First Approach</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Sustainable Cooking</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-recipe-primary">▹</span>
              <span>Tradition Meets Innovation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="text-center bg-recipe-light p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Featured In
        </h3>
        <p className="text-gray-600 mb-8">
          My recipes and cooking tips have been featured in various food magazines and cooking shows
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          <div className="aspect-[3/1]">
            <Image
              src="/logos/food-network.png"
              alt="Food Network Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="aspect-[3/1]">
            <Image
              src="/logos/taste-of-home.png"
              alt="Taste of Home Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="aspect-[3/1]">
            <Image
              src="/logos/bon-appetit.png"
              alt="Bon Appetit Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="aspect-[3/1]">
            <Image
              src="/logos/cooking-light.png"
              alt="Cooking Light Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
