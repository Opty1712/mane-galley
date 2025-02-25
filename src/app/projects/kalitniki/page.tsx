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
            <h1 className={styles.h1}>Калитники</h1>
            <div className={styles.date}>Апрель 2023 — Февраль 2025</div>
          </div>
        </div>
        <div className={styles.pageGrid}>
          <div className={styles.grid11} />
          <div className={clsx(styles.intro, styles.grid8)}>
            <Typograph>
              Калитниковские бани — популярный банный комплекс в центре Москвы
            </Typograph>
            <p>
              <img
                src="/images/kalitniki/teaser.avif"
                width="100%"
                alt="Баня мем"
              />
            </p>
          </div>
        </div>
      </section>

      <section id="task" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
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
                  <Typograph>Увеличить посещаемость</Typograph>
                </li>
                <li>
                  <Typograph>Загрузить непопулярные часы работы</Typograph>
                </li>
                <li>
                  <Typograph>
                    Уменьшить нагрузку на сотрудников за счет цифровизации
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Сделать полный ребрендинг, включая цифровые и
                    оффлайн-продукты
                  </Typograph>
                </li>
                <li>
                  <Typograph>Продать больше дополнительных услуг</Typograph>
                </li>
              </ul>
            </span>

            <span>
              <div className={styles.projectSubHeader}>[Цель]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>Увеличить выручку</Typograph>
                </li>
                <li>
                  <Typograph>Сократить расходы на сотрудников</Typograph>
                </li>
                <li>
                  <Typograph>Привлечь новых посетителей</Typograph>
                </li>
                <li>
                  <Typograph>
                    Сделать загрузку бань более равномерной в течение дня
                  </Typograph>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section id="steps" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
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
                  Я работала продуктовым дизайнером, по факту совмещая
                  обязанности менеджера проекта, не только проводя исследования,
                  на основе которых рождались прототипы и дизайн, но и
                  организовывала фотосессии, договаривалась об апгрейде
                  оборудования, организовывала созвоны с сотрудниками бани и не
                  только...
                </Typograph>
              </p>
            </span>
            <span>
              <div className={styles.projectSubHeader}>[Процесс работы]</div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Общение с ЛПР, понимание потребностей и болей бизнеса
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Проведение интервью с сотрудниками, от уборщиц до
                    администраторов
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Изучаю сайты конкурентов, отправляю «тайных покупателей» в
                    другие заведения
                  </Typograph>
                </li>
                <li>
                  <Typograph>Анализирую отзывы клиентов</Typograph>
                </li>
                <li>
                  <Typograph>
                    Провожу глубинные и количественные исследования с
                    посетителями
                  </Typograph>
                </li>

                <li>
                  <Typograph>
                    Вникаю в рутинный процесс с точки зрения рядовых
                    сотрудников, какими программами пользуются, как много
                    разговаривают по телефону, и по каким еще каналам они
                    коммуницируют с клиентами
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Готовлю презентацию с описанием «как сейчас», привожу
                    статистику и некоторые метрики, показываю видение, что и как
                    можно изменить и что это даст в конце проекта. Выступаю с
                    ней перед кругом заинтересованных лиц, защищаю решения, по
                    результатам совместно определяем приоритеты и строим планы
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Раскапываю, что необходимо апгрейдить оборудование и
                    покупать новый софт, поэтому организую встречу с
                    интегратором, на которой договариваемся об условиях
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Учитывая технические сложности, решаем разбить работу на
                    этапы: сначала переделываем сайт, затем внедряем
                    онлайн-процессы и переходим к цифровизации
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Договариваюсь с фотографом, ставлю задание, помогаю провести
                    фотосессию, всего было сделано три итерации, получилось 1200
                    фото
                  </Typograph>
                </li>
                <li>
                  <Typograph>Проектирую CJM, JTBD, User FLow</Typograph>
                </li>
                <li>
                  <Typograph>
                    По результатам исследований создаю новые экраны для десктопа
                    и адаптива, попутно занимаясь ребрендингом - логотип, цвета,
                    шрифты, гайдлайны
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Пишу копирайт для сайта, утверждаю его и дизайн с ЛПР
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Провожу ЮТ, по результатам вношу изменения в макеты
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    Ставлю задачу программисту на разработку сайта, провожу
                    дизайн-ревью
                  </Typograph>
                </li>
                <li>
                  <Typograph>
                    На текущий момент я как раз здесь, в будущем дополню)
                  </Typograph>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project, styles.photos)}>
          <div className={styles.grid5} />
          <div
            className={clsx(
              styles.grid19,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Исследования</h2>
            <img
              src="/images/kalitniki/research1.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid5} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research2.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research3.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid5} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research4.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research5.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid5} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research6.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
          <div className={styles.grid1} />
          <div className={styles.grid9}>
            <img
              src="/images/kalitniki/research7.avif"
              width="100%"
              alt="Исследования"
            />
          </div>
        </div>
      </section>

      <section id="final" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid11} />
          <div
            className={clsx(
              styles.grid9,
              styles.projectCell,
              styles.projectDescription
            )}
          >
            <h2 className={styles.h2}>Результаты</h2>
            <span>
              <div className={styles.projectSubHeader}>
                [Решения нижнего уровня]
              </div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>
                    Внедрить абонементы по сниженной цене с покупкой через сайт.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Поднимет воронку продаж и привяжет посетителей к сайту,
                      где будет вся информация с указанием способа связи через
                      чат. Абонемент позволит клиенту максимально быстро
                      получить обслуживание в бане без очередей с минимальным
                      общением.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Сделать удобный паркинг для клиентов и разместить информацию
                    на сайте.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Повысит рейтинг бани, в том числе на Яндекс Картах.
                      Бесплатный паркинг повысит количество посетителей.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Сделать акцию «Приведи друга»</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит повысить посещаемость в дневные часы. Привлечет
                      новых клиентов, мотивирует к посещению бани в
                      утренние/дневные часы.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Сделать на сайте уведомление о днях для пенсионеров.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит разделить потоки молодых и пожилых, решит
                      ситуацию с «дедовщиной» на полках, повысит рейтинг бани в
                      глазах новых и постоянных клиентов, ведь руководство
                      внимательно к деталям и комфорту посетителей.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Уведомить клиентов о том, что в женские дни работает
                    парильщик мужчина. Захватите купальник!
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Об этом нам рассказала клиентка Калитников, мол ее муж
                      волнуется и ей было бы комфортнее быть в парилке в
                      купальнике, но объявления о мужчине парильщике на сайте и
                      при входе нет. Нужно соответствовать времени и сделать
                      пребывание клиента максимально комфортным.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Сделать на сайте разделы: «Правила посещения бани»,
                    «Вопросы и ответы».
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит соответствовать трендам в банной культуре,
                      сократит клиенту время на поиск информации, разгрузит
                      менеджеров.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Сделать на сайте расписание парений.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит привлечь новых клиентов, предоставив информацию о
                      видах пара и времени парений. Здесь будет работать паттерн
                      на ассоциацию о том, что в бане всегда свежий и хороший
                      пар, что сотрудники заботятся и готовят свежий пар каждые
                      40 минут.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Разместить на сайте инфографику преимуществ Калитников.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит клиенту быстро считать важную информацию, а бане
                      прорекламировать свои услуги, подсветив потребности
                      клиента в простых элементах.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Уведомить клиентов о жаркой парилке по субботам в МР.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Повысит трафик в ВМР по субботам и сделает посещение бани
                      комфортным для новых клиентов или тех, кто не любит жаркий
                      пар.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Сделать на сайте статус загруженности и статистику
                    посещаемости бани.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит клиенту смотреть заполненность бани, упростит
                      принятие решения, в какие дни/часы комфортно посетить
                      баню. Не требует от клиента особых усилий и предоставляет
                      максимум информации. Способ позволит задержать
                      пользователя на сайте, предложив допуслуги. Активные
                      состояния на сайте соответствуют ожиданиям пользователя и
                      рынку, а также решают задачу распределения трафика
                      днем/вечером.
                    </Typograph>
                  </span>
                </li>
              </ul>
            </span>

            <img
              src="/images/kalitniki/ready.avif"
              width="100%"
              alt="Исследования"
            />

            <span>
              <div className={styles.projectSubHeader}>
                [Решения верхнего уровня]
              </div>
              <ul className={styles.projectNumber}>
                <li>
                  <Typograph>Внедрить онлайн-бронирование.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Упростит сервис для клиента. Для людей это удобно, быстро
                      и привычно. Это позволит поднять бренд Калитников на
                      современный уровень.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Интегрировать запись через Яндекс Карты.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Быстрая воронка для продажи услуг. Это сейчас
                      востребованно и удобно для посетителя. Пример:
                      Воронцовские бани.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Развить карточку комплекса в Яндексе.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Пользователь смотрит на рейтинг, ему удобно бронировать
                      через Яндекс и смотреть информацию о бане. Карточка в
                      Яндекс быстро приведет пользователя из точки А в точку Б.
                      Яндекс проверяет компании и является гарантом качества и
                      доверия юзеров.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Внедрить оплату по QR-коду в режимах онлайн и офлайн.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит клиенту не стоять в очереди на оплату после бани.
                      Людям это удобно и быстро. Оплата по QR-коду идет через
                      Систему быстрых платежей (СБП), в которой комиссия ниже:
                      0.4 - 0.7% против обычных 1 - 3% за эквайринг.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Создать чат в Telegram.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      В WhatsApp есть ограничения на группы - до 512 человек.
                      Telegram не имеет этого ограничения, поддерживает
                      анонимность данных пользователя, ведь 40% клиентов не
                      хотят оставлять свои контакты.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Снимать метрики на сайте.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит эффективно запустить таргет и развить его в
                      Яндекс картах и Telegram канале, а также структурировать
                      страницы сайта на основе аналитики данных. Все это
                      поднимет воронку по конкретным позициям.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>
                    Запустить скидку за отзыв в Яндекс Картах.
                  </Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      Позволит привлечь новую аудиторию, что повысит рейтинг
                      бани, сделает активной карточку в Яндекс Картах.
                    </Typograph>
                  </span>
                </li>
                <li>
                  <Typograph>Сделать мобильное приложение.</Typograph>
                  <br />
                  <span className={styles.secondColor}>
                    <Typograph>
                      В нем будет легко и удобно будет забронировать столики и
                      допуслуги, произвести оплату, узнать загрузку бани,
                      текущие акции. Быть на связи с баней в интерактивном
                      формате.
                    </Typograph>
                  </span>
                </li>
              </ul>
            </span>

            <img
              src="/images/kalitniki/concept.avif"
              width="100%"
              alt="Исследования"
            />

            <span>
              <div className={styles.projectSubHeader}>
                [Концептуальное видение]
              </div>

              <p>
                <Typograph>
                  У Василия постоянно не хватает ни на что времени, он не любит
                  разговоры по телефону, зато любит, когда можно все
                  организовать онлайн. Василий решает сходить с другом в баню,
                  они давно не виделись, а оба любят попариться. Что выбирает
                  Василий? Конечно, Калитники, потому что он заходит на сайт или
                  в мобильное приложение, где за минуту, проделав всего
                  несколько шагов, он получает продукт и вечер под ключ:
                </Typograph>
                <ul className={styles.projectNumber}>
                  <li>
                    <Typograph>Выбирает уютный столик по схеме зала</Typograph>
                  </li>
                  <li>
                    <Typograph>
                      Смотрит расписание парений и решает, что самый кайф - это
                      придти в 19.15
                    </Typograph>
                  </li>
                  <li>
                    <Typograph>
                      Он заходит в меню и к этому времени выбирает свежее пиво,
                      креветки и барабульку. А к 19.45 — еще пару пива и шашлык!
                    </Typograph>
                  </li>
                  <li>
                    <Typograph>
                      Заглядывает в раздел парений и бронирует банные процедуры
                    </Typograph>
                  </li>
                  <li>
                    <Typograph>
                      Так как домой он заехать не успеет, то покупает шапку и
                      арендует халат с тапочками
                    </Typograph>
                  </li>
                  <li>
                    <Typograph>
                      Сразу всё это оплачивает и получает QR-код
                    </Typograph>
                  </li>
                </ul>
              </p>
              <p>
                <Typograph>
                  Василий с другом заходит в 19.15 в баню, показывает QR-код на
                  входе, и сразу проходит к своему столику, где уже пенится
                  пиво, дымятся креветочки и лежит халат.
                </Typograph>
                <span className={styles.secondColor}>
                  {" "}
                  А через час его позовет банщик на контрастное парение. Лёгкого
                  пара, Василий!
                </span>
              </p>
            </span>
          </div>
        </div>
      </section>

      <section id="design" className={styles.section}>
        <div className={clsx(styles.pageGrid, styles.project)}>
          <div className={styles.grid5} />
          <div className={styles.grid19}>
            <h2 className={styles.h2}>Дизайн</h2>
            <div className={styles.projectSubHeader}>[Дизайн система]</div>
            <p>
              <img
                src="/images/kalitniki/ds.avif"
                width="100%"
                alt="Дизайн система"
              />
            </p>
            <p>
              <div className={styles.projectSubHeader}>[UI-kit]</div>
            </p>
            <p>
              <img
                src="/images/kalitniki/ui-kit.avif"
                width="100%"
                alt="UI-kit"
              />
            </p>
            <p>
              <div className={styles.projectSubHeader}>[Макет]</div>
            </p>
            <p>
              <img
                src="/images/kalitniki/kalitniki1.avif"
                width="100%"
                alt="Макет Калитников"
              />
            </p>
          </div>
        </div>
      </section>

      <BottomNav
        sections={[
          { id: "intro", title: "Интро" },
          { id: "task", title: "Задача" },
          { id: "steps", title: "Этапы" },
          { id: "research", title: "Исследования" },
          { id: "final", title: "Результаты" },
          { id: "design", title: "Дизайн" },
        ]}
      />
    </>
  );
}
