"use client";
import { clsx } from "clsx";
import { useEffect } from "react";
import { BottomNav, Typograph } from "../../../components";
import styles from "../../../styles.module.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="intro" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid14}>
            <h1 className={styles.h1}>
              xCore Client
              <br />
              for X-Ray
            </h1>
            <div className={styles.date}>14 — 21 августа 20244</div>
          </div>
          <div className={styles.grid3} />
          <div className={clsx(styles.grid2, styles.stores)}>
            <a
              href="https://apps.apple.com/us/app/xcorevpn/id6642673852"
              target="_ blank"
              rel="noopener noreferrer"
              title="Скачать в AppStore"
            >
              <img
                src="/icons/appstore.svg"
                width="100%"
                alt="Скачать в AppStore"
              />
            </a>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Приложение для подключения к VPN с помощью новых защищенных
              протоколов
            </Typograph>
            <img src="/images/xcore/teaser.webp" width="100%" alt="VPN мем" />
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid4}></div>
        </div>
      </section>

      <BottomNav sections={[{ id: "intro", title: "Интро" }]} />
    </>
  );
}
