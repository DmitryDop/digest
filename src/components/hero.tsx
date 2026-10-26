import { formatNumericDate } from "@/lib/format-date";
import styles from "./hero.module.css";

type HeroProps = {
  articleCount: number;
  sourceCount: number;
  latestDate: string;
};

export function Hero({ articleCount, sourceCount, latestDate }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className="container">
        <p className={styles.kicker}>AI · UX/UI · дизайн-системы · инструменты</p>

        <div className={styles.grid}>
          <h1 className={styles.title} id="page-title">
            <span>Продуктовый</span>
            <span>дайджест</span>
          </h1>

          <div className={styles.aside}>
            <p className={styles.lead}>
              Самое интересное об AI, UX/UI и продуктовом дизайне. Идеи,
              инструменты и исследования, которые стоит прочитать.
            </p>

            <dl className={styles.stats}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>материалов</dt>
                <dd className={styles.statValue}>{articleCount}</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>изданий</dt>
                <dd className={styles.statValue}>{sourceCount}</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>обновлено</dt>
                <dd className={styles.statDate}>{formatNumericDate(latestDate)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
