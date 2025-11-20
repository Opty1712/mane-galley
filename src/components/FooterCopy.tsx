"use client";
import styles from "../styles.module.css";
import { copyToClipboard } from "../utils";

export const FooterCopy = () => (
  <div
    className={styles.commonSectionBlock}
    onClick={() => copyToClipboard("https://manedigital.ru")}
    style={{
      cursor: "pointer",
      width: "min-content",
      marginTop: "2vh",
    }}
    title="Скопировать адрес сайта в буфер обмена"
  >
    <span className={styles.contactSections}>[Скопировать]</span>
    <span>www.manedigital.ru</span>
  </div>
);
