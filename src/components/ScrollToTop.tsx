"use client";
import { useEffect, useRef } from "react";
import { scrollToSection } from "../utils";
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
      const scrollTopPercentWithThreshold = `${
        (scrollTop / windowHeight) * 110
      }%`;

      ref.current.style.backgroundImage = `linear-gradient(
        var(main-color) 0% ${scrollTopPercentWithThreshold},
        var(--white) ${scrollTopPercentWithThreshold} 100%
      )`;
    };

    window.addEventListener("scroll", paintScrollButton);

    return () => window.removeEventListener("scroll", paintScrollButton);
  }, []);

  return (
    <a
      href="#top"
      className={styles.backToTop}
      title="Прокрутить наверх"
      ref={ref}
      onClick={(event) => {
        event.preventDefault();
        scrollToSection("top");
      }}
    >
      <span className={styles.backToTopInner}>Прокрутить наверх</span>
    </a>
  );
};
