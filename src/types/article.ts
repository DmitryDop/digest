export const TOPICS = [
  "AI",
  "UX",
  "UI",
  "Product Design",
  "Design Systems",
  "Research",
  "Tools",
] as const;

export type Topic = (typeof TOPICS)[number];

export type Article = {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  readingTime: number;
  topics: Topic[];
  cover: string;
  coverAlt: string;
  language: "ru" | "en";
};
