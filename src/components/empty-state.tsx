import { pluralizeMaterials } from "@/lib/format-date";
import styles from "./empty-state.module.css";

type EmptyStateProps = {
  total: number;
  onReset: () => void;
};

export function EmptyState({ total, onReset }: EmptyStateProps) {
  return (
    <div className={styles.empty}>
      <p className={styles.kicker}>0 результатов</p>
      <h3 className={styles.title}>Ничего не нашлось</h3>
      <p className={styles.text}>
        Попробуйте изменить запрос или снять часть фильтров. В дайджесте{" "}
        {pluralizeMaterials(total)} — можно вернуться ко всей подборке.
      </p>
      <button type="button" className={styles.action} onClick={onReset}>
        Сбросить поиск и фильтры
      </button>
    </div>
  );
}
