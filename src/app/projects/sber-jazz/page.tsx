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
            <h1 className={styles.h1}>SberJazz</h1>
            <div className={styles.date}>Октябрь 2023 — Январь 2024</div>
          </div>
          <div className={styles.grid5} />
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              SberJazz — это сервис видеовстреч, мессенджер для работы и личных
              дел с искусственным интеллектом
            </Typograph>
            <p>
              <img
                src="/images/sber/teaser.webp"
                width="100%"
                alt="Созвон мем"
              />
            </p>
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid4}></div>
        </div>
      </section>

      <section id="task" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Задача</h2>
            <span>
              Сделать функционал на основе AI, который поможет привлечь и
              удержать малый и средний бизнес, повлиять на метрики:
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>Retention</Typograph>
                </li>
                <li>
                  <Typograph>MAU</Typograph>
                </li>
                <li>
                  <Typograph>Виральность продукта</Typograph>
                </li>
              </ul>
            </span>
            <span>Проект под NDA</span>
            <img src="/images/sber/sber1.webp" width="100%" alt="NDA" />
          </div>
        </div>
      </section>

      <section id="steps" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Этапы работы</h2>
            <span>
              <div className={styles.projectSubHeader}>
                [Моя роль в проекте]
              </div>
              <Typograph>
                Работала над кейсом с октября 2023 по январь 2024. Это был мой
                первый опыт работы в команде над сложным проектом в сжатые
                сроки)) Команда SberJazz, я буду скучать❤️
              </Typograph>
              <p>
                <img
                  src="/images/sber/sber2.webp"
                  width="100%"
                  alt="Команда на защите"
                />
              </p>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Этапы работы]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Проанализировала популярные сервисы видеоконференцсвязи:
                    механику, фичи, функционал, tone of voice, реальные отзывы
                    пользователей, выделила топ-3 конкурента
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Собрала отзывы пользователей и статьи о SberJazz в открытых
                    источниках, сформулировала гипотезы
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Составила вопросы и провела 10 глубинных интервью
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Составила вопросы и запустила количественный опрос
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Узнала потребности и боли пользователей, сформулировала JBTD
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    После исследований появились инсайты, идеи, которые вошли в
                    итоговую работу
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    По результатам исследований сверстала 11 экранов в
                    десктопной версии на дизайн-системе Сбера
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Сформулировала интерфейсные гипотезы и вопросы к
                    ЮТ-тестированию
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Задизайнила макеты по результатам исследований
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Собрала прототип и провела 7 ЮТ-тестов: находила ошибки,
                    правила макеты, всего получилось 3 итерации
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Переверстала макеты, собрала много флоу в единый
                    кликабельный прототип из 60 экранов, который вошел в
                    финальную защиту
                  </Typograph>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section id="result" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid11,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Достижения</h2>
            <Typograph>
              Наша команда заняла 1-ое место на защите проектов. Результаты
              исследований команда SberJazz взяла в разработку и уже некоторые
              фичи внедрены
            </Typograph>
            <img src="/images/sber/sber3.webp" width="100%" alt="Результаты" />
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача" },
          { id: "steps", title: "Этапы" },
          { id: "result", title: "Достижения" },
        ]}
      />
    </>
  );
}
