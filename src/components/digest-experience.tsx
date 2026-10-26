"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { Article, Topic } from "@/types/article";
import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { Toolbar } from "./toolbar";
import { ArticleCard } from "./article-card";
import { EmptyState } from "./empty-state";
import { SiteFooter } from "./site-footer";
import styles from "./digest-experience.module.css";

const INITIAL_COUNT = 12;
const PAGE_SIZE = 6;

type DigestExperienceProps = {
  articles: Article[];
};

function normalize(value: string) {
  return value.toLocaleLowerCase("ru-RU").replace(/ё/g, "е").trim();
}

export function DigestExperience({ articles }: DigestExperienceProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = normalize(deferredQuery);

    return articles.filter((article) => {
      const matchesTopic =
        selectedTopics.length === 0 ||
        selectedTopics.some((topic) => article.topics.includes(topic));

      if (!matchesTopic) return false;
      if (!normalizedQuery) return true;

      const haystack = normalize(
        [
          article.title,
          article.summary,
          article.source,
          ...article.topics,
        ].join(" "),
      );

      return haystack.includes(normalizedQuery);
    });
  }, [articles, deferredQuery, selectedTopics]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasFilters = selectedTopics.length > 0 || query.trim().length > 0;
  const remaining = filteredArticles.length - visibleArticles.length;
  const sourcesCount = useMemo(
    () => new Set(articles.map((article) => article.source)).size,
    [articles],
  );

  const resetPaging = () => setVisibleCount(INITIAL_COUNT);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    resetPaging();
  };

  const handleToggleTopic = (topic: Topic) => {
    setSelectedTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    );
    resetPaging();
  };

  const handleClearTopics = () => {
    setSelectedTopics([]);
    resetPaging();
  };

  const handleReset = () => {
    setQuery("");
    setSelectedTopics([]);
    resetPaging();
  };

  return (
    <div id="top" className={styles.page}>
      <a href="#catalog" className="skipLink">
        Перейти к материалам
      </a>

      <SiteHeader
        activeTopics={selectedTopics}
        onSelectTopics={(topics) => {
          setSelectedTopics(topics);
          setQuery("");
          resetPaging();
        }}
      />

      <main>
        <Hero
          articleCount={articles.length}
          sourceCount={sourcesCount}
          latestDate={articles[0]?.publishedAt ?? new Date().toISOString()}
        />

        <section
          id="catalog"
          className={styles.catalog}
          aria-labelledby="catalog-title"
        >
          <div className="container">
            <div className={styles.head}>
              <h2 className={styles.heading} id="catalog-title">
                Материалы
              </h2>
              <p className={styles.headNote}>
                Ручной отбор, без алгоритмической ленты
              </p>
            </div>

            <Toolbar
              query={query}
              onQueryChange={handleQueryChange}
              selectedTopics={selectedTopics}
              onToggleTopic={handleToggleTopic}
              onClearTopics={handleClearTopics}
              onReset={handleReset}
              hasFilters={hasFilters}
              visibleCount={visibleArticles.length}
              filteredCount={filteredArticles.length}
            />

            {filteredArticles.length === 0 ? (
              <EmptyState total={articles.length} onReset={handleReset} />
            ) : (
              <>
                <div
                  className={styles.grid}
                  key={selectedTopics.join("|") || "all"}
                >
                  {visibleArticles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      index={index}
                    />
                  ))}
                </div>

                <div className={styles.more}>
                  {remaining > 0 ? (
                    <button
                      type="button"
                      className={styles.moreButton}
                      onClick={() =>
                        setVisibleCount((count) => count + PAGE_SIZE)
                      }
                    >
                      Показать ещё
                      <span className={styles.moreCount}>
                        {Math.min(PAGE_SIZE, remaining)}
                      </span>
                    </button>
                  ) : (
                    <p className={styles.end}>
                      {hasFilters
                        ? "Это все материалы по вашему запросу."
                        : "Это все материалы подборки."}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
