"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BottomNav,
  PortfolioLink,
  ScrollingProject,
  Typograph,
} from "../components";
import styles from "../styles.module.css";
import { checkIsMobile, getProject } from "../utils";

export default function Home() {
  const { push } = useRouter();
  const isMobile = checkIsMobile();

  return (
    <>
      <section>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid14}>
            <h1 className={styles.h1}>
              UX/UI/Product
              <br />
              Designer
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
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid13)}>
            <p>
              <Typograph>
                Привет, меня зовут Наталья, я создаю веб-сайты и разрабатываю
                мобильные приложения для стартапов, а так же среднего и крупного
                бизнеса, включая B2B и B2C продукты
              </Typograph>
            </p>
            <p>
              <Typograph>
                Спроектировала решения для Mos.ru и Сбера. Создала новые
                продукты с нуля, цифровизовала оффлайн-бизнес. Занималась
                брендингом и ребрендингом, исследованиями, защищала решения
                перед стейкхолдерами
              </Typograph>
            </p>
            <p>
              <Typograph>
                Фокусируюсь на исследованиях, пользовательском опыте и задачах
                бизнеса.
              </Typograph>{" "}
              <span className={styles.secondColor}>
                <Typograph>
                  Люблю развивать дизайн-системы, UI-kit. Менторю в Британке,
                  слежу за трендами и постоянно развиваюсь
                </Typograph>
              </span>{" "}
              ❤️
            </p>
            <PortfolioLink />
          </div>
        </div>
      </section>

      {/** Mos.ru */}
      <div
        className={clsx(styles.pageGrid, styles.project, styles.interactive)}
        title="Смотреть кейс"
        onClick={() =>
          !isMobile && push(`/projects/${getProject("Mos.ru").slug}`)
        }
      >
        <div className={styles.grid5} />
        <div className={clsx(styles.grid6)}>
          <div className={styles.projectHeader}>
            <Link href={`/projects/${getProject("Mos.ru").slug}`}>
              Спорт на mos.ru
            </Link>
          </div>
          <div className={styles.projectDate}>Февраль — Март 2024</div>
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
              Mos.ru — портал для оказания услуг жителям Москвы. Департамент
              спорта — организация, отвечающая за всё, что связано со спортом
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
              <li>Новый портал о спорте</li>
              <li>Верстка в новом дизайне</li>
              <li>Раздел для людей с ОВЗ</li>
              <li>Публичный питчинг проекта</li>
            </ul>
          </span>
        </div>
        <div className={styles.grid7}>
          <ScrollingProject
            alt="Макет Mos.ru"
            src="/images/home/mos1.avif"
            id="mos"
          />
          <img
            src="/images/home/mos2.avif"
            width="100%"
            alt="Макет Mos.ru"
            className={styles.img}
          />

          <Link
            href={`/projects/${getProject("Mos.ru").slug}`}
            className={styles.projectLink}
          >
            Подробнее
          </Link>
        </div>
      </div>

      <section id="projects" className={styles.section}>
        {/** UNCLEVPN */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() =>
            !isMobile && push(`/projects/${getProject("UncleVPN").slug}`)
          }
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href={`/projects/${getProject("UncleVPN").slug}`}>
                UncleVPN
              </Link>
            </div>
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
                Cервис по предоставлению безопасного подключения к сети интернет
                через VPN
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Спроектировать и запустить MVP для нового VPN сервиса, привлечь
                уникальных пользователей и перевести их на платную подписку.
                Срок — 3 месяца!
              </Typograph>
            </span>

            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>14 исследований</li>
                <li>Фирменный стиль</li>
                <li>UI-kit</li>
                <li>121 экран в дизайне</li>
                <li>MVP за 3 месяца</li>
                <li>5 новых фичей</li>
                <li>Конверсия в покупку достигла 30%</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <span>
              <img
                src="/images/home/uncle1.avif"
                width="100%"
                alt="макет UncleVPN"
              />
              <img
                src="/images/home/uncle2.avif"
                width="100%"
                alt="макет UncleVPN"
                className={styles.img}
              />
              <Link
                href={`/projects/${getProject("UncleVPN").slug}`}
                className={styles.projectLink}
              >
                Подробнее
              </Link>
            </span>
          </div>
        </div>

        {/** Kalitniki */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() =>
            !isMobile && push(`/projects/${getProject("Калитники").slug}`)
          }
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href={`/projects/${getProject("Калитники").slug}`}>
                Калитники
              </Link>
            </div>
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
                Калитниковские бани — популярный банный комплекс в центре Москвы
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Итерационная цифровизация оффлайн-бизнеса с увеличением
                конверсии в покупку на сайте. Обновление визуальной
                коммуникации, улучшение клиентского опыта в вебе
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Редизайн сайта</li>
                <li>Дизайн-система, UI-kit</li>
                <li>
                  <Typograph>
                    Интегрирование системы бронирования в путь пользователя
                  </Typograph>
                </li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <ScrollingProject
              alt="Макет Калитники"
              src="/images/home/kalitniki1.avif"
              id="kalitniki"
            />

            <Link
              href={`/projects/${getProject("Калитники").slug}`}
              className={styles.projectLink}
            >
              Подробнее
            </Link>
          </div>
        </div>

        {/** Xcore Vpn  */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() =>
            !isMobile && push(`/projects/${getProject("xCore VPN").slug}`)
          }
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href={`/projects/${getProject("xCore VPN").slug}`}>
                xCore Client for X-Ray
              </Link>
            </div>
            <div className={styles.projectDate}>14 — 21 Августа 2024</div>
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
                Сохранить аудиторию приложения Uncle VPN после блокировки в в
                Google Play / AppStore
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Фирменный стиль</li>
                <li>Запуск продукта за 7 дней</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/home/xcore1.avif"
              width="100%"
              alt="макет xCore VPN"
            />
            <img
              src="/images/home/xcore2.avif"
              width="100%"
              alt="макет xCore VPN"
              className={styles.img}
            />
            <Link
              href={`/projects/${getProject("xCore VPN").slug}`}
              className={styles.projectLink}
            >
              Подробнее
            </Link>
          </div>
        </div>

        {/** Supra */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() =>
            !isMobile && push(`/projects/${getProject("Supra").slug}`)
          }
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href={`/projects/${getProject("Supra").slug}`}>Supra</Link>
            </div>
            <div className={styles.projectDate}>Апрель — Июль 2024</div>
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
                Спроектировать систему бронирования для хоста на основе
                поведенческих характеристик гостей с применением ИИ. Система
                бронирования должна снять нагрузку на персонал, уменьшить риск
                ошибки на подбор параметров бронирования, увеличить скорость
                обслуживания и оборот столов на 10%
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
            <img src="/images/home/supra1.avif" width="100%" alt="Супра" />
            <Link
              href={`/projects/${getProject("Supra").slug}`}
              className={styles.projectLink}
            >
              Подробнее
            </Link>
          </div>
        </div>

        {/** SberJazz */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() =>
            !isMobile && push(`/projects/${getProject("SberJazz").slug}`)
          }
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href={`/projects/${getProject("SberJazz").slug}`}>
                SberJazz
              </Link>
            </div>
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
                личных дел с искусственным интеллектом
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Сделать функционал на основе AI, который поможет привлечь и
                удержать малый и средний бизнес, повлиять на метрики: Retention,
                MAU. Увеличить виральность продукта
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>Фичи в проде</li>
                <li>1-ое место на защите проектов</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img src="/images/sber/sber1.webp" width="100%" alt="SberJazz" />
            <Link
              href={`/projects/${getProject("SberJazz").slug}`}
              className={styles.projectLink}
            >
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
                всё изучить и сделать, найти хорошее решение, задать кучу
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
                характеризуется высоким профессионализмом и оперативностью.
                Всегда на связи, быстро реагирует на правки. Дизайн получился
                функциональным и продуманным. Рекомендую для проектов, где важны
                качество и внимание к мелочам»
              </Typograph>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
            <div className={styles.opinionBlock}>
              <img
                src="/images/home/Konstantin.webp"
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
            <h2 className={clsx(styles.h2, styles.subsection)}>
              <Typograph>
                Мне повезло учиться у лучших специалистов в дизайн-индустрии и
                не только
              </Typograph>
            </h2>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid13}>
            <img src="/images/home/bri1.avif" width="100%" alt="Британка" />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={styles.grid6}>Мой любимый универ:)</div>
          <div className={styles.grid7}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>
                Британская высшая школа дизайна
              </span>
              <span className={styles.commonSectionName}>
                «Годовой курс UX/UI»
              </span>
              <span className={styles.commonSectionDate}>2023 — 2024</span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>
                Британская высшая школа дизайна
              </span>
              <span className={styles.commonSectionName}>
                «Основы коммуникационного дизайна»
              </span>
              <span className={styles.commonSectionDate}>2021 — 2022</span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>Сергей Гуров</span>
              <span className={styles.commonSectionName}>
                «Алгоритмические сетки»
              </span>
              <span className={styles.commonSectionName}>
                «Игра в типографику. Композиция, декомпозиция»
              </span>
              <span className={styles.commonSectionDate}>2022</span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>МГТА</span>
              <span className={styles.commonSectionName}>
                «Бухгалтерский учёт, анализ и аудит»
              </span>
              <span className={styles.commonSectionDate}>2012</span>
            </div>
          </div>
        </div>
      </section>

      <section id="job" className={styles.section}>
        <div className={styles.pageGrid} style={{ marginBottom: "6vh" }}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мой опыт в дизайне — 3 года. Еще управляла командами и
                процессами, питчила проекты на большую аудиторию)
              </Typograph>
            </h2>
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.secondColor)}>[01]</div>
          <div className={styles.grid5}>
            <div className={styles.commonSectionBlock}>
              <h2 className={clsx(styles.h2, styles.subsection)}>
                <Typograph>Харды и навыки</Typograph>
              </h2>
              <span>Figma</span>
              <span>Illustrator</span>
              <span>Photoshop</span>
              <span>After Effects</span>
              <span>Spline</span>
            </div>
          </div>
          <div className={styles.grid2} />
          <div className={clsx(styles.grid6, styles.job)}>
            <img
              src="/images/home/bri2.avif"
              width="100%"
              alt="Британка, команда"
            />
            <p>
              <Typograph>
                Корпоративный уровень владения Figma, работаю с вектором, могу
                немножко в анимацию и 3D)
              </Typograph>
            </p>
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.secondColor)}>[02]</div>
          <div className={styles.grid5}>
            <div className={styles.commonSectionBlock}>
              <h2 className={clsx(styles.h2, styles.subsection)}>
                UX — Ресерч
              </h2>
              <span>Бенчмаркинг</span>
              <span>Юзабилити-тесты</span>
              <span>Глубинные интервью</span>
              <span>Этнография</span>
              <span>CJM</span>
              <span>JBTD</span>
              <span>User Flow</span>
            </div>
          </div>
          <div className={styles.grid2} />
          <div className={clsx(styles.grid6, styles.job)}>
            <img
              src="/images/home/research.avif"
              width="100%"
              alt="Исследования"
            />
            <p>
              <Typograph>
                Проводила анализ конкурентов, глубинки, юзабилити тесты,
                презентовала результаты. Проектировала User Flow, а JTBD — база!
              </Typograph>
            </p>
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.secondColor)}>[03]</div>
          <div className={styles.grid5}>
            <div className={styles.commonSectionBlock}>
              <h2 className={clsx(styles.h2, styles.subsection)}>
                <Typograph>Карьерный путь</Typograph>
              </h2>
              <div className={styles.commonSectionBlock}>
                <span className={styles.commonSectionSchool}>Kalitniki</span>
                <span className={styles.commonSectionName}>
                  UX/UI/Product Designer
                </span>
                <span className={styles.commonSectionDate}>2024 — н.в.</span>
              </div>
              <div className={styles.commonSectionBlock}>
                <span className={styles.commonSectionSchool}>
                  Студия Макс TI
                </span>
                <span className={styles.commonSectionName}>
                  UX/UI/Product Designer
                </span>
                <span className={styles.commonSectionDate}>2021 — 2024</span>
              </div>
              <div className={styles.commonSectionBlock}>
                <span className={styles.commonSectionSchool}>
                  Центр Красоты
                </span>
                <span className={styles.commonSectionName}>
                  Founder / управление
                </span>
                <span className={styles.commonSectionDate}>2008 — 2021</span>
              </div>
            </div>
          </div>
          <div className={styles.grid2} />
          <div className={clsx(styles.grid6, styles.job)}>
            <img
              src="/images/home/career.avif"
              width="100%"
              alt="На вручении диплома в Британке"
            />
            <p>
              <Typograph>
                Большой бэкграунд в управлении помогает мне эффективно работать
                в режиме многозадачности в командах разного уровня,
                анализировать, слышать бизнес и потребности пользователей
              </Typograph>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мои результаты по дизайну, качественным исследованиям, работе с
                фреймворками
              </Typograph>
            </h2>

            <img src="/images/home/bri3.avif" width="100%" alt="Британка" />
          </div>
        </div>
        <div
          className={clsx(
            styles.pageGrid,
            styles.commonSection,
            styles.summaryStages,
            styles.job
          )}
        >
          <div className={styles.grid5} />

          <div className={styles.grid5}>
            <Typograph>
              Верю, что качественного UI не получится без UX. Поэтому люблю,
              когда удобно и красиво)
            </Typograph>
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid4}>
            <div className={styles.summaryDigits}>120+</div>
            <span className={styles.commonSectionSchool}>
              <Typograph>Экранов в дизайне сделано</Typograph>
            </span>
          </div>
          <div className={styles.grid2} />
          <div className={styles.grid2}>
            <div className={styles.summaryDigits}>5</div>
            <span className={styles.commonSectionSchool}>
              <Typograph>Проектов завершено</Typograph>
            </span>
          </div>
          <div className={styles.grid1} />
          <div className={clsx(styles.grid4, styles.researchDone)}>
            <span style={{ width: "min-content" }}>
              <div className={styles.summaryDigits}>70+</div>
              <span className={styles.commonSectionSchool}>
                <Typograph>Исследований проведено</Typograph>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                У вас есть вопрос, невероятная идея или предложение? Пишите в
              </Typograph>{" "}
              <a
                href="https://t.me/NatalyMane"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.link, styles.dark)}
              >
                телеграм
              </a>{" "}
              или на{" "}
              <a
                href="mailto:manatkina@mail.ru"
                className={clsx(styles.link, styles.dark)}
              >
                почту
              </a>{" "}
              — обсудим)
            </h2>
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid4}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
          <div className={styles.grid5}>
            <Typograph>
              Сейчас я ментор в BHSAD, помогаю дизайнерам на разных этапах их
              роста,
            </Typograph>{" "}
            <span className={styles.secondColor}>
              <Typograph>
                для меня это захватывающий опыт и новый скилл
              </Typograph>
            </span>
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid9}>
            <p>
              <Typograph>
                С отличием закончила две годовых программы в Британке: основы
                графдизайна и UX/UI. Вошла в профессию как веб-дизайнер и SMM.
                Следующая работа была в студии, где я начала с проектирования и
                дизайна мобильного приложения — это был невероятный опыт! В
                процессе я углубилась в UX/UI, и сейчас активно использую
                исследования и фреймворки)
              </Typograph>
            </p>
          </div>{" "}
          <div className={styles.grid11} />
          <div className={styles.grid7}>
            <p>
              <Typograph>
                Мне нравится работать в команде и фокусироваться на создании
                функционального и визуального цифрового опыта, сочетать
                креативность с аналитикой!
              </Typograph>
            </p>
            <p>
              <Typograph>
                Вне работы я увлечена спортивным плаванием и катанием на
                сноуборде. Без ума от путешествий, вкусного кофе и своего
                маленького песика по кличке
              </Typograph>{" "}
              Веня{" "}🐾
            </p>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid13} style={{ marginTop: "5vh" }}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>Остаемся на связи!</Typograph>
            </h2>
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid13}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.contactSections}>[Telegram]</span>
              <span>
                <a
                  href="https://t.me/NatalyMane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @NatalyMane
                </a>
              </span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.contactSections}>[Email]</span>
              <span>
                <a href="mailto:manatkina@mail.ru" className={styles.link}>
                  manatkina@mail.ru
                </a>
              </span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.contactSections}>[CV]</span>
              <span>
                <a
                  href="/Manatkina_Natalia__Product_Designer.pdf"
                  className={styles.link}
                  download
                >
                  Скачать резюме в PDF
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "content", title: "Интро" },
          { id: "projects", title: "Проекты" },
          { id: "feedback", title: "Отзывы" },
          { id: "education", title: "Образование" },
          { id: "job", title: "Опыт" },
          { id: "contacts", title: "Контакты" },
        ]}
      />
    </>
  );
}
