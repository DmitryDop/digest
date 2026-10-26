import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.about}>
          <p className={styles.brand}>Продуктовый дайджест</p>
          <p className={styles.purpose}>
            Отбираем материалы об AI, интерфейсах и инструментах, которые
            помогают принимать продуктовые решения.
          </p>
        </div>

        <p className={styles.rights}>
          Права на тексты и изображения принадлежат оригинальным авторам
          и изданиям. Дайджест не претендует на их исключительные права.
        </p>

        <p className={styles.year}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
