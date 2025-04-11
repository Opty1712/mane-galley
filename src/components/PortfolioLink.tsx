"use client";
import styles from "../styles.module.css";
import { scrollToSection } from "../utils";

export const PortfolioLink = ({
  text = "Смотреть портфолио",
  section = "projects",
}) => (
  <a className={styles.scrollDown} onClick={() => scrollToSection(section)}>
    {text} ↓
  </a>
);
