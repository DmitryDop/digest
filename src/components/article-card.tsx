import type { CSSProperties } from "react";
import type { Article } from "@/types/article";
import { formatShortDate } from "@/lib/format-date";
import { ArticleCover } from "./article-cover";
import styles from "./article-card.module.css";

type ArticleCardProps = {
  article: Article;
  index: number;
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <article
      className={styles.card}
      style={{ "--index": index } as CSSProperties}
    >
      <a
        className={styles.overlay}
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${article.title} — открыть статью в новой вкладке`}
      />

      <div className={styles.inner}>
        <ArticleCover
          src={article.cover}
          alt={article.coverAlt}
          source={article.source}
          priority={index < 3}
        />

        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.source}>{article.source}</span>
            <span className={styles.dot} aria-hidden="true" />
            <time dateTime={article.publishedAt}>
              {formatShortDate(article.publishedAt)}
            </time>
            <span className={styles.dot} aria-hidden="true" />
            <span>{article.readingTime} мин</span>
          </div>

          <h3 className={styles.title}>{article.title}</h3>

          <p className={styles.summary}>{article.summary}</p>

          <ul className={styles.tags} aria-label="Темы материала">
            {article.topics.map((topic) => (
              <li key={topic} className={styles.tag}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
