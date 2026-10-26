"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic } from "@/types/article";
import styles from "./site-header.module.css";

type NavItem = {
  label: string;
  topics: Topic[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Все материалы", topics: [] },
  { label: "AI", topics: ["AI"] },
  { label: "UX/UI", topics: ["UX", "UI"] },
  { label: "Дизайн-системы", topics: ["Design Systems"] },
  { label: "Инструменты", topics: ["Tools"] },
];

type SiteHeaderProps = {
  activeTopics: Topic[];
  onSelectTopics: (topics: Topic[]) => void;
};

function isSameSelection(active: Topic[], target: Topic[]) {
  return (
    active.length === target.length && target.every((topic) => active.includes(topic))
  );
}

export function SiteHeader({ activeTopics, onSelectTopics }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (topics: Topic[]) => {
    onSelectTopics(topics);
    setIsOpen(false);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.requestAnimationFrame(() => {
      document.getElementById("catalog")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          Продуктовый дайджест
        </a>

        <nav className={styles.desktopNav} aria-label="Разделы дайджеста">
          {NAV_ITEMS.map((item) => {
            const isActive = isSameSelection(activeTopics, item.topics);
            return (
              <button
                key={item.label}
                type="button"
                className={styles.navLink}
                data-active={isActive}
                aria-pressed={isActive}
                onClick={() => handleSelect(item.topics)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Закрыть" : "Меню"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobilePanel} id="mobile-navigation">
          <nav className={`container ${styles.mobileNav}`} aria-label="Разделы дайджеста">
            {NAV_ITEMS.map((item) => {
              const isActive = isSameSelection(activeTopics, item.topics);
              return (
                <button
                  key={item.label}
                  type="button"
                  className={styles.mobileNavLink}
                  data-active={isActive}
                  aria-pressed={isActive}
                  onClick={() => handleSelect(item.topics)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
