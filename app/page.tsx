import { clsx } from "clsx";
import { BottomNav, PortfolioLink, Typograph } from "./components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid14}>
            <h1 className={styles.h1}>
              UX/UI designer
              <br />
              Product designer
            </h1>
            <div className={styles.date}>2021 — 2025</div>
          </div>
          <div className={styles.grid2} />
          <div className={styles.grid3}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
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
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid13)}>
            <p>
              <Typograph>
                Привет, меня зовут Наталья, я создаю веб-сайты и разрабатываю
                мобильные приложения для стартапов, среднего и крупного бизнеса,
                включая B2B и B2C продукты
              </Typograph>
            </p>
            <p>
              <Typograph>
                Спроектировала решения для mos.ru и Сбера. Создала новые
                продукты с нуля, цифровизовала оффлайн-бизнес. Занималась
                брендингом и ребрендингом, ресерчем, защищала решения перед
                стейкхолдерами
              </Typograph>
            </p>
            <p>
              <Typograph>
                Благодаря моему опыту управления в бьюти—индустрии могу
                эффективно внедрять бизнес-задачки в пользовательский путь,
                работать в режиме многозадачности в командах разного уровня ❤️
              </Typograph>
            </p>
            <PortfolioLink />
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        {/** UNCLE VPN */}
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>Uncle VPN</div>
            <div className={styles.projectDate}>Март 2023 — Ноябрь 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Mobile</span>
              <span className={styles.projectBadge}>Prod</span>
            </div>
          </div>
          <div className={clsx(styles.grid6, styles.projectCell)}>
            <span className={styles.projectLine}>
              <Typograph>
                Сервис по предоставлению безопасного подключения к сети интернет
                через VPN
              </Typograph>
            </span>
            <span className={styles.projectDescription}>
              [Бизнес-задача]
              <br />
              <Typograph>
                За 3 месяца спроектировать и запустить MVP для нового VPN
                сервиса, набрать уникальных пользователей и перевести их на
                платную подписку
              </Typograph>
            </span>
            <span className={styles.projectDescription}>
              [Результат]
              <br />
              27 исследований
              <br />
              Фирменный стиль
              <br />
              Дизайн-система
              <br />
              121 экран MVP за 3 месяца
              <br />5 новых фичей
              <br />
              Конверсия в покупку до 30%
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              height="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>

        {/** Xcore Vpn  */}
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>Xcore Vpn </div>
            <div className={styles.projectDate}>14 — 21 августа 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Mobile</span>
              <span className={styles.projectBadge}>Prod</span>
            </div>
          </div>
          <div className={clsx(styles.grid6, styles.projectCell)}>
            <span className={styles.projectLine}>
              <Typograph>
                Приложение для подключения к VPN с помощью новых защищенных
                протоколов
              </Typograph>
            </span>
            <span className={styles.projectDescription}>
              [Бизнес-задача]
              <br />
              <Typograph>
                Сохранить аудиторию приложения Uncle VPN после блокировки в
                сторах РФ
              </Typograph>
            </span>
            <span className={styles.projectDescription}>
              [Результат]
              <br />
              27 исследований <br />
              Фирменный стиль <br />
              Дизайн-система <br />
              MVP за 7 дней
            </span>
          </div>
          <div className={styles.grid7}>
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
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Отзывы</h2>
          </div>
        </div>
      </section>

      <section id="education" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Образование</h2>
          </div>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Опыт работы</h2>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Скилы</h2>
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Контакты</h2>
          </div>
        </div>
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
