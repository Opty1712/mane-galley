"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { BottomNav, Typograph } from "../../../components";
import styles from "../../../styles.module.css";

export default function Page() {
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
            <div className={styles.date}>14 — 21 Августа 2024</div>
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
            <p>
              <img src="/images/xcore/teaser.webp" width="100%" alt="VPN мем" />
            </p>
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid4}></div>
        </div>
      </section>

      <section id="task" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Задача и решение</h2>
            <span>
              <Typograph>Из-за блокировки</Typograph>{" "}
              <Link href="/projects/uncle-vpn" className={styles.link}>
                UncleVPN
              </Link>{" "}
              <Typograph>
                в российских сторах срочно потребовалось найти альтернативное
                решение для пользователей. В ходе ресерча выяснилось, что под
                запрет попадают приложения, предоставляющие прямой доступ к VPN,
                тогда как сервисы, позволяющие подключаться через сторонний
                ключ, остаются доступными. Поэтому было оперативно
                спроектировано и запущено новое приложение для подписчиков,
                позволяющее использовать VPN с помощью выданных ключей. Вся
                задача — от идеи до реализации — была выполнена за неделю.
              </Typograph>
              <br />
              <span className={styles.secondColor}>
                В результате пользователи на iOS смогли далее пользоваться
                нашими услугами.
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="task" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid19,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Макеты</h2>
            <span>
              <div className={styles.projectSubHeader}>[Экраны]</div>
              <img
                src="/images/xcore/xcore1.avif"
                width="100%"
                alt="Xcore макет"
              />
            </span>

            <span>
              <div className={styles.projectSubHeader}>[UI-kit]</div>
              <img
                src="/images/xcore/xcore2.avif"
                width="100%"
                alt="Xcore ui-kit"
              />
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Банеры в AppStore]</div>
              <img
                src="/images/xcore/xcore3.avif"
                width="100%"
                alt="Xcore банеры"
              />
            </span>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача и решение" },
          { id: "design", title: "Макеты" },
        ]}
      />
    </>
  );
}
