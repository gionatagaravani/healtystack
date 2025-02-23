import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src="/profile.png"
            alt="Christina Anderson"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 96px, 96px"
            priority
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Christina Anderson
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Food enthusiast and home cook passionate about creating healthy, delicious recipes that bring families together around the table.
        </p>
        <Link
          href="/about"
          className="text-sm text-recipe-primary hover:text-recipe-dark transition-colors"
        >
          Learn more about me →
        </Link>
      </div>
    </div>
  )
}
