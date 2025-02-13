"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const scrollTopRef = useRef(0);
  const [isScrollDown, setIsScrollDown] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const calculateScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsScrollDown(scrollTopRef.current < scrollTop);
    scrollTopRef.current = scrollTop;
    setScrollTop(scrollTop);

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    setIsBottom(documentHeight - (scrollTop + windowHeight) < 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll);

    return () => window.removeEventListener("scroll", calculateScroll);
  }, [calculateScroll]);

  return { isScrollDown, scrollTop, isBottom };
};
