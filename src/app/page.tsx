import { DigestExperience } from "@/components/digest-experience";
import { getAllArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getAllArticles();

  return <DigestExperience articles={articles} />;
}
