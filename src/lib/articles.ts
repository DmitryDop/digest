import { articles } from "@/data/articles";
import type { Article } from "@/types/article";

/**
 * Единая точка чтения материалов.
 * При подключении CMS или RSS меняется только эта функция:
 * компоненты получают уже нормализованный и отсортированный массив.
 */
export async function getAllArticles(): Promise<Article[]> {
  return [...articles].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}
