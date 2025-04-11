"use client";
import { clsx } from "clsx";
import { Link, useTransitionRouter } from "next-view-transitions";

import {
  BottomNav,
  PortfolioLink,
  ScrollingProject,
  Typograph,
} from "../components";
import styles from "../styles.module.css";
import { checkIsMobile, getProject } from "../utils";

export default function Home() {
  const { push } = useTransitionRouter();
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
            <Link
              href={`/about`}
              className={clsx(styles.scrollDown, styles.aboutLink)}
            >
              Обо мне →
            </Link>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid17} />
          <div className={clsx(styles.intro, styles.grid7)}>
            <PortfolioLink />
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
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
              styles.grid5,
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
          <div className={styles.grid1} />
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
              styles.grid5,
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

          <div className={styles.grid1} />
          <div className={styles.grid7}>
            <span>
              <img
                src="/images/home/uncle.avif"
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
              styles.grid5,
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

          <div className={styles.grid1} />
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
              styles.grid5,
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

          <div className={styles.grid1} />
          <div className={styles.grid7}>
            <img
              src="/images/home/xcore1.avif"
              width="100%"
              alt="макет xCore VPN"
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
              styles.grid5,
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

          <div className={styles.grid1} />
          <div className={styles.grid7}>
            <img src="/images/home/supra.avif" width="100%" alt="Супра" />

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
              styles.grid5,
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

          <div className={styles.grid1} />
          <div className={styles.grid7}>
            <img src="/images/sber/sber1.webp" width="100%" alt="SberJazz" />
            <div style={{ marginTop: "1vh" }}>
              <Typograph>
                Проект под NDA, ссылки и скриншоты недоступны, подробнее
                расскажу на собеседовании
              </Typograph>
            </div>

            <Link
              href={`/projects/${getProject("SberJazz").slug}`}
              className={styles.projectLink}
            >
              Подробнее
            </Link>
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid13}>
            <div className={styles.commonSectionBlock}>
              <h2 className={styles.h2}>Контакты</h2>
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
          { id: "contacts", title: "Контакты" },
        ]}
      />
    </>
  );
}
