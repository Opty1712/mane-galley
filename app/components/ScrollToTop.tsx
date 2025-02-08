import styles from "./ScrollToTop.module.css";
export const ScrollToTop = () => (
  <a href="#content" className={styles.backToTop} title="Прокрутить наверх">
    <span className={styles.backToTopInner}>Прокрутить наверх</span>
    <svg
      width="32"
      height="32"
      viewBox=" 0 0 24 24"
      aria-hidden="true"
      className={styles.backToTopSVG}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
);
