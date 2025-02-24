"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./ScrollingProject.module.css";

type ScrollingProjectProps = {
  src: string;
  alt: string;
};

export const ScrollingProject: FC<ScrollingProjectProps> = ({ alt, src }) => {
  const id = useRef(getId());
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!imgRef || !wrapperRef) {
      return;
    }

    const updateHeight = () => {
      setHeight(imgRef.height - wrapperRef.clientHeight);
    };

    updateHeight();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAnimating(entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );

    observer.observe(wrapperRef);

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, [imgRef, wrapperRef]);

  return (
    <div className={styles.scrolledWrapper}>
      <div className={styles.scrolledProject} ref={setWrapperRef}>
        <style>
          {`@keyframes ${id.current} {
            0%,
            5% {top: 0;}
            45%,
            55% {top: -${height}px;}
            95%,
            100% {top: 0;}
          }`}
        </style>
        <img
          ref={setImgRef}
          src={src}
          width="100%"
          alt={alt}
          className={styles.scrollMos}
          style={{
            animation: `${id.current} 20s ease-in-out infinite alternate`,
            animationPlayState: isAnimating ? "initial" : "paused",
          }}
        />
      </div>
    </div>
  );
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const getId = () =>
  [...Array(5)]
    .map(() => letters[Math.floor(Math.random() * letters.length)])
    .join("");
