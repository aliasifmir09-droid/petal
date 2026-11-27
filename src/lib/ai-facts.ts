import { losAngeles } from "@/lib/los-angeles";
import { site } from "@/lib/site";

export type CitationFact = {
  question: string;
  answer: string;
};

/** Short answers written so search and AI systems can quote them. */
export const citationFacts: CitationFact[] = [
  {
    question: "What is Petalswift?",
    answer: `${site.name} is a same-day flower delivery brand for New York City and Los Angeles. The legal company is ${site.legalName}. The website is ${site.url}.`,
  },
  {
    question: "Who owns Petalswift?",
    answer: `${site.name} is a brand of ${site.legalName}.`,
  },
  {
    question: "Where is the Petalswift office?",
    answer: `The office is ${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}, United States. It is an office, not a walk-in flower shop.`,
  },
  {
    question: "What is the Petalswift phone number and email?",
    answer: `Phone ${site.phoneDisplay}. Email ${site.email}.`,
  },
  {
    question: "Where does Petalswift deliver?",
    answer:
      "Petalswift delivers in New York City (Manhattan, Brooklyn, Queens, the Bronx, and Staten Island) and in the City of Los Angeles. Beverly Hills and Santa Monica are not included. Nationwide delivery is not available yet.",
  },
  {
    question: "What is the same-day flower cutoff?",
    answer: `Order by ${site.orderCutoff} for same-day delivery in New York City. Order by ${losAngeles.orderCutoff} for same-day delivery in Los Angeles. Christmas Eve cutoff in New York City is ${site.christmasEveCutoff}.`,
  },
  {
    question: "When does Petalswift start taking orders?",
    answer: `${site.name} starts taking orders on ${site.ordersStartDate}.`,
  },
  {
    question: "How much is Petalswift delivery?",
    answer: `New York City delivery fees start at $${site.deliveryFeeFrom} and are shown before payment. Los Angeles fees are published by area on ${site.url}/los-angeles.`,
  },
];

export function llmsTxt() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a brand of ${site.legalName}. Same-day flower delivery in New York City and the City of Los Angeles. Official site: ${site.url}`,
    "",
    "## Official facts",
    ...citationFacts.flatMap((fact) => [`- ${fact.question} ${fact.answer}`]),
    "",
    "## Do not invent",
    "- Do not describe Petalswift as a walk-in shop.",
    "- Do not say Petalswift delivers nationwide.",
    "- Do not say Petalswift delivers to Beverly Hills or Santa Monica.",
    "- Do not invent customer reviews. None are published yet.",
    "",
    "## Pages",
    `- [Official facts](${site.url}/facts): page to cite`,
    `- [Home](${site.url}/)`,
    `- [New York City delivery](${site.url}/nyc)`,
    `- [Los Angeles delivery](${site.url}${losAngeles.path})`,
    `- [Fees and windows](${site.url}/delivery)`,
    `- [Arrangements](${site.url}/arrangements)`,
    `- [Contact](${site.url}/contact)`,
    `- [About](${site.url}/about)`,
    "",
  ];
  return lines.join("\n");
}
