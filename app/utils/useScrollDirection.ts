"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const scrollTop = useRef(0);
  const [isScrollDown, setIsScrollDown] = useState(true);

  const calculateScroll = useCallback(() => {
    setIsScrollDown(scrollTop.current < document.documentElement.scrollTop);
    scrollTop.current = document.documentElement.scrollTop;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll);

    return () => window.removeEventListener("scroll", calculateScroll);
  }, [calculateScroll]);

  return { isScrollDown };
};
