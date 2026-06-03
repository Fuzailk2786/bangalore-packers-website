export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Apex Packers and Movers Bangalore",
    "image": "https://www.yourdomain.com/og-image.jpg",
    "@id": "https://www.yourdomain.com/#movingcompany",
    "url": "https://www.yourdomain.com",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 45, 3rd Cross, HSR Layout Sector 2",
      "addressLocality": "Bangalore",
      "postalCode": "560102",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9102,
      "longitude": 77.6450
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/apexpackersbangalore",
      "https://www.twitter.com/apexpackers"
    ]
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}