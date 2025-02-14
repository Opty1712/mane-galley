import { clsx } from "clsx";
import styles from "../styles.module.css";
import { FooterCopy } from "./FooterCopy";
import { Typograph } from "./Typograph";

export const Footer = () => (
  <>
    <div className={styles.pageGrid}>
      <div className={styles.grid5} />
      <div className={clsx(styles.grid19, styles.footerLine)} />
    </div>

    <div
      className={clsx(styles.pageGrid, styles.footerText, styles.commonSection)}
    >
      <div className={styles.grid5} />
      <div className={clsx(styles.grid6)}>
        ©2025 Манаткина Наталья
        <FooterCopy />
      </div>
      <div className={clsx(styles.grid13)}>
        <Typograph>
          Контент предназначен исключительно для личного использования и
          некоммерческих целей
        </Typograph>
        <div
          className={styles.commonSectionBlock}
          style={{
            marginTop: "2vh",
          }}
        >
          <span className={styles.contactSections}>[Разработка]</span>
          <span>Андрей Едунов</span>
        </div>
      </div>
    </div>
  </>
);
