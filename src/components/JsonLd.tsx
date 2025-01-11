export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HealtyStack',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    url: 'https://healtystack.com',
    publisher: {
      '@type': 'Organization',
      name: 'HealtyStack',
      logo: {
        '@type': 'ImageObject',
        url: 'https://healtystack.com/logo.svg',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
