import { products } from "@/lib/catalog";
import { reviewAggregate, reviews } from "@/lib/ops";
import { boroughs, christmasFaqs, faqs, site } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness", "Organization"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: site.ogImage,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...site.geo,
    },
    areaServed: boroughs.map((b) => ({
      "@type": "AdministrativeArea",
      name: `${b.name}, New York`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: site.sameAs,
    ...(reviewAggregate.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewAggregate.ratingValue,
            reviewCount: reviewAggregate.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

export function reviewsSchema() {
  if (reviews.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.body,
      name: review.title,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.shortDescription,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/shop?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function productSchema(slug: string) {
  const product = products.find((b) => b.slug === slug);
  if (!product) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.blurb,
    image: [product.image],
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    offers: {
      "@type": "Offer",
      url: `${site.url}/shop/${product.slug}`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: product.sameDay
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function itemListSchema(slugs?: string[]) {
  const list = slugs
    ? products.filter((p) => slugs.includes(p.slug))
    : products;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: list.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/shop/${product.slug}`,
      name: product.name,
    })),
  };
}

export function faqSchemaFrom(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function christmasFaqSchema() {
  return faqSchemaFrom([...faqs.slice(0, 4), ...christmasFaqs]);
}

export function howToOrderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to order Christmas flowers from Petalswift in NYC",
    description:
      "Start a same-day or scheduled Christmas flower delivery across New York City.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "72",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Choose an arrangement",
        text: "Browse https://www.petalswift.com/christmas or /arrangements and pick a holiday bouquet, hatbox, or centerpiece.",
        url: `${site.url}/christmas`,
      },
      {
        "@type": "HowToStep",
        name: "Confirm delivery details",
        text: `Enter the NYC ZIP, preferred date, and note. Same-day cutoff is ${site.orderCutoff}; Christmas Eve cutoff is ${site.christmasEveCutoff}.`,
        url: `${site.url}/order`,
      },
      {
        "@type": "HowToStep",
        name: "Checkout or call",
        text: `Add to cart online or call ${site.phoneDisplay} / email ${site.email} to place the order with Petalswift in Jackson Heights.`,
        url: `${site.url}/order`,
      },
    ],
  };
}

export function flowerDeliveryServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NYC Same-Day Flower & Christmas Delivery",
    serviceType: "Flower delivery",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: boroughs.map((b) => ({
      "@type": "AdministrativeArea",
      name: `${b.name}, New York`,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${site.url}/order`,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["English"],
      },
    },
    offers: {
      "@type": "Offer",
      url: `${site.url}/christmas`,
      priceCurrency: "USD",
      price: "72.00",
      availability: "https://schema.org/InStock",
      description: site.holidayNote,
    },
  };
}

export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Petalswift Christmas Flowers NYC",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: `${site.url}/christmas`,
  };
}
