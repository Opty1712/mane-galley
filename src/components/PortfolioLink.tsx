"use client";
import styles from "../app/page.module.css";
import { scrollToSection } from "../utils";

export const PortfolioLink = () => (
  <a className={styles.scrollDown} onClick={() => scrollToSection("projects")}>
    Смотреть портфолио ↓
  </a>
);
