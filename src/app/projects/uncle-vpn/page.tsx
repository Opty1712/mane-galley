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
            <h1 className={styles.h1}>Uncle VPN</h1>
            <div className={styles.date}>Март 2023 — Ноябрь 2024</div>
          </div>
          <div className={styles.grid3} />
          <div className={clsx(styles.grid2, styles.stores)}>
            <a
              href="https://apps.apple.com/ru/app/uncle-vpn-%D0%B2%D0%BF%D0%BD-%D0%B8-%D0%BF%D1%80%D0%BE%D0%BA%D1%81%D0%B8-%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80/id6450554876"
              target="_ blank"
              rel="noopener noreferrer"
              title="Скачать в AppStore"
            >
              <img
                src="/icons/appstore.svg"
                width="100%"
                alt="Скачать в AppStore"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=mt.vpn.android.app&hl=ru_RU"
              target="_ blank"
              rel="noopener noreferrer"
              title="Скачать в Google Play"
            >
              <img
                src="/icons/googleplay.svg"
                width="100%"
                alt="Скачать в Google Play"
              />
            </a>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Сервис по предоставлению безопасного подключения к сети интернет
              через VPN
            </Typograph>
            <p>
              <img src="/images/uncle/teaser.webp" width="100%" alt="VPN мем" />
            </p>
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
              <div className={styles.projectSubHeader}>[Бизнес-задача]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Спроектировать максимально удобное VPN-приложение с платной
                    подпиской, которое будет привлекать новых пользователей и
                    удерживать постоянных
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Создать архитектуру главного экрана, которая позволит
                    пользователю быстро и удобно подключаться к VPN, находить
                    данные о текущей подписке и продлевать ее на новый период
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    На старте выпустить MVP-версию, а при успешном запуске
                    развивать продукт
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Приложение должно привлекать уникальных пользователей,
                    отличаться о конкурентов на рынке, быть в стиле фильма
                    «Матрица»
                  </Typograph>
                </li>
              </ul>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Цель]</div>
              <Typograph>
                Перевести аудиторию на платные подписки и увеличить количество
                покупок VPN-сервиса. Повысить виральность продукта, расширить
                клиентскую базу, вывести сервис в прибыль.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Миссия]</div>
              <Typograph>
                Сделать для пользователя опыт взаимодействия с VPN простым и
                эстетичным. Создать сервис с максимально быстрым подключением к
                VPN и отсутствием рекламы, с большим выбором серверов по всему
                миру.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Целевая аудитория]</div>
              <Typograph>
                IT-специалисты, подростки, молодые мамы, молодые люди, возраст
                16 — 30 лет. Используют приложения для работы, просмотра и
                общения в соцсетях, стриминга. В целях экономии в путешествиях
                при бронировании отелей и авто
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
                  Я работала продуктовым дизайнером, проводила интервью,
                  юзабилити-тесты, выдвигала гипотезы. Совместно с командой
                  генерила идеи, внедрение новых фичей, прорабатывала
                  архитектуру главного экрана. Ну и, конечно, делала UI, новую
                  дизайн-систему и фирменный стиль с нуля👩🏻‍💻 Это было мое первое
                  мобильное приложение)
                </Typograph>
              </p>

              <p>
                <Typograph>
                  Когда Uncle VPN успешно прошел в App Store и Google Play,
                  команда доверила мне дальнейшее развитие продуктового дизайна
                  приложения.
                </Typograph>
              </p>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Процесс работы]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Коммуникация с заказчиком, понимание задачи, снятие брифа
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Исследования: анализ конкурентов, ЦА, количественный опрос,
                    глубинные интервью, бенчмарки, JBTD, гипотезы
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Думаем с командой над функциями, фичами и нашими
                    преимуществами, обсуждаем результаты исследований. Понимаем,
                    как будем решать проблемы пользователей.
                  </Typograph>
                </li>
                <li>
                  <Typograph>User Flow</Typograph>
                </li>
                <li>
                  <Typograph>Wireframe</Typograph>
                </li>

                <li>
                  <Typograph>Проектирование главного экрана</Typograph>
                </li>
                <li>
                  <Typograph>Рисую фирменный стиль, логотипы</Typograph>
                </li>
                <li>
                  <Typograph>Создаю дизайн-систему, UI-kit</Typograph>
                </li>
                <li>
                  <Typograph>Делаю копирайт всего приложения</Typograph>
                </li>
                <li>
                  <Typograph>Рисую макеты</Typograph>
                </li>
                <li>
                  <Typograph>
                    Дизайню баннеры для App Store и Google Play, создала
                  </Typograph>{" "}
                  <a
                    href="https://app.spline.design/file/538e74fd-a3d2-4112-aeaf-992db0f8ec53"
                    target="_ blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    title="Посмотреть макет в Spline"
                  >
                    <Typograph>3D макет планшета для этого в Spline</Typograph>{" "}
                    <img
                      src="/icons/link.svg"
                      width={13}
                      height={13}
                      alt="Ссылка на макет"
                    />
                  </a>
                </li>
                <li>
                  <Typograph>
                    Провожу 3 модерируемых юзабилити-тестирования новых экранов
                  </Typograph>
                </li>
                <li>
                  <Typograph>Вношу правки в макеты</Typograph>
                </li>
                <li>
                  <Typograph>
                    Презентую и защищаю дизайн-решения перед командой и
                    заказчиком
                  </Typograph>
                </li>
                <li>
                  <Typograph>Передаю экраны в разработку</Typograph>
                </li>
                <li>
                  <Typograph>Делаю дизайн-ревью на тестовом борде</Typograph>
                </li>
                <li>
                  <Typograph>
                    После запука MVP-версии проектирую новые сценарии, работаю
                    над фичами, потребностями пользователей с учетом требований
                    бизнеса
                  </Typograph>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid13,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Исследования</h2>
            <span>
              Провела конкурентный анализ, определила преимущества и недостатки
              VPN-сервисов, посмотрела их фичи. Выделила VPN-сервисы: Warp+,
              OKO, ADGUARD, Nord и 4ebur.net.
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Warp+]</div>
              <Typograph>
                Нет онбординга, максимально быстрый вход, нет формы регистрации.
                Неперегруженный экран подключения, есть все необходимые функции
                на главном экране. Есть реферальная программа. Особенно
                понравился главный экран и кнопка подключения — привлекает
                внимание, побуждает к действию. В приложении понятный,
                разъясняющий копирайт. Не понравился стиль и цветовая гамма
                приложения, нет ассоциации с софт-продуктом.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[ОКО VPN]</div>
              <Typograph>
                Оценила архитектуру главного экрана, особенно верхний баннер,
                где можно разместить полезную информацию. Еще понравилось
                расположение поля выбора стран, удобно будет выбирать сервера
                большим пальцем руки и не тратить время на лишние скроллы. Не
                понравился экран с настройками — сложный с лишним функционалом.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[ADGUARD VPN]</div>
              <Typograph>
                Понравился UI, есть свой стиль и метафора. Функциональный и
                понятный экран с подписками: цены, периоды, акценты на скидках.
                Понравился Tone of Voice и цепляющий онбординг с преимуществами
                сервиса. Форма регистрации отправляет на сайт, много входных
                экранов при открытии приложения в первый раз — все это усложняет
                путь пользователя и удлиняет скорость входа до целевой кнопки
                подключения.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Nord VPN]</div>
              <Typograph>
                Удобная и понятная форма регистрации, есть 7 дней триала, и это
                очень полезная фича, она дает возможность познакомиться с
                качеством сервиса для долгосрочного пользования продуктом.
                Неудобный выбор стран, много лишней и отвлекающей информации.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[4ebur.net]</div>
              <Typograph>
                Понравился экран настроек, минимально и понятно. Удобный экран
                со странами, подсвечены страны в доступе и закрытые, быстро
                считывается информация, всё минималистично и понятно. Хорошая
                цветовая гамма. Понравился UX основных флоу, фича с QR-кодом. Из
                минусов — много рекламы.
              </Typograph>
            </span>
          </div>
        </div>
      </section>

      <section id="pictures" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div className={clsx(styles.grid19, styles.photoBlocks)}>
            <h2 className={styles.h2}>Макеты MVP</h2>
            <img src="/images/uncle/vpn1.webp" width="100%" alt="Uncle VPN" />
            <img src="/images/uncle/vpn2.webp" width="100%" alt="Uncle VPN" />
            <img src="/images/uncle/vpn3.webp" width="100%" alt="Uncle VPN" />
            <img src="/images/uncle/vpn4.webp" width="100%" alt="Uncle VPN" />
          </div>
        </div>
      </section>

      <section id="problems" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid8,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Проблемы и решения</h2>
            <span>
              <div className={styles.projectSubHeader}>
                [Боязнь регистрации]
              </div>
              <Typograph>
                Пользователи не готовы оставлять свои данные и следы о себе в
                форме регистрации в незнакомом сервисе VPN. После интеграции
                формы регистрации, конверсия на платформе IOS снизилась на 30%
              </Typograph>
              <Typograph>
                Провела 4 глубинных интервью. Выборка респондентов: 2
                пользователя Uncle VPN, 2 пользователя других VPN-сервисов.
                Причина снижения конверсии:
              </Typograph>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Люди не хотят регистрироваться и светить свои данные и
                    уходят в другие впн-сервисы, где нет регистрации. Когда
                    видят форму регистрации, то сразу покидают приложение.
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Людям не хватает периода триала для того, чтобы понять и
                    ознакомиться с преимуществами сервиса, из-за этого они не
                    доходят до целевого действия — оплаты подписки и не могут
                    поделиться с друзьями ощущениями о сервисе.
                  </Typograph>
                </li>
              </ul>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Решение]</div>
              <Typograph>
                Обсудили с командой выводы из исследований, после приняли
                решения:
              </Typograph>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Внедрить QR код в приложение, сохраняющий анонимность
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Придумать цепляющий копирайт для фичи с QR кодом
                  </Typograph>
                </li>
                <li>
                  <Typograph>Удалить регистрацию</Typograph>
                </li>
                <li>
                  <Typograph>Увеличить срок триала до 14 дней</Typograph>
                </li>
              </ul>
            </span>
          </div>
          <div className={styles.grid9} />
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid19,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <span style={{ marginTop: "2vh" }}>
              <div className={styles.projectSubHeader}>[Результаты]</div>
              <Typograph>
                После фичи резко выросло количество уникальных пользователей на
                IOS
              </Typograph>
              <img src="/images/uncle/vpn5.webp" width="100%" alt="Uncle VPN" />
            </span>
          </div>

          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid8,
              styles.projectCell,
              styles.projectDescription
            )}
            style={{ marginTop: "10vh" }}
          >
            <span>
              <div className={styles.projectSubHeader}>
                [Удержание пользователей]
              </div>
              <Typograph>
                Пользователи покупают подписки сроком на 1 или 3 месяца. А
                бизнесу нужно продать 200 годовых подписок, чтобы удержать
                постоянных пользователей внутри сервиса
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Решение]</div>
              <Typograph>
                Запустить новогоднюю акцию со скидками до 50%
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результаты]</div>
              <Typograph>
                Переход в наш сервис пользователей из других VPN: Satoshi, Nord
                и другие
              </Typograph>
            </span>
          </div>
          <div className={styles.grid5} />

          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid8,
              styles.projectCell,
              styles.projectDescription
            )}
            style={{ marginTop: "10vh" }}
          >
            <span>
              <div className={styles.projectSubHeader}>[Малая конверсия]</div>
              <Typograph>
                Пользователи не доходят до целевого действия — оплаты подписки,
                потому что не понимают, что нажав на кнопку «Подписаться», они
                попадут в оплату.
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Решение]</div>
              <Typograph>
                Переименование кнопки: «Подписаться» → «Оплатить»
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результаты]</div>
              <Typograph>
                Конверсия выросла на 20%, в два раза снизилось количество
                обращений пользователей в тех поддержку с вопросом «А как
                купить?»
              </Typograph>
            </span>
          </div>
          <div className={styles.grid11} />

          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid8,
              styles.projectCell,
              styles.projectDescription
            )}
            style={{ marginTop: "10vh" }}
          >
            <span>
              <div className={styles.projectSubHeader}>
                [Снижение MAU пользователей]
              </div>
              <Typograph>
                Пользователи перестали привлекать новую аудиторию
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Решение]</div>
              <Typograph>
                Чтобы повысить виральность продукта и лояльность пользователей к
                сервису, создали реферальную программу
              </Typograph>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Результаты]</div>
              <Typograph>Повышение MAU на 15% пользователей на iOS.</Typograph>
            </span>
          </div>
          <div className={styles.grid5} />
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <img src="/images/uncle/vpn6.webp" width="100%" alt="Uncle VPN" />
          </div>
        </div>

        <div className={styles.pageGrid}>
          <div className={styles.grid22} />
          <div className={clsx(styles.grid2, styles.stores)}>
            <a
              href="https://apps.apple.com/ru/app/uncle-vpn-%D0%B2%D0%BF%D0%BD-%D0%B8-%D0%BF%D1%80%D0%BE%D0%BA%D1%81%D0%B8-%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80/id6450554876"
              target="_ blank"
              rel="noopener noreferrer"
              title="Скачать в AppStore"
            >
              <img
                src="/icons/appstore.svg"
                width="100%"
                alt="Скачать в AppStore"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=mt.vpn.android.app&hl=ru_RU"
              target="_ blank"
              rel="noopener noreferrer"
              title="Скачать в Google Play"
            >
              <img
                src="/icons/googleplay.svg"
                width="100%"
                alt="Скачать в Google Play"
              />
            </a>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача" },
          { id: "steps", title: "Этапы" },
          { id: "research", title: "Исследования" },
          { id: "pictures", title: "Макеты MVP" },
          { id: "problems", title: "Проблемы и фичи" },
        ]}
      />
    </>
  );
}
/**
 * обложка
 * задача-проблема
 * этапы работы
 * обоснование - общение с юзерами
 * гипотезы
 * флоу
 * макеты
 * юкс-тесты
 * финальные макеты
 * контакты
 *
 * не хватает опросов и результатов с инсайтами
 */
