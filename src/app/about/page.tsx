"use client";
import { clsx } from "clsx";
import { BottomNav, PortfolioLink, Typograph } from "../../components";
import styles from "../../styles.module.css";

export default function Page() {
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
            <PortfolioLink text="Немного обо мне" section="feedback" />
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
        <div className={clsx(styles.pageGrid, styles.britanka)}>
          <div className={styles.grid5} />
          <div className={styles.grid13}>
            <img src="/images/home/bri1.avif" width="100%" alt="Британка" />
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid6, styles.mobileHidden)}>
            Мой любимый универ:)
          </div>
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
          <div className={styles.grid6}>[01]</div>
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
          <div className={styles.grid6}>[02]</div>
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
          <div className={styles.grid6}>[03]</div>
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
                телеграм или на почту — обсудим)
              </Typograph>
            </h2>
          </div>
        </div>
        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid4}>
            <img
              src="/images/home/me.avif"
              width="100%"
              alt="Наталья, продуктовый дизайнер"
            />
          </div>
          <div className={styles.grid4}>
            <Typograph>
              Сейчас я ментор в BHSAD, помогаю дизайнерам на разных этапах их
              роста,
            </Typograph>{" "}
            для{" "}меня{" "}
            <span className={styles.secondColor}>
              <Typograph>это захватывающий опыт и новый скилл</Typograph>
            </span>
          </div>
        </div>

        <div className={clsx(styles.pageGrid, styles.commonSection)}>
          <div className={styles.grid11} />
          <div className={styles.grid8}>
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
              </Typograph>
              Веня{" "}🐾
            </p>
          </div>
          <div className={styles.grid11} />
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
          { id: "feedback", title: "Отзывы" },
          { id: "education", title: "Образование" },
          { id: "job", title: "Опыт" },
          { id: "contacts", title: "Контакты" },
        ]}
      />
    </>
  );
}
