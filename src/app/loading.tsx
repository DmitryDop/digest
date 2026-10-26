import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.page} aria-busy="true">
      <span className="srOnly">Загрузка материалов</span>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.brand} />
          <span className={styles.nav} />
        </div>
        <div className={styles.hero}>
          <span className={styles.kicker} />
          <span className={styles.title} />
          <span className={styles.titleShort} />
          <span className={styles.lead} />
        </div>
        <div className={styles.toolbar}>
          <span className={styles.search} />
          <span className={styles.chips} />
        </div>
        <div className={styles.grid}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cover} />
              <span className={styles.meta} />
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.lineShort} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
