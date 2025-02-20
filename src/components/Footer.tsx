"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles.module.css";
import { getNextProject } from "../utils";
import { FooterCopy } from "./FooterCopy";
import { Typograph } from "./Typograph";

export const Footer = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  console.log(pathname);

  return (
    <>
      {!isMainPage && (
        <>
          <div className={styles.pageGrid}>
            <div className={styles.grid5} />
            <div className={clsx(styles.grid15)}>
              <h2 className={clsx(styles.h2, styles.divider)}>
                <Typograph>
                  Понравился этот кейс? Давайте вместе поработаем над чем-то не
                  менее крутым!
                </Typograph>{" "}
                <a
                  href="https://t.me/NatalyMane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/telegram.svg"
                    alt="Telegram"
                    className={styles.telegramFooter}
                  />
                </a>
              </h2>
            </div>
          </div>
          <div className={styles.nextProject}>
            <Link
              href={`/projects/${getNextProject(pathname).slug}`}
              className={styles.link}
            >
              Следующий проект →
            </Link>
          </div>
        </>
      )}
      <div className={styles.pageGrid}>
        <div className={styles.grid5} />
        <div className={clsx(styles.grid19, styles.footerLine)} />
      </div>

      <div
        className={clsx(
          styles.pageGrid,
          styles.footerText,
          styles.commonSection
        )}
      >
        <div className={styles.grid5} />
        <div className={clsx(styles.grid6)}>
          ©2025 Манаткина Наталья
          <FooterCopy />
        </div>
        <div className={clsx(styles.grid13)}>
          <Typograph>
            Контент предназначен исключительно для личного использования и
            некоммерческих целей
          </Typograph>
          <div
            className={styles.commonSectionBlock}
            style={{
              marginTop: "2vh",
            }}
          >
            <span className={styles.contactSections}>[Разработка]</span>
            <span>Андрей Едунов</span>
          </div>
        </div>
      </div>
    </>
  );
};
