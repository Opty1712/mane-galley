"use client";
import { clsx } from "clsx";
import { useEffect } from "react";
import { BottomNav, Typograph } from "../../../components";
import styles from "../../../styles.module.css";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="intro" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid14}>
            <h1 className={styles.h1}>Спорт на mos.ru</h1>
            <div className={styles.date}>Февраль — март 2024</div>
          </div>
          <div className={styles.grid3} />
          <div className={styles.grid2} />
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Интеграция сервисов Департамента спорта города Москвы в платформу
              MOS.RU
            </Typograph>
            <img src="/images/mos/teaser.webp" width="100%" alt="Спорт мем" />
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
            <h2 className={styles.h2}>Задача</h2>
            <span>
              <Typograph>
                Исследовать текущие сервисы Департамента спорта и показать, как
                их можно интегрировать на сайт mos.ru, привлечь и удержать
                пользователей, повысить удовлетворенность продуктом.
              </Typograph>
            </span>
          </div>
        </div>
      </section>

      <section id="steps" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
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
              <p>
                <Typograph>
                  Работала в команде из 5 человек. Это был мой самый душевный
                  проект и синергия между членами команды. Проводила кабинетные
                  и качественные исследования: глубинки, JBTD,
                  юзабилити-тестирования. Составляла и проверяла гипотезы,
                  генерила идеи совместно с командой, приоритизировала джобы,
                  определяла триггеры и барьеры аудитории)
                </Typograph>
              </p>
              <img
                src="/images/mos/mos9.webp"
                width="100%"
                alt="Наша команда"
              />
            </span>
          </div>
          <div className={styles.grid6} />
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span>
              <div className={styles.projectSubHeader}>[Процесс работы]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Встреча со стейкхолдером, снятие брифа, понимание задачи и
                    цели проекта
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Трендвотчинг, бенчмарк анализ. Выделила сервис Russia
                    Running: быстрая регистрация, поощрение баллами и подарками,
                    удобные фильтры, все мероприятия на одной платформе
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Определила выборку для глубинных интервью: тренера, бывшие
                    спортсмены, люди, активно занимающиеся спортом, люди,
                    которые пользуются сервисами mos.ru
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Провела 25 глубинных интервью, 7 из них интервью с людьми с
                    ОВЗ. Сегментировала аудиторию: командники, достигаторы,
                    викинги
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Выявила потребности и боли сегментов, приоритизировала JTBD
                    вместе с командой
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Провела юзабилити-тестирование основных существующих флоу
                    спортивного раздела на mos.ru
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Провела аналитику 14 лэндингов и 5 сайтов Москомспорта.
                    Нашла повторяющиеся разделы, выявила, что некоторые разделы
                    Мокомспорта ведут на mos.ru, а это значит, что интеграция
                    сервисов Москомспорта с платформой mos.ru уже существует и
                    будет проще перевести на mos.ru другие разделы с точки
                    зрения разработки. Все это привело к идее создания
                    полноценного спортивного раздела на mos.ru.
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Cтруктурировала информацию с 19 сайтов Москомспорта, учла
                    результаты исследований и спроектировала главный экран
                    спортивного раздела
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Были сложности с навигацией на главной странице раздела,
                    поэтому главная страница собиралась в 3 итерации с
                    промежуточными юзабилити-тестированиями
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Так же были собраны прототипы и проведены ЮТ по трём флоу:
                    поиск спортивной площадки, поиск напарника и поиск тренера
                  </Typograph>
                </li>
                <li>
                  <Typograph>Работала над текстом и структурой питча</Typograph>
                </li>
                <li>
                  <Typograph>Выступала на защите проекта</Typograph>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={styles.pageGrid}>
          <div className={styles.grid5} />
          <div className={styles.grid9}>
            <h2 className={styles.h2}>Исследования</h2>
            <img src="/images/mos/mos2.webp" width="100%" alt="Исследования" />
          </div>
          <div className={styles.grid1} />
          <div
            className={styles.grid9}
            style={{ marginTop: "2vh", alignSelf: "end" }}
          >
            <img
              src="/images/mos/mos3.webp"
              width="100%"
              alt="Банчмарк, конкуренты"
            />
          </div>
          <div className={styles.grid5} />
          <div className={styles.grid9} style={{ marginTop: "2vh" }}>
            <img src="/images/mos/mos4.webp" width="100%" alt="Тренды" />
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid9} style={{ marginTop: "2vh" }}>
            <img
              src="/images/mos/mos5.webp"
              width="100%"
              alt="Боли пользователей"
            />
          </div>
        </div>
      </section>

      <section id="seagments" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Сегменты</h2>
            <span>
              <div className={styles.projectSubHeader}>[Достигаторы]</div>
              <Typograph>
                Любят соревнование с самим собой и с другими. Следят за
                прогрессом своих достижений. Часто участвуют в городских
                меропиятиях: забегах, веломарафонах, в активной лыжне. Любят
                копить баллы за участие. Хранят экипировку на память внукам🥇
              </Typograph>
              <img src="/images/mos/mos7.webp" width="100%" alt="Достигаторы" />
            </span>
          </div>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span>
              <div className={styles.projectSubHeader}>[Командники]</div>
              <Typograph>
                Это люди, которые занимаются командным видом спорта. Для них
                команда — большая семья, где все другу помогают⚽️
              </Typograph>
              <img src="/images/mos/mos6.webp" width="100%" alt="Командники" />
            </span>
          </div>
          <div className={styles.grid6} />
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span>
              <div className={styles.projectSubHeader}>[Викинги]</div>
              <Typograph>
                Люди с ограниченными возможностями, дети, бывшие спортсмены
                инвалиды. Для них спорт — это спасение и возможность заработать,
                если будешь включен в сборную по адаптивному спорту
              </Typograph>
              <img src="/images/mos/mos8.webp" width="100%" alt="Викинги" />
            </span>
          </div>
        </div>
      </section>

      <section id="pictures" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid19, styles.photoBlocks)}>
            <h2 className={styles.h2}>Макет</h2>
            <img src="/images/mos/mos11.webp" width="100%" alt="Mos.ru Спорт" />
          </div>
        </div>
      </section>

      <section id="final" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Результат</h2>
            <span>
              <p>
                <Typograph>
                  На защите проектов наша команда заняла 2-ое место, после этого
                  мы выступили в Правительстве Москвы, а артефакты нашей работы
                  взяты в работу!
                </Typograph>
              </p>
              <img
                src="/images/mos/mos10.webp"
                width="100%"
                alt="Наша команда"
              />
            </span>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача" },
          { id: "steps", title: "Этапы" },
          { id: "research", title: "Исследования" },
          { id: "seagments", title: "Сегменты" },
          { id: "pictures", title: "Макеты" },
          { id: "final", title: "Результат" },
        ]}
      />
    </>
  );
}
