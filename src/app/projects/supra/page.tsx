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
            <h1 className={styles.h1}>Supra</h1>
            <div className={styles.date}>Апрель — Июль 2024</div>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Supra — сеть грузинских ресторанов во Владивостоке и Екатеринбурге
            </Typograph>
            <p>
              <img
                src="/images/supra/teaser.webp"
                width="100%"
                alt="Ресторан мем"
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
            <h2 className={styles.h2}>Задача</h2>
            <span>
              <Typograph>
                Спроектировать систему бронирования для хоста на основе
                поведенческих характеристик гостей с применением ИИ. Система
                бронирования должна снять нагрузку на персонал, уменьшить риск
                ошибки на подбор параметров бронирования, увеличить скорость
                обслуживания и оборот столов на 10%
              </Typograph>
            </span>
          </div>
        </div>
      </section>

      <section id="" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
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
