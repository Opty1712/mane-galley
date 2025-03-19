"use client";

import { clsx } from "clsx";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  checkIsMobile,
  projects,
  scrollToSection,
  useScrollDirection,
} from "../utils";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const pathname = usePathname();
  const { isScrollDown, scrollTop } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const animate = useCallback(() => {
    const isMobile = checkIsMobile();

    if (ref.current && isMobile) {
      ref.current.style.transform = "translateY(0)";
    }

    if (ref.current && !isMobile) {
      ref.current.style.transform = `translateY(${window.scrollY}px)`;

      const isScrolled = document.documentElement.scrollTop > 120;

      const smallPadding = window.innerHeight < 300 ? "0" : "50px";

      ref.current.style.paddingTop = isScrolled
        ? smallPadding
        : "calc(118 / 1440 * 100vw + 7vw - 30px)";
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

  const logo = (
    <img
      src="/images/logo.svg"
      width={31}
      height={26}
      alt="Лого Манаткина Наталья"
    />
  );

  return (
    <>
      <div
        className={clsx(
          styles.mobileHeader,
          isScrollDown && scrollTop && styles.hidden
        )}
      >
        {isMainPage ? (
          <a
            className={styles.logoMobile}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#content");
            }}
          >
            {logo}
          </a>
        ) : (
          <Link href={mainHref} className={styles.logoMobile}>
            {logo}
          </Link>
        )}

        <span className={styles.headerIcon}>
          <Link href={mainHref} className={styles.headerName}>
            Наталья
          </Link>
          <a
            href="https://t.me/NatalyMane"
            target="_blank"
            rel="noopener noreferrer"
            title="Написать мне в telegram @NatalyMane"
          >
            <img
              src="/icons/telegram.svg"
              width={20}
              height={20}
              alt="Telegram"
              className={styles.telegram}
            />
          </a>
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
        className={clsx(
          styles.overlay,
          isMobileMenuOpen && styles.overlayVisible
        )}
        onClick={toggleMobileMenu}
      />

      <aside
        ref={ref}
        className={`${styles.sidebar} ${
          isMobileMenuOpen ? styles.sidebarOpen : ""
        }`}
      >
        <span className={styles.sidebarContent}>
          <Link
            href={mainHref}
            className={styles.logo}
            title="Вернуться на главную страницу"
          >
            <img
              src="/images/logo.svg"
              width={77}
              height={70}
              alt="Лого Манаткина Наталья"
            />
          </Link>
          <nav className={styles.nav}>
            <div className={styles.menuTitle}>Проекты [06]</div>

            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={clsx(
                  styles.menuItem,
                  pathname.includes(project.slug) && styles.active
                )}
                onClick={toggleMobileMenu}
              >
                {project.title}
              </Link>
            ))}
          </nav>
          <span className={styles.links}>
            <a
              href="/Manatkina_Natalia__Product_Designer.pdf"
              download
              title="Скачать резюме в PDF"
            >
              <img src="/icons/pdf.svg" width={20} height={20} alt="PDF" />
            </a>
            <a
              href="https://t.me/NatalyMane"
              target="_blank"
              rel="noopener noreferrer"
              title="Написать мне в telegram @NatalyMane"
            >
              <img
                src="/icons/telegram.svg"
                width={20}
                height={20}
                alt="Telegram"
              />
            </a>
          </span>
        </span>
      </aside>
    </>
  );
};
