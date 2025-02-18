"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav, PortfolioLink, Typograph } from "../components";
import styles from "../styles.module.css";
import { checkIsMobile } from "../utils";

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
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid13)}>
            <p>
              <Typograph>
                Привет! Меня зовут Наталья, я — ментор в Британке и выпускница
                двух годовых курсов, среди которых курс UX/UI, на котором была
                одним из лучших студентов.
              </Typograph>
            </p>
            <p>
              <Typograph>
                Я занимаюсь созданием веб-сайтов и разработкой мобильных
                приложений для стартапов, среднего и крупного бизнеса, включая
                B2B и B2C-продукты. Спроектировала решения для mos.ru и Сбера.
                Создала новые продукты с нуля, цифровизовала оффлайн-бизнес.
                Занималась брендингом и ребрендингом, ресерчем, защищала решения
                перед стейкхолдерами.
              </Typograph>
            </p>
            <p>
              <Typograph>
                Мой опыт управления в бьюти-индустрии позволяет мне эффективно
                интегрировать бизнес-задачи в пользовательский путь, работать в
                многозадачном режиме и адаптироваться к разным командам ❤️
              </Typograph>
            </p>
            <PortfolioLink />
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        {/** UNCLE VPN */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/uncle-vpn")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/uncle-vpn">Uncle VPN</Link>
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
                src="/images/uncle/vpn_home.webp"
                width="100%"
                alt="макет Uncle VPN"
              />
              <Link href="/projects/uncle-vpn" className={styles.projectLink}>
                Подробнее
              </Link>
            </span>
          </div>
        </div>

        {/** Xcore Vpn  */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/x-core-vpn")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/x-core-vpn">xCore Client for X-Ray</Link>
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
                Сохранить аудиторию приложения Uncle VPN после блокировки в
                сторах РФ
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результат]</div>
              <ul className={styles.projectNumber}>
                <li>27 исследований</li>
                <li>Фирменный стиль</li>
                <li>Дизайн-система</li>
                <li>MVP за 7 дней</li>
              </ul>
            </span>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/xcore/xcore_home.webp"
              width="100%"
              alt="макет xCore VPN"
            />
            <Link href="/projects/x-core-vpn" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Mos.ru */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/mos-ru-sport")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/mos-ru-sport">Спорт на mos.ru</Link>
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
                Mos.ru — государственный сервис по оказанию услуг населению
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
            <img src="/images/mos/mos1.webp" width="100%" alt="Макет Mos.ru" />
            <Link href="/projects/mos-ru-sport" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Supra */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/supra")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/supra">Supra</Link>
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
            <img src="/images/supra/supra1.webp" width="100%" alt="Супра" />
            <Link href="/projects/supra" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** Kalitniki */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/kalitniki")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/kalitniki">Калитники</Link>
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
                Калитниковские бани — один из старейших банных комплексов в
                центре Москвы
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <Typograph>
                Усиленная итерационная цифровизация бизнеса с увеличением
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
              src="/images/kalitniki/kalitniki_home.webp"
              width="100%"
              alt="Калитники"
            />
            <Link href="/projects/kalitniki" className={styles.projectLink}>
              Подробнее
            </Link>
          </div>
        </div>

        {/** SberJazz */}
        <div
          className={clsx(styles.pageGrid, styles.project, styles.interactive)}
          title="Смотреть кейс"
          onClick={() => !isMobile && push("/projects/sber-jazz")}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6)}>
            <div className={styles.projectHeader}>
              <Link href="/projects/sber-jazz">SberJazz</Link>
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
            <img src="/images/sber/sber1.webp" width="100%" alt="SberJazz" />
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
            <img src="/images/home/bri1.webp" width="100%" alt="Британка" />
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
              <span className={styles.commonSectionSchool}>
                Британская высшая школа дизайна
              </span>
              <span className={styles.commonSectionName}>
                «Основы коммуникационного дизайна»
              </span>
              <span className={styles.commonSectionDate}>2021 — 2022</span>
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
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>
                Мой опыт работы в UX/UI — 3 года. Ранее управляла командами и
                процессами и развивала продукты в сфере бьюти-индустрии
              </Typograph>
            </h2>
          </div>
        </div>
        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid5} />
          <div className={styles.grid13}>
            <img
              src="/images/home/bri2.webp"
              width="100%"
              alt="Британка, команда"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={styles.grid6}>Hard skills:</div>
          <div className={styles.grid7} style={{ marginBottom: "6vh" }}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionName}>
                Adobe Illustrator, Photoshop, After Effects
              </span>
              <span className={styles.commonSectionName}>Figma</span>
              <span className={styles.commonSectionName}>Spline</span>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
            <img
              src="/images/home/bri2.webp"
              width="100%"
              alt="Британка, команда"
            />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid4}>Frameworks:</div>
          <div className={styles.grid8} style={{ marginBottom: "6vh" }}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionName}>JTBD</span>
              <span className={styles.commonSectionName}>CJM</span>
              <span className={styles.commonSectionName}>MindSet</span>
              <span className={styles.commonSectionName}>Userflow</span>
            </div>
          </div>
        </div>

        <div className={styles.pageGrid} style={{ marginBottom: "1vh" }}>
          <div className={styles.grid7} />
          <div className={styles.grid8}>
            <img
              src="/images/home/bri2.webp"
              width="100%"
              alt="Британка, команда"
            />
          </div>
        </div>
        <div
          className={clsx(styles.pageGrid, styles.commonSection)}
          style={{ marginBottom: "10vh" }}
        >
          <div className={styles.grid7} />
          <div className={styles.grid4}>Опыт работы:</div>
          <div className={styles.grid4}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>Kalitniki</span>
              <span className={styles.commonSectionName}>Product Designer</span>
              <span className={styles.commonSectionDate}>2023 — 2025</span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>Студия MaxT</span>
              <span className={styles.commonSectionName}>UX/UI Designer</span>
              <span className={styles.commonSectionDate}>2022 — 2024</span>
            </div>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>Центр Красоты</span>
              <span className={styles.commonSectionName}>
                Founder / управление
              </span>
              <span className={styles.commonSectionDate}>2000 — 2021</span>
            </div>
          </div>
        </div>
      </section>

      <section id="summary" className={styles.section}>
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
        <div
          className={clsx(
            styles.pageGrid,
            styles.commonSection,
            styles.summaryStages
          )}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.summaryDigits)}>130+</div>
          <div className={styles.grid6}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>
                <Typograph>Экранов задизайнено, плюс различные флоу:</Typograph>
              </span>
              <span className={styles.commonSectionName}>[Web]</span>
              <span className={styles.commonSectionDate}>23 экрана</span>
              <span className={styles.commonSectionName}>[Mobile]</span>
              <span className={styles.commonSectionDate}>114 экранов</span>
            </div>
          </div>
          <div className={styles.grid7}>
            <img src="/images/home/design.webp" width="100%" alt="Дизайн" />
          </div>
        </div>
        <div
          className={clsx(
            styles.pageGrid,
            styles.commonSection,
            styles.summaryStages
          )}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.summaryDigits)}>3</div>
          <div className={styles.grid6}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>
                <Typograph>Дизайн-систем разработано, среди них:</Typograph>
              </span>
              <span className={styles.commonSectionName}>[Лого]</span>
              <span className={styles.commonSectionDate}>15 вариантов</span>
              <span className={styles.commonSectionName}>[Ui-kit]</span>
              <span className={styles.commonSectionDate}>87 экранов</span>
            </div>
          </div>
          <div className={styles.grid7}>
            <img src="/images/home/ds.webp" width="100%" alt="Дизайн системы" />
          </div>
        </div>
        <div
          className={clsx(
            styles.pageGrid,
            styles.commonSection,
            styles.summaryStages
          )}
        >
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.summaryDigits)}>70+</div>
          <div className={styles.grid6}>
            <div className={styles.commonSectionBlock}>
              <span className={styles.commonSectionSchool}>
                <Typograph>Качественных исследований проведено:</Typograph>
              </span>
              <span className={styles.commonSectionName}>
                [Юзабилити-тесты]
              </span>
              <span className={styles.commonSectionDate}>38</span>
              <span className={styles.commonSectionName}>
                [Глубинные интервью]
              </span>
              <span className={styles.commonSectionDate}>18</span>
              <span className={styles.commonSectionName}>[Бенчмарки]</span>
              <span className={styles.commonSectionDate}>25</span>
            </div>
          </div>
          <div className={styles.grid7}>
            <img
              src="/images/home/research.webp"
              width="100%"
              alt="Исследования"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>Обсудим предложения и проекты?</Typograph>
            </h2>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid5}>
            <img
              src="/images/me_small.webp"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.grid9, styles.contactText)}>
            <Typograph>
              Рассматриваю предложения о работе и сотрудничестве в сфере
              продуктового дизайна. Открыта к новым возможностям, интересным
              проектам и командам, с которыми можно создать что-то по-настоящему
              ценное. Буду рада диалогу и взаимовыгодному сотрудничеству.
            </Typograph>
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid13} />
          <div className={clsx(styles.grid11, styles.contactText)}>
            <Typograph>
              Слушаю французский рэп, не могу без литра кофе с утра, катаюсь на
              сноуборде, плаваю в бассейне, делаю оригинальные кадры на телефон,
              глажу маленьких собачек 🐶
            </Typograph>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={styles.grid13} style={{ marginTop: "5vh" }}>
            <h2 className={clsx(styles.h2, styles.divider)}>
              <Typograph>Делаю удобно и красиво!</Typograph>
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
          { id: "summary", title: "Summary" },
          { id: "contacts", title: "Контакты" },
        ]}
      />
    </>
  );
}
