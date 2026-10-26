"use client";

import { useId } from "react";
import { TOPICS, type Topic } from "@/types/article";
import { pluralizeMaterials } from "@/lib/format-date";
import { CloseIcon, SearchIcon } from "./icons";
import styles from "./toolbar.module.css";

type ToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  selectedTopics: Topic[];
  onToggleTopic: (topic: Topic) => void;
  onClearTopics: () => void;
  onReset: () => void;
  hasFilters: boolean;
  visibleCount: number;
  filteredCount: number;
};

export function Toolbar({
  query,
  onQueryChange,
  selectedTopics,
  onToggleTopic,
  onClearTopics,
  onReset,
  hasFilters,
  visibleCount,
  filteredCount,
}: ToolbarProps) {
  const searchId = useId();

  return (
    <div className={styles.toolbar}>
      <div className={styles.searchRow}>
        <div className={styles.search}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <label className="srOnly" htmlFor={searchId}>
            Поиск по заголовкам, описаниям, темам и источникам
          </label>
          <input
            id={searchId}
            className={styles.input}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Поиск по материалам"
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              type="button"
              className={styles.clearSearch}
              aria-label="Очистить поиск"
              onClick={() => onQueryChange("")}
            >
              <CloseIcon />
            </button>
          )}
        </div>

        <p className={styles.sort}>
          Сначала новые
          <span className={styles.sortHint}>по дате публикации</span>
        </p>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.chipsViewport}>
          <div className={styles.chips} role="group" aria-label="Фильтр по темам">
            <button
              type="button"
              className={styles.chip}
              aria-pressed={selectedTopics.length === 0}
              onClick={onClearTopics}
            >
              Все
            </button>
            {TOPICS.map((topic) => {
              const isActive = selectedTopics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  className={styles.chip}
                  aria-pressed={isActive}
                  onClick={() => onToggleTopic(topic)}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {hasFilters && (
          <button type="button" className={styles.reset} onClick={onReset}>
            Сбросить
          </button>
        )}
      </div>

      <p className={styles.count} aria-live="polite" aria-atomic="true">
        {filteredCount === 0
          ? "Ничего не найдено"
          : visibleCount < filteredCount
            ? `${visibleCount} из ${pluralizeMaterials(filteredCount)}`
            : pluralizeMaterials(filteredCount)}
      </p>
    </div>
  );
}
