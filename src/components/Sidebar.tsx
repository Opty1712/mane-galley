"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { checkIsMobile, useScrollDirection } from "../utils";
import styles from "./Sidebar.module.css";

const projects = [
  { title: "Uncle VPN", slug: "uncle-vpn" },
  { title: "xCore VPN", slug: "x-core-vpn" },
  { title: "Mos.ru", slug: "mos-ru-sport" },
  { title: "Supra", slug: "supra" },
  { title: "SberJazz", slug: "sber-jazz" },
  { title: "Калитники", slug: "kalitniki" },
];

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

  return (
    <>
      <div
        className={clsx(
          styles.mobileHeader,
          isScrollDown && scrollTop && styles.hidden
        )}
      >
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
            M
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
              style={{ marginTop: "20px", padding: "10px" }}
            />
          </a>
        </span>
      </aside>
    </>
  );
};
