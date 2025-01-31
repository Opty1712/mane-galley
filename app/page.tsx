import { clsx } from "clsx";
import { BottomNav } from "./components";
import styles from "./page.module.css";
import { typogrpah } from "./utils.ts";

export default function Home() {
  return (
    <>
      <section>
        <h1 className={styles.h1}>Продуктовый дизайнер</h1>
        <div className={styles.pageGrid}>
          <div className={clsx(styles.dateIntro, styles.grid8)}>
            <div className={styles.date}>2021 — 2025</div>
            <div className={styles.intro}>
              {typogrpah.execute(
                `Привет! Я Наталья, проектирую сайты и мобильные приложения, исследую потребности пользователей и развиваю продукты. Люблю создавать эмоциональные и дружелюбные для человека решения. Ниже приведены кейсы`
              )}
            </div>
          </div>
        </div>
        <div className={styles.photoBlock}>
          <img
            src="/images/me_small.webp"
            width="100%"
            height="100%"
            alt="Наталья, продуктовый дизайнер"
          />
          <div className={styles.contactsTop}>
            <a
              href="https://t.me/NatalyMane"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a href="mailto:manatkina@mail.ru">Email</a>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className={styles.h2}>Проекты</h2>
        <div className=""></div>
      </section>

      <section id="feedback">
        <h2 className={styles.h2}>Отзывы</h2>
        <div className=""></div>
      </section>

      <section id="education">
        <h2 className={styles.h2}>Образование</h2>
        <div className="space-y-6"></div>
      </section>

      <section id="experience">
        <h2 className={styles.h2}>Опыт работы</h2>
        <div className=""></div>
      </section>

      <section id="skills">
        <h2 className={styles.h2}>Скилы</h2>
        <div className=""></div>
      </section>

      <section id="contacts">
        <h2 className={styles.h2}>Контакты</h2>
        <div className=""></div>
      </section>
      <BottomNav sections={sections} />
    </>
  );
}

const sections = [
  { id: "projects", title: "Проекты" },
  { id: "feedback", title: "Отзывы" },
  { id: "education", title: "Образование" },
  { id: "experience", title: "Опыт работы" },
  { id: "skills", title: "Скиллы" },
  { id: "contacts", title: "Контакты" },
];
