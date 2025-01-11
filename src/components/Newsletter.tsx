'use client'

import { useState } from 'react'

interface NewsletterProps {
  variant?: 'default' | 'sidebar'
}

export default function Newsletter({ variant = 'default' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN}`
        },
        body: JSON.stringify({
          email: email,
          groups: [], // Optional: Add group IDs if needed
          status: 'active'
        })
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const isSidebar = variant === 'sidebar'

  return (
    <div id="newsletter" className={`bg-white rounded-2xl ${isSidebar ? 'p-6' : 'p-8'} shadow-sm`}>
      <div className={`${isSidebar ? 'text-left' : 'text-center max-w-2xl mx-auto'}`}>
        <h2 className={`${isSidebar ? 'text-2xl' : 'text-3xl'} font-bold text-recipe-dark mb-4`}>
          Get Free Healthy Recipes Weekly!
        </h2>
        <p className={`text-recipe-primary ${isSidebar ? 'mb-6 text-sm' : 'mb-8'}`}>
          Join our cooking community and receive exclusive, family-friendly recipes straight to your inbox. Plus, get our FREE e-cookbook with 10 quick & healthy meals!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`flex flex-col gap-3 ${isSidebar ? '' : 'sm:flex-row sm:max-w-md sm:mx-auto'}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-recipe-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`${
                isSidebar ? 'w-full' : 'w-full sm:w-auto'
              } px-6 py-3 text-white font-medium bg-recipe-primary hover:bg-recipe-dark transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-recipe-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {status !== 'idle' && (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <p className={`${isSidebar ? 'text-xs' : 'text-sm'} text-recipe-primary mt-2`}>
            100% free. No spam, just delicious recipes. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  )
}
