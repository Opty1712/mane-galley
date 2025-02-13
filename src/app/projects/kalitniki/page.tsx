"use client";
import { clsx } from "clsx";
import { BottomNav, Typograph } from "../../../components";
import styles from "../../../styles.module.css";

export default function Page() {
  return (
    <>
      <section id="intro" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid14}>
            <h1 className={styles.h1}>Калитники</h1>
            <div className={styles.date}>Апрель 2023 — Февраль 2025</div>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Калитниковские бани — один из старейших банных комплексов в центре
              Москвы
            </Typograph>
            <p>
              <img
                src="/images/kalitniki/teaser.webp"
                width="100%"
                alt="Баня мем"
              />
            </p>
          </div>
        </div>
      </section>

      <section id="task" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid8,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Простите</h2>
            <span>
              <Typograph>Я еще не успела заполнить эту страничку</Typograph>
              <img src="/images/cat.webp" width="100%" alt="Котенок" />
            </span>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача" },
        ]}
      />
    </>
  );
}
