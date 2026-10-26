"use client";

import styles from "./error.module.css";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.kicker}>Ошибка загрузки</p>
        <h1 className={styles.title}>Не удалось открыть материалы</h1>
        <p className={styles.text}>
          Похоже, данные временно недоступны. Попробуйте обновить страницу —
          подборка должна вернуться.
        </p>
        <button type="button" className={styles.action} onClick={reset}>
          Попробовать снова
        </button>
      </div>
    </main>
  );
}
