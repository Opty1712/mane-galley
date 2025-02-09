"use client";

import { clsx } from "clsx";
import { FC, useEffect, useState } from "react";
import { Section } from "../types";
import { scrollToSection, useScrollDirection } from "../utils";
import styles from "./BottomNav.module.css";

export const BottomNav: FC<{ sections: Array<Section> }> = ({ sections }) => {
  const { isScrollDown } = useScrollDirection();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={clsx(styles.bottomNav, !isScrollDown && styles.hidden)}>
      {sections.map(({ id, title }) => (
        <button
          key={id}
          className={`${styles.navItem} ${
            activeSection === id ? styles.active : ""
          }`}
          onClick={() => scrollToSection(id)}
        >
          {title}
        </button>
      ))}
    </nav>
  );
};
