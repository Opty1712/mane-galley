"use client";

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    if (isChromium) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      smoothScrollTo(element, 1500);
    }
  }
};

const isChromium = "chrome" in window;

/** for non chromium browsers */
function smoothScrollTo(element: HTMLElement, duration = 1000) {
  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // 0 - 1
    const easeInOutQuad =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startPosition + distance * easeInOutQuad);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}
