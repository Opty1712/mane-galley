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
    >
      <span className={styles.backToTopInner}>Прокрутить наверх</span>
      <svg
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.backToTopSVG}
      >
        <path
          d="M8.66803 23.9987V15.9975H4.32901C1.94267 15.9975 -0.00500366 15.9875 9.65657e-06 15.9775C0.0100363 15.9475 15.1954 0 15.2104 0C15.2254 0 30.4108 15.9475 30.4208 15.9775C30.4258 15.9875 28.4781 15.9975 26.0918 15.9975H21.7528V23.9987V32H15.2104H8.66803V23.9987Z"
          fill="#ffffff"
        />
      </svg>
    </a>
  );
};
