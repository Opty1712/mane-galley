"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav, PortfolioLink, Typograph } from "./components";
import styles from "./page.module.css";

export default function Home() {
  const { push } = useRouter();

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
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/uncle-vpn")}
        >
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
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                Сервис по предоставлению безопасного подключения к сети интернет
                через VPN
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                За 3 месяца спроектировать и запустить MVP для нового VPN
                сервиса, набрать уникальных пользователей и перевести их на
                платную подписку
              </Typograph>
            </span>

            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>27 исследований</li>
                <li>Фирменный стиль</li>
                <li>Дизайн-система</li>
                <li>121 экран MVP за 3 месяца</li>
                <li>5 новых фичей</li>
                <li>Конверсия в покупку до 30%</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <span>
              <img
                src="/images/me_small.webp"
                width="100%"
                alt="Наталья, продуктовый дизайнер"
              />
              <Link href="/projects/uncle-vpn" className={styles.projectLink}>
                Подробнее
              </Link>
            </span>
          </div>
        </div>

        {/** Xcore Vpn  */}
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/x-core-vpn")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>xCore VPN </div>
            <div className={styles.projectDate}>14 — 21 августа 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Mobile</span>
              <span className={styles.projectBadge}>Prod</span>
            </div>
          </div>
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                Приложение для подключения к VPN с помощью новых защищенных
                протоколов
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Сохранить аудиторию приложения Uncle VPN после блокировки в
                сторах РФ
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>27 исследований</li>
                <li>Фирменный стильФирменный стильФирменный стиль</li>
                <li>Дизайн-система</li>
                <li>MVP за 7 дней</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
            <Link href="/projects/x-core-vpn" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Mos.ru */}
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/mos-ru-sport")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>Mos.ru</div>
            <div className={styles.projectDate}>Февраль 2024 — Март 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Web</span>
              <span className={styles.projectBadge}>Prod</span>
            </div>
          </div>
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                Mos.ru — государственный сервис по оказанию услуг населению
                Проект связан со спортом дописать
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Понять и показать как можно интегрировать сервисы Департамента
                спорта города Москвы в платформу MOS.RU
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Концепция страницы о спорте </li>
                <li>Верстка в новом дизайне</li>
                <li>Раздел о спорте для людей с ОВЗ</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
            <Link href="/projects/mos-ru-sport" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Supra */}
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/supra")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>Supra</div>
            <div className={styles.projectDate}>Апрель 2024 — Июль 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Web</span>
              <span className={styles.projectBadge}>Prod</span>
              <span className={styles.projectBadge}>B2B</span>
            </div>
          </div>
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                Supra — сеть грузинских ресторанов во Владивостоке и
                Екатеринбурге
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Спроектировать систему бронирования для хоста Супры на основе
                поведенческих характеристик гостей с применением ИИ, которая
                снимет временную и эмоциональную нагрузку на персонал и уменьшит
                риск ошибки на подбор параметров бронирования. Увеличить
                оборачиваемость столов на 10%
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Новая система бронирования для хоста</li>
                <li>Дизайн с нуля</li>
                <li>Прототипирование</li>
                <li>Фичи в проде</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
            <Link href="/projects/supra" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Kalitniki */}
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/kalitniki")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>Kalitniki</div>
            <div className={styles.projectDate}>Апрель 2023 — Февраль 2025</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Web</span>
              <span className={styles.projectBadge}>Prod</span>
            </div>
          </div>
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                Kalitniki — это банный комплекс в центре москвы
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Усиленная итеррационная цифровизация бизнеса с увеличением
                конверсии в покупку на сайте. Обновление визуальной
                коммуникации, улучшение клиентского опыта в вебе
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Редизайн сайта</li>
                <li>Создание новой дизайн-системы</li>
                <li>Ui-kit и гайдлайны</li>
                <li>Интегрирование цифровизации</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
            <Link href="/projects/kalitniki" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** SberJazz */}
        <div
          className={clsx(styles.pageGrid, styles.project)}
          title="Смотреть кейс"
          onClick={() => push("/projects/sber-jazz")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>SberJazz</div>
            <div className={styles.projectDate}>Октябрь 2023 — Январь 2024</div>
            <div>
              <span className={styles.projectBadge}>UX/UI</span>
              <span className={styles.projectBadge}>Web</span>
              <span className={styles.projectBadge}>Prod</span>
              <span className={styles.projectBadge}>B2B</span>
            </div>
          </div>
          <div
            className={clsx(
              styles.grid6,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span className={styles.projectLine}>
              <Typograph>
                SberJazz — это сервис видеовстреч, мессенджер для работы и
                личных делс искусственным интеллектом
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Сделать функционал на основе AI, который поможет привлечь и
                удержать малый и средний бизнес, повлиять на метрики: Retention,
                MAU, увеличить виральность продукта
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Концепция страницы о спорте </li>
                <li>Верстка в новом дизайне</li>
                <li>Раздел о спорте для людей с ОВЗ</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
            <Link href="/projects/sber-jazz" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>
      </section>

      <section id="feedback" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid15}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мне довелось работать в команде с сильными специалистами и здесь
                несколько слов обо мне
              </Typograph>
            </h2>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
            <div className={styles.opinionBlock}>
              <img
                src="/images/home/Nadya.webp"
                width="107"
                alt="Надя Здо́рова, Designer / SberDevices"
              />
              <span>
                <div>Надя Здо́рова</div>
                <div className={styles.opinionPosition}>
                  Designer / SberDevices
                </div>
              </span>
            </div>

            <div className={styles.opinionText}>
              <Typograph>
                «Работали с Наташей вместе над проектом в Британке. Наташа очень
                ответственная, инициативная, всегда готова во всё включиться,
                всё поизучать и сделать, найти хорошее решение, задать кучу
                вопросов, узнать суть задачи и найти к ней оптимальное решение.
                В общем, было невероятно комфортно и хорошо!»
              </Typograph>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid8}>
            <div className={styles.opinionBlock}>
              <img
                src="/images/home/Max.webp"
                width="107"
                alt="Mobile Developer / Cofounder"
              />
              <span>
                <div>Макс Тищенко</div>
                <div className={styles.opinionPosition}>
                  Mobile Developer / Cofounder
                </div>
              </span>
            </div>

            <div className={styles.opinionText}>
              <Typograph>
                «С Наташей было приятно работать. Она уделяет большое внимание
                деталям и точно следует поставленным задачам. Её работа
                отличается профессионализмом и оперативностью. Всегда на связи,
                быстро реагирует на правки. Дизайн получился функциональным и
                продуманным. Рекомендую для проектов, где важны качество и
                внимание к мелочам»
              </Typograph>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
            <div className={styles.opinionBlock}>
              <img
                src="/images/home/Nadya.webp"
                width="107"
                alt="Backend Developer"
              />
              <span>
                <div>Константин Гаврилов</div>
                <div className={styles.opinionPosition}>Backend Developer</div>
              </span>
            </div>

            <div className={styles.opinionText}>
              <Typograph>
                «Работали с Натальей над приложением UncleVPN, всегда очень
                ответственно подходила к задачам и давала отличный результат.
                Многие пользователя нашего приложения отмечали, что дизайн
                приятный и эргономичный. Работать с Натальей было легко и
                комфортно»
              </Typograph>
            </div>
          </div>
          <div className={styles.grid5} />
        </div>
      </section>

      <section id="education" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мне повезло учиться у лучших специалистов в дизайн-индустрии и
                не только
              </Typograph>
            </h2>
          </div>
        </div>
        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid5} />
          <div className={styles.grid13}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.education)}>
          <div className={styles.grid5} />
          <div className={styles.grid6}>Мой любимый универ:)</div>
          <div className={styles.grid7}>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>
                Британская высшая школа дизайна
              </span>
              <span className={styles.educationName}>«Годовой курс UX/UI»</span>
              <span className={styles.educationDate}>2023 — 2024</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>
                Британская высшая школа дизайна
              </span>
              <span className={styles.educationName}>
                «Основы коммуникационного дизайна»
              </span>
              <span className={styles.educationDate}>2021 — 2022</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>Сергей Гуров</span>
              <span className={styles.educationName}>
                «Алгоритмические сетки»
              </span>
              <span className={styles.educationName}>
                «Игра в типографику. Композиция, декомпозиция»
              </span>
              <span className={styles.educationDate}>2022</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>МГТА</span>
              <span className={styles.educationName}>
                «Бухгалтерский учёт, анализ и аудит»
              </span>
              <span className={styles.educationDate}>2012</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>МГИУ</span>
              <span className={styles.educationName}>«Юриспруденция»</span>
              <span className={styles.educationDate}>2004</span>
            </div>
          </div>
        </div>
      </section>

      <section id="job" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мой опыт работы в UX/UI — 3 года. Ранее управляла командами и
                процессами в сфере бьюти-индустрии
              </Typograph>
            </h2>
          </div>
        </div>
        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid5} />
          <div className={styles.grid13}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.education)}>
          <div className={styles.grid5} />
          <div className={styles.grid6}>Hard skills:</div>
          <div className={styles.grid7} style={{ marginBottom: "6vh" }}>
            <div className={styles.educationBlock}>
              <span className={styles.educationName}>
                Adobe Illustrator, Photoshop, After Effects
              </span>
              <span className={styles.educationName}>Figma</span>
              <span className={styles.educationName}>Spline</span>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.education)}>
          <div className={styles.grid11} />
          <div className={styles.grid4}>Frameworks:</div>
          <div className={styles.grid8} style={{ marginBottom: "6vh" }}>
            <div className={styles.educationBlock}>
              <span className={styles.educationName}>JTBD</span>
              <span className={styles.educationName}>MindSet</span>
              <span className={styles.educationName}>Userflow</span>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid7} />
          <div className={styles.grid8}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.education)}>
          <div className={styles.grid7} />
          <div className={styles.grid4}>Frameworks:</div>
          <div className={styles.grid4}>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>UncleVPN</span>
              <span className={styles.educationName}>Product Designer</span>
              <span className={styles.educationDate}>2023 — 2024</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>Kalitniki</span>
              <span className={styles.educationName}>Product Designer</span>
              <span className={styles.educationDate}>2023 — 2025</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>UVENT</span>
              <span className={styles.educationName}>UX/UI Designer</span>
              <span className={styles.educationDate}>2021 — 2023</span>
            </div>
            <div className={styles.educationBlock}>
              <span className={styles.educationSchool}>Центр Красоты</span>
              <span className={styles.educationName}>Founder / управление</span>
              <span className={styles.educationDate}>2000 — 2021</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мои результаты по дизайну, качественным исследованиям, работе с
                фреймворками
              </Typograph>
            </h2>
          </div>
        </div>
      </section>
      <BottomNav sections={sections} />
    </>
  );
}

const sections = [
  { id: "content", title: "Привет!" },
  { id: "projects", title: "Проекты" },
  { id: "feedback", title: "Отзывы" },
  { id: "education", title: "Образование" },
  { id: "job", title: "Работа" },
  { id: "contacts", title: "Контакты" },
];
