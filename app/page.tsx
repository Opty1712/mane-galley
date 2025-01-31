import { clsx } from "clsx";
import { BottomNav, PortfolioLink, Typograph } from "./components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section>
        <h1 className={styles.h1}>Продуктовый дизайнер</h1>
        <div className={styles.pageGrid}>
          <div className={clsx(styles.dateIntro, styles.grid8)}>
            <div className={styles.date}>2021 — 2025</div>
            <div className={styles.intro}>
              <Typograph>
                Привет, меня зовут Наталья, и я продуктовый дизайнер с опытом
                работы над веб-сайтами и мобильными приложениями для стартапов,
                среднего и крупного бизнеса, включая B2B и B2C продукты.
              </Typograph>
              <br />
              <br />
              <Typograph>
                Спроектировала решения для mos.ru и Сбера, которые ушли в прод и
                масштабируются. Создала новые продукты с нуля, цифровизовала
                оффлайн-бизнес. Занималась брендингом и ребрендингом, ресерчем,
                защищала решения перед стейкхолдерами.
              </Typograph>
              <br />
              <br />
              <Typograph>
                Мой опыт 10+ лет управления бизнесом в бьюти-индустрии помогает
                ставить работу на рельсы, переводить корпоративные и продуктовые
                амбиции на понятный и удобный для пользователя язык. Эффективно
                работать в мультикультурных командах, включая команду разработки
              </Typograph>
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
        <div className={styles.pageGrid}>
          <span className={styles.grid3} />
          <PortfolioLink />
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={clsx(styles.grid3, styles.projectDescription)}>
            <span className={styles.projectHeader}>Uncle VPN</span>
            <span className={styles.projectDate}>Март 2023 — Ноябрь 2024</span>
            <span>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Mobile</span>
              <span className={styles.projectBadge}>Prod</span>
            </span>
          </div>
          <div className={clsx(styles.grid3, styles.projectDescription)}>
            <Typograph>
              Uncle VPN — это сервис по предоставлению безопасного подключения к
              сети интернет через VPN
            </Typograph>
            <span>
              [Цель]
              <br />
              <Typograph>
                Сделать опыт пользования приложением простым и эстетичным.
                Перевести аудиторию на платные подписки
              </Typograph>
            </span>
            <span>
              [Задача]
              <br /> <Typograph>Продуктовый дизайнер UX-копирайт</Typograph>
            </span>
          </div>
          <div className={styles.grid4}>
            <img
              src="/images/me_small.webp"
              width="100%"
              height="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={clsx(styles.grid3, styles.projectDescription)}>
            <span className={styles.projectHeader}>
              Xcore Vpn Client for Xray
            </span>
            <span className={styles.projectDate}>14 — 21 августа 2024</span>
            <span>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Mobile</span>
              <span className={styles.projectBadge}>Prod</span>
            </span>
          </div>
          <div className={clsx(styles.grid3, styles.projectDescription)}>
            <Typograph>
              Xcore Vpn Client for Xray — это Cервис по предоставлению
              безопасного подключения к сети интернет через VPN
            </Typograph>
            <span>
              [Цель]
              <br />
              <Typograph>
                Перевести пользователей из UncleVPN в Xcore Vpn Client for Xray
                в связи с блокированием сервиса на территории РФ
              </Typograph>
            </span>
            <span>
              [Задача]
              <br /> <Typograph>Продуктовый дизайнер UX-копирайт</Typograph>
            </span>
          </div>
          <div className={styles.grid4}>
            <img
              src="/images/me_small.webp"
              width="100%"
              height="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
      </section>

      <section id="feedback" className={styles.section}>
        <h2 className={styles.h2}>Отзывы</h2>
        <div className=""></div>
      </section>

      <section id="education" className={styles.section}>
        <h2 className={styles.h2}>Образование</h2>
        <div className="space-y-6"></div>
      </section>

      <section id="experience" className={styles.section}>
        <h2 className={styles.h2}>Опыт работы</h2>
        <div className=""></div>
      </section>

      <section id="skills" className={styles.section}>
        <h2 className={styles.h2}>Скилы</h2>
        <div className=""></div>
      </section>

      <section id="contacts" className={styles.section}>
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
