import { SITE } from './site';

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": SITE.name,
    "telephone": "+919535040554",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 45, 3rd Cross, HSR Layout, Sector 2",
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
    "areaServed": "Bangalore and India",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
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
