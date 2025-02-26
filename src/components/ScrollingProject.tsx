"use client";
import { FC, useEffect, useState } from "react";
import { checkIsMobile } from "../utils";
import styles from "./ScrollingProject.module.css";

type ScrollingProjectProps = {
  src: string;
  alt: string;
  id: string;
};

export const ScrollingProject: FC<ScrollingProjectProps> = ({
  alt,
  src,
  id,
}) => {
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
          updateHeight();
          setIsAnimating(entry.isIntersecting);
        });
      },
      { threshold: checkIsMobile() ? 0.01 : 0.5 }
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
          {`@keyframes ${id} {
            0% { top: 0; }
            45%, 55% { top: -${height}px; }
            95%, 100% { top: 0; }
            100%, 105% { top: 0; } 
            145%, 155% { top: -${height}px; }
            195%, 200% { top: 0; }
          }`}
        </style>
        <img
          ref={setImgRef}
          src={src}
          width="100%"
          alt={alt}
          className={styles.scrollMos}
          style={{
            animation: `${id} 20s ease-in-out infinite`,
            animationPlayState: isAnimating ? "initial" : "paused",
          }}
        />
      </div>
    </div>
  );
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
