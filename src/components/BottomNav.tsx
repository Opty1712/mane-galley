"use client";

import { clsx } from "clsx";

import { FC, useEffect, useState } from "react";
import { Section } from "../app/types";
import { checkIsMobile, scrollToSection, useScrollDirection } from "../utils";
import styles from "./BottomNav.module.css";
import { ScrollToTop } from "./ScrollToTop";

export const BottomNav: FC<{ sections: Array<Section> }> = ({ sections }) => {
  const { isScrollDown, isBottom } = useScrollDirection();
  const [activeSection, setActiveSection] = useState("");

  const isMobile = checkIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.01 }
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
    <nav
      className={clsx(
        styles.bottomNav,
        !isScrollDown && isMobile && !isBottom && styles.hidden
      )}
    >
      <ScrollToTop />
      {sections.map(({ id, title }) => (
        <a
          href={`#${id}`}
          key={id}
          className={`${styles.navItem} ${
            activeSection === id ? styles.active : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(id);
            setActiveSection(id);
          }}
        >
          {title}
        </a>
      ))}
    </nav>
  );
};
