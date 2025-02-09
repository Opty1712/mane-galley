"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const animate = useCallback(() => {
    const bodyWidth = document.body.offsetWidth;
    const isMobile = bodyWidth <= 1000;

    if (ref.current && isMobile) {
      ref.current.style.transform = "translateY(0)";
    }

    if (ref.current && !isMobile) {
      ref.current.style.transform = `translateY(${window.scrollY}px)`;

      const isScrolled = document.documentElement.scrollTop > 120;

      ref.current.style.paddingTop = isScrolled
        ? "50px"
        : "calc(118 / 1440 * 100vw + 6vw)";
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

  const isMainPage = pathname === "/";
  const mainHref = isMainPage ? "#content" : "/";

  return (
    <>
      <div className={styles.mobileHeader}>
        <Link href={mainHref} className={styles.logoMobile}>
          M
        </Link>

        <span>
          Наталья{" "}
          <img
            src="/icons/telegram.svg"
            width={20}
            height={20}
            alt="Telegram"
          />
        </span>
        <button
          className={`${styles.menuButton} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.menuButton__inner} />
        </button>
      </div>

      <div
        className={`${styles.overlay} ${
          isMobileMenuOpen ? styles.overlayVisible : ""
        }`}
        onClick={toggleMobileMenu}
      />

      <aside
        ref={ref}
        className={`${styles.sidebar} ${
          isMobileMenuOpen ? styles.sidebarOpen : ""
        }`}
      >
        <Link href={mainHref} className={styles.logo}>
          M
        </Link>
        <nav className={styles.nav}>
          <div className={styles.menuTitle}>Проекты [06]</div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.menuItem}
              onClick={toggleMobileMenu}
            >
              {project.title}
            </Link>
          ))}

          <a className={styles.menuTitle} href="#feedback">
            Обо мне
          </a>

          <img
            src="/icons/telegram.svg"
            width={20}
            height={20}
            alt="Telegram"
          />
          <img src="/icons/mail.svg" width={20} height={20} alt="Email" />
        </nav>
      </aside>
    </>
  );
};
