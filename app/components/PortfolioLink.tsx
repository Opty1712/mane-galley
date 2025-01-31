"use client";
import clsx from "clsx";
import styles from "../page.module.css";
import { scrollToSection } from "../utils";

export const PortfolioLink = () => (
  <a
    className={clsx(styles.scrollDown, styles.grid7)}
    onClick={() => scrollToSection("projects")}
  >
    Смотреть портфолио ↓
  </a>
);
