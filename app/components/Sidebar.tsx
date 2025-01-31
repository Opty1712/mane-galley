"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";

const projects = [
  { title: "Uncle VPN", slug: "uncle-vpn" },
  { title: "Xcore VPN", slug: "xcore-vpn" },
  { title: "Mos.ru", slug: "mos-ru" },
  { title: "Supra", slug: "supra" },
  { title: "SberJazz", slug: "sber-jazz" },
  { title: "Калитники", slug: "kalitniki" },
];

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const animate = useCallback(() => {
    const bodyWidth = document.body.offsetWidth;
    const isMobile = bodyWidth <= 768;

    if (ref.current && isMobile) {
      ref.current.style.transform = "translateY(0)";
    }

    if (ref.current && !isMobile) {
      ref.current.style.transform = `translateY(${window.scrollY}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", animate);

    return () => window.removeEventListener("scroll", animate);
  }, [animate]);

  const toggleMobileMenu = () => {
    animate();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    animate();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className={`${styles.menuButton} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className={styles.menuButton__inner} />
      </button>

      <div
        className={`${styles.overlay} ${
          isMobileMenuOpen ? styles.overlayVisible : ""
        }`}
        onClick={closeMobileMenu}
      />

      <aside
        ref={ref}
        className={`${styles.sidebar} ${
          isMobileMenuOpen ? styles.sidebarOpen : ""
        }`}
      >
        <Link href="/" className={styles.logo}>
          M
        </Link>
        <nav className={styles.nav}>
          <div className={styles.menuTitle}>Проекты [06]</div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.menuItem}
              onClick={closeMobileMenu}
            >
              {project.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
