"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const scrollTopRef = useRef(0);
  const [isScrollDown, setIsScrollDown] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  const calculateScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    setIsScrollDown(scrollTopRef.current < scrollTop);
    scrollTopRef.current = scrollTop;
    setScrollTop(scrollTop);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll);

    return () => window.removeEventListener("scroll", calculateScroll);
  }, [calculateScroll]);

  return { isScrollDown, scrollTop };
};
