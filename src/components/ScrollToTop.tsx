"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollToTop.module.css";
export const ScrollToTop = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const isAnimationScrollSupported = CSS.supports(
      "animation-timeline",
      "scroll()"
    );

    if (isAnimationScrollSupported) {
      return;
    }

    const paintScrollButton = () => {
      if (!ref.current) {
        return;
      }

      const scrollTop = window.scrollY;
      const windowHeight = document.body.offsetHeight;
      const scrollTopRelation = scrollTop / windowHeight;
      const scrollTopPercentWithThreshold = `${scrollTopRelation * 110}%`;

      ref.current.style.opacity = String(scrollTopRelation * 10);

      ref.current.style.backgroundImage = `linear-gradient(
        var(--accent-color) 0% ${scrollTopPercentWithThreshold},
        var(--white) ${scrollTopPercentWithThreshold} 100%
      )`;
    };

    window.addEventListener("scroll", paintScrollButton);

    return () => window.removeEventListener("scroll", paintScrollButton);
  }, []);

  return (
    <a
      href="#content"
      className={styles.backToTop}
      title="Прокрутить наверх"
      ref={ref}
    >
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
};
