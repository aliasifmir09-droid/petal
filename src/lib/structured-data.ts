import { products } from "@/lib/catalog";
import { reviewAggregate, reviews } from "@/lib/ops";
import { boroughs, christmasFaqs, faqs, site } from "@/lib/site";

/** Google LocalBusiness / Florist — required name + address; recommended NAP, hours, geo, map. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness", "Organization"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.png`,
      width: 1200,
      height: 400,
    },
    image: [site.ogImage, `${site.url}/logo.png`, `${site.url}/icon.png`],
    description: site.description,
    email: site.email,
    telephone: site.phone,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: site.paymentMethods.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.googleBusinessUrl,
    areaServed: [
      { "@type": "City", name: "New York" },
      ...boroughs.map((b) => ({
        "@type": "AdministrativeArea",
        name: `${b.name}, New York`,
      })),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: "US-NY",
        availableLanguage: ["English"],
      },
    ],
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
    knowsAbout: [
      "same-day flower delivery NYC",
      "Christmas flower delivery New York",
      "Jackson Heights florist",
      "luxury bouquets Manhattan Brooklyn Queens Bronx Staten Island",
    ],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/order`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
    },
    ...(site.sameAs.length > 0 ? { sameAs: [...site.sameAs] } : {}),
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
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/arrangements?q={search_term_string}`,
      },
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
    category: "Flowers",
    offers: {
      "@type": "Offer",
      url: `${site.url}/shop/${product.slug}`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      priceValidUntil: "2026-12-31",
      availability: product.sameDay
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      availabilityStarts: "2026-12-10",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${site.url}/#organization` },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: String(site.deliveryFeeFrom),
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
          addressRegion: ["NY"],
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
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
        text: `Enter the NYC ZIP, preferred date, and note. Same-day cutoff is ${site.orderCutoff}; Christmas Eve cutoff is ${site.christmasEveCutoff}. Taking orders from ${site.ordersStartDate}.`,
        url: `${site.url}/order`,
      },
      {
        "@type": "HowToStep",
        name: "Checkout or call",
        text: `Add to cart online or call ${site.phoneDisplay} to place the order with Petalswift in Jackson Heights.`,
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
    areaServed: [
      { "@type": "City", name: "New York" },
      ...boroughs.map((b) => ({
        "@type": "AdministrativeArea",
        name: `${b.name}, New York`,
      })),
    ],
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
      availability: "https://schema.org/PreOrder",
      availabilityStarts: "2026-12-10",
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

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [post.heroImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    inLanguage: "en-US",
  };
}

export function qaPageSchema(
  items: readonly { question: string; answer: string }[],
) {
  return faqSchemaFrom(items);
}
