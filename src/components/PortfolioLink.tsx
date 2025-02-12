"use client";
import styles from "../styles.module.css";
import { scrollToSection } from "../utils";

export const PortfolioLink = () => (
  <a className={styles.scrollDown} onClick={() => scrollToSection("projects")}>
    Смотреть портфолио ↓
  </a>
);
