import MobileCall from "./mobile-call";

type Program = {
  title: string;
  summary: string;
  image: string;
  alt: string;
  category: string;
  use: string;
  imageClass?: string;
};

const programs: Program[] = [
  {
    title: "Флаг-шоу",
    summary: "Трюковые постановки, российский триколор, «Узоры России» и флаги с символикой заказчика.",
    image: "/media/event-flags.webp",
    alt: "Артисты Гардарики исполняют флаг-шоу в цветах России",
    category: "Открытие · финал",
    use: "Для государственных дат, спортивных событий, концертов, форумов и больших сцен.",
  },
  {
    title: "Огненное шоу",
    summary: "Динамичная постановка с огнём, спецэффектами и пиротехнической кульминацией.",
    image: "/media/event-fire.webp",
    alt: "Артист Гардарики во время огненного шоу",
    category: "Кульминация",
    use: "Для фестивалей, городских праздников, корпоративов и вечерних open-air мероприятий.",
  },
  {
    title: "Световое шоу",
    summary: "LED-костюмы, световая графика и синхронная хореография в современном сценическом формате.",
    image: "/media/event-led.webp",
    alt: "Артисты в светодиодных костюмах на сцене",
    category: "Сцена · indoor",
    use: "Для залов, презентаций, новогодних событий и площадок, где можно создать затемнение.",
  },
  {
    title: "Танцевальное шоу",
    summary: "Народная и современная хореография, вальс, ретро и тематические концертные номера.",
    image: "/media/gardarika-dance.png",
    alt: "Танцевальный номер творческого коллектива Гардарика",
    category: "Концертный блок",
    use: "Для официальных церемоний, концертов, фестивалей и корпоративных программ.",
    imageClass: "contain",
  },
  {
    title: "Джигитовка",
    summary: "Конное мастерство и эффектные трюки, объединённые в зрелищную историческую программу.",
    image: "/media/gardarika-horse.png",
    alt: "Конное выступление и джигитовка Гардарики",
    category: "Открытая площадка",
    use: "Для исторических фестивалей, парков, городских праздников и больших уличных площадок.",
    imageClass: "contain focus-top",
  },
  {
    title: "Оригинальный жанр",
    summary: "Воздушное кольцо, эквилибр и пластические номера с сильным визуальным образом.",
    image: "/media/gardarika-ring.png",
    alt: "Артистка Гардарики исполняет номер на воздушном кольце",
    category: "Визуальный акцент",
    use: "Для гала-ужинов, презентаций, концертных программ и камерных событий.",
    imageClass: "contain",
  },
  {
    title: "Фланкировка и фехтование",
    summary: "Сценическое владение шашкой и клинком — сольные и групповые постановки.",
    image: "/media/program-flanking.webp",
    alt: "Артисты Гардарики исполняют фланкировку с шашками",
    category: "История · драйв",
    use: "Для патриотических программ, исторических фестивалей и тематических праздников.",
  },
  {
    title: "Акробатическое шоу",
    summary: "Силовые элементы, трюковые связки и выразительная пластика в цельной постановке.",
    image: "/media/gardarika-acro.png",
    alt: "Акробатический номер творческого коллектива Гардарика",
    category: "Сильный номер",
    use: "Для больших сцен, церемоний, форумов и событий, которым нужен мощный визуальный эпизод.",
    imageClass: "contain",
  },
  {
    title: "Вокальный дуэт",
    summary: "Живое исполнение народной, ретро- и современной программы с хореографией.",
    image: "/media/gardarika-vocal.png",
    alt: "Вокалистки творческого коллектива Гардарика на сцене",
    category: "Живой звук",
    use: "Для встреч гостей, концертов, тематических вечеров и продолжительных программ с выходами.",
    imageClass: "contain",
  },
  {
    title: "Экстрим-шоу",
    summary: "Силовые и трюковые элементы, искры и энергия живого перформанса.",
    image: "/media/gardarika-sparks.png",
    alt: "Экстрим-шоу Гардарики с силовыми трюками и искрами",
    category: "Драйв · интерактив",
    use: "Для молодёжных событий, фестивалей, спортивных праздников и динамичных корпоративов.",
    imageClass: "contain",
  },
  {
    title: "Роллер-шоу",
    summary: "Скорость, танец и акробатика на роликовых коньках в действительно мобильном формате.",
    image: "/media/roller-show.webp",
    alt: "Артисты выполняют трюки во время роллер-шоу",
    category: "Скорость · движение",
    use: "Для спортивных событий, городских площадок, фестивалей и молодёжных программ.",
    imageClass: "contain",
  },
  {
    title: "Народные забавы",
    summary: "Игры, состязания и хороводы, которые превращают зрителей в участников события.",
    image: "/media/event-maslenitsa.webp",
    alt: "Народная интерактивная программа на Масленице",
    category: "Интерактив",
    use: "Для Масленицы, ярмарок, семейных фестивалей, тимбилдингов и народных гуляний.",
    imageClass: "focus-top",
  },
  {
    title: "Иммерсивное шоу",
    summary: "Артисты работают внутри пространства, развивают сюжет и вовлекают гостей в действие.",
    image: "/media/immersive-show.webp",
    alt: "Иммерсивное представление с артистами и участниками события",
    category: "Гость внутри сюжета",
    use: "Для презентаций, тематических вечеров, исторических маршрутов и нестандартных площадок.",
    imageClass: "contain",
  },
  {
    title: "Салюты и фейерверки",
    summary: "Финальный визуальный акцент, который синхронизируется с драматургией программы.",
    image: "/media/fireworks-show.webp",
    alt: "Профессиональный фейерверк над площадкой события",
    category: "Большой финал",
    use: "Для городских праздников, фестивалей, свадеб и масштабных частных событий.",
  },
];

const cases = [
  {
    title: "Открытие матча «Зенит» — «Спартак»",
    place: "Лукойл Арена",
    image: "/media/event-flags.webp",
    alt: "Флаг-шоу на большой спортивной арене",
  },
  {
    title: "Огненное шоу на HOST BIKE FEST",
    place: "Международный байкерский фестиваль",
    image: "/media/event-fire.webp",
    alt: "Огненное шоу на фестивальной площадке",
  },
  {
    title: "Юбилей Петербургского метрополитена",
    place: "БКЗ «Октябрьский»",
    image: "/media/gardarika-dance.png",
    alt: "Танцевальная программа Гардарики на концертной сцене",
    contain: true,
  },
  {
    title: "Новогоднее шоу в горном парке",
    place: "Рускеала · Карелия",
    image: "/media/program-newyear.webp",
    alt: "Новогодняя программа Гардарики",
  },
  {
    title: "Акробатическое шоу на ВДНХ",
    place: "«Выставочная Россия»",
    image: "/media/gardarika-acro.png",
    alt: "Акробатическое выступление Гардарики",
    contain: true,
  },
  {
    title: "Флаг-шоу на чемпионате России",
    place: "Соревнования по конкуру",
    image: "/media/event-horse.webp",
    alt: "Флаг-шоу и конная программа на открытой арене",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MarkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
      <path d="M6 17.2 12.1 23 26 8.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandLogo({ labelled = false }: { labelled?: boolean }) {
  return (
    <img
      className="brand-logo"
      src="/brand/gardarika-transparent.png"
      alt={labelled ? "Гардарика — творческий коллектив" : ""}
      aria-hidden={labelled ? undefined : true}
    />
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="masthead">
        <a className="masthead-brand" href="#top" aria-label="Гардарика — к началу страницы">
          <BrandLogo />
        </a>
        <nav className="masthead-nav" aria-label="Основная навигация">
          <a href="#programs">Шоу</a>
          <a href="#formats">Форматы</a>
          <a href="#projects">Проекты</a>
          <a href="#cases">Кейсы</a>
        </nav>
        <a className="masthead-contact" href="#contacts">Обсудить событие <ArrowIcon /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Санкт-Петербург · Москва · вся Россия</p>
          <h1 id="hero-title">Создаём шоу,<br />которое становится <em>событием</em></h1>
          <p className="hero-lead">
            Творческий коллектив «Гардарика» объединяет сцену, историю и современные технологии — от одного яркого номера до комплексной программы большого праздника.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" id="hero-primary-cta" href="tel:+79990330688">Заказать шоу <ArrowIcon /></a>
            <a className="button button-outline" href="#programs">Посмотреть 14 программ</a>
          </div>
          <div className="hero-facts" aria-label="Ключевые факты о коллективе">
            <div><strong>10+</strong><span>лет на сцене</span></div>
            <div><strong>800+</strong><span>реализованных заказов</span></div>
            <div><strong>14</strong><span>направлений шоу</span></div>
          </div>
        </div>

        <div className="hero-media" aria-label="Выступления творческого коллектива Гардарика">
          <figure className="hero-photo hero-photo-main">
            <img src="/media/event-flags.webp" alt="Масштабное флаг-шоу Гардарики" />
            <figcaption>Флаг-шоу · большая сцена</figcaption>
          </figure>
          <figure className="hero-photo hero-photo-fire">
            <img src="/media/event-fire.webp" alt="Огненное шоу Гардарики" />
            <figcaption>Огонь</figcaption>
          </figure>
          <figure className="hero-photo hero-photo-roller">
            <img src="/media/roller-show.webp" alt="Роллер-шоу Гардарики" />
            <figcaption>Роллер-шоу</figcaption>
          </figure>
          <div className="hero-seal"><span>Соберём</span><strong>ваш формат</strong></div>
        </div>

        <div className="hero-marquee" aria-hidden="true">
          <span>Флаги</span><i>✦</i><span>Огонь</span><i>✦</i><span>Свет</span><i>✦</i><span>Танец</span><i>✦</i><span>История</span><i>✦</i><span>Акробатика</span>
        </div>
      </section>

      <section className="audience section-shell" id="formats" aria-labelledby="formats-title">
        <div className="section-intro">
          <p className="kicker">Под задачу, а не по шаблону</p>
          <h2 id="formats-title">Один коллектив.<br /><span>Четыре масштаба события.</span></h2>
          <p>Вы выбираете задачу — мы предлагаем состав номеров, драматургию и технический формат.</p>
        </div>
        <div className="audience-grid">
          <article><span>01</span><h3>Город и государственные даты</h3><p>Открытия, концертные блоки, патриотические программы и финалы.</p><small>Флаги · танец · вокал · пиротехника</small></article>
          <article><span>02</span><h3>Корпоративное событие</h3><p>Велком, брендированный номер, интерактив и яркая кульминация.</p><small>Свет · экстрим · флаги с логотипом</small></article>
          <article><span>03</span><h3>Фестиваль и open-air</h3><p>Программы для большой аудитории, открытой сцены и пространства.</p><small>Огонь · джигитовка · народные забавы</small></article>
          <article><span>04</span><h3>Частный праздник</h3><p>Компактные решения с точным таймингом и персональной атмосферой.</p><small>Танец · вокал · свет · оригинальный жанр</small></article>
        </div>
      </section>

      <section className="programs" id="programs" aria-labelledby="programs-title">
        <div className="programs-heading section-shell">
          <div>
            <p className="kicker kicker-light">Каталог Гардарики</p>
            <h2 id="programs-title">14 шоу-программ.<br /><em>У каждой — своё лицо.</em></h2>
          </div>
          <p>На каждой карточке — фотография именно этого направления. Откройте описание, чтобы понять, где программа работает лучше всего.</p>
        </div>

        <div className="program-grid section-shell">
          {programs.map((program, index) => (
            <article className="program-card" key={program.title}>
              <div className={`program-image ${program.imageClass ?? ""}`}>
                <img src={program.image} alt={program.alt} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{program.category}</small>
              </div>
              <div className="program-copy">
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <details>
                  <summary>Где подходит <span aria-hidden="true">+</span></summary>
                  <p>{program.use}</p>
                </details>
              </div>
            </article>
          ))}
        </div>

        <div className="program-cta section-shell">
          <div><span>Не знаете, что выбрать?</span><strong>Опишите событие — предложим 2–3 рабочих варианта.</strong></div>
          <a className="button button-light" href="https://wa.me/79990330688" target="_blank" rel="noreferrer">Написать в WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <section className="builder section-shell" aria-labelledby="builder-title">
        <div className="builder-lead">
          <p className="kicker">Как создаётся программа</p>
          <h2 id="builder-title">От задачи —<br />к точному сценарию.</h2>
          <p>Не нужно разбираться во всех жанрах. Мы собираем программу по площадке, аудитории, таймингу и ожидаемому эффекту.</p>
          <a className="text-link" href="#contacts">Обсудить задачу <ArrowIcon /></a>
        </div>
        <div className="builder-steps">
          <article><span>01</span><div><h3>Бриф</h3><p>Уточняем дату, город, площадку, аудиторию и ключевой момент события.</p></div></article>
          <article><span>02</span><div><h3>Концепция</h3><p>Предлагаем готовый номер или комбинацию программ с понятным таймингом.</p></div></article>
          <article><span>03</span><div><h3>Подготовка</h3><p>Согласуем состав, музыку, костюмы, технические требования и логистику.</p></div></article>
          <article><span>04</span><div><h3>Выступление</h3><p>Команда приезжает подготовленной и ведёт программу до финального акцента.</p></div></article>
        </div>
        <div className="bundle">
          <div><small>от 3 программ</small><strong>−10%</strong></div>
          <div><small>от 5 программ</small><strong>−15%</strong></div>
          <div><small>от 8 программ</small><strong>−20%</strong></div>
          <p>Направления можно объединять в одну программу. Индивидуальная постановка и новогодние даты рассчитываются отдельно.</p>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading section-shell">
          <p className="kicker">Экосистема проектов</p>
          <h2 id="projects-title">От одного номера<br />до события <span>под ключ.</span></h2>
          <p>Три направления одной команды закрывают сцену, историческую среду и комплексную организацию.</p>
        </div>
        <div className="project-stack section-shell">
          <article className="project-card project-gardarika">
            <div className="project-media"><img src="/media/event-led.webp" alt="Световое шоу Гардарики" loading="lazy" decoding="async" /></div>
            <div className="project-copy">
              <span className="project-index">01 · Шоу</span>
              <div className="project-brand project-brand-gardarika"><BrandLogo labelled /></div>
              <h3>Творческий коллектив «Гардарика»</h3>
              <p>Многожанровые сценические номера: флаги, огонь, свет, танец, вокал, акробатика и оригинальный жанр.</p>
              <ul><li><MarkIcon />Готовые и авторские постановки</li><li><MarkIcon />Состав под масштаб площадки</li><li><MarkIcon />Брендирование отдельных номеров</li></ul>
              <a className="project-link" href="https://gardarika-show.semenovspb.chatgpt.site/downloads/gardarika-booklet.pdf" target="_blank" rel="noreferrer">Открыть мобильный буклет <ArrowIcon /></a>
            </div>
          </article>

          <article className="project-card project-podvorye">
            <div className="project-media"><img src="/media/event-history.webp" alt="Историческая реконструкция проекта Русское подворье" loading="lazy" decoding="async" /></div>
            <div className="project-copy">
              <span className="project-index">02 · Фестиваль</span>
              <img className="project-symbol" src="/brand/podvorye.png" alt="Русское подворье" loading="lazy" decoding="async" />
              <h3>«Русское подворье»</h3>
              <p>Живая история России в формате маршрута по эпохам: реконструкция, ремёсла, музыка, интерактив и сцена.</p>
              <ul><li><MarkIcon />Древняя Русь, Империя, СССР</li><li><MarkIcon />Казачья застава и ремесленная ярмарка</li><li><MarkIcon />Конные и сценические программы</li></ul>
              <a className="project-link" href="https://gardarika-show.semenovspb.chatgpt.site/downloads/russkoe-podvorye-booklet.pdf" target="_blank" rel="noreferrer">Открыть мобильный буклет <ArrowIcon /></a>
            </div>
          </article>

          <article className="project-card project-events">
            <div className="project-media"><img src="/media/event-water.webp" alt="Масштабное событие на воде" loading="lazy" decoding="async" /></div>
            <div className="project-copy">
              <span className="project-index">03 · Организация</span>
              <img className="project-symbol" src="/brand/prazdniki.png" alt="Праздники События" loading="lazy" decoding="async" />
              <h3>«Праздники События»</h3>
              <p>Организация городских, корпоративных и частных мероприятий — от идеи и программы до финального шоу.</p>
              <ul><li><MarkIcon />Государственные даты и фестивали</li><li><MarkIcon />Концерты, ярмарки, тимбилдинги</li><li><MarkIcon />Авторские культурные проекты</li></ul>
              <a className="project-link" href="https://gardarika-show.semenovspb.chatgpt.site/downloads/prazdniki-sobytiya-booklet.pdf" target="_blank" rel="noreferrer">Открыть мобильный буклет <ArrowIcon /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="cases" id="cases" aria-labelledby="cases-title">
        <div className="cases-heading section-shell">
          <div><p className="kicker kicker-light">Реализованные проекты</p><h2 id="cases-title">Сцены, на которых<br /><em>мы уже были.</em></h2></div>
          <a href="https://vk.ru/gardarika_show" target="_blank" rel="noreferrer">Больше фото и видео в VK <ArrowIcon /></a>
        </div>
        <div className="case-grid section-shell">
          {cases.map((item, index) => (
            <figure className={`case-card case-${index + 1} ${item.contain ? "case-contain" : ""}`} key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <figcaption><span>{item.place}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="trust section-shell" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="kicker">Опыт и ответственность</p>
          <h2 id="trust-title">Мы не агентство<br />и не посредники.</h2>
          <p>Каждая шоу-программа создана коллективом и адаптируется под конкретное событие. Команда работает на частных, корпоративных и городских площадках по всей России.</p>
        </div>
        <div className="trust-points">
          <div><strong>Собственная команда</strong><span>Артисты и постановки внутри коллектива.</span></div>
          <div><strong>Гибкая конфигурация</strong><span>От одного номера до большого сценария.</span></div>
          <div><strong>Понятная подготовка</strong><span>Заранее согласуем площадку и технику.</span></div>
        </div>
        <div className="client-line"><span>Среди заказчиков</span><img src="/media/clients.png" alt="Логотипы заказчиков творческого коллектива Гардарика" loading="lazy" decoding="async" /></div>
      </section>

      <section className="contacts" id="contacts" aria-labelledby="contacts-title">
        <div className="contacts-light" aria-hidden="true" />
        <div className="contacts-copy">
          <p className="kicker kicker-light">Начнём с короткого разговора</p>
          <h2 id="contacts-title">Расскажите о событии.<br /><em>Мы соберём шоу.</em></h2>
          <p>Достаточно назвать дату, город, тип площадки и задачу. Анастасия предложит подходящие направления и поможет рассчитать формат.</p>
        </div>
        <div className="contact-card">
          <span>Менеджер · Анастасия</span>
          <a className="contact-phone" href="tel:+79990330688">+7 999 033-06-88</a>
          <a className="contact-mail" href="mailto:gardarikashow@bk.ru">gardarikashow@bk.ru</a>
          <div className="contact-buttons">
            <a className="button button-light" href="tel:+79990330688">Позвонить <ArrowIcon /></a>
            <a className="button button-whatsapp" href="https://wa.me/79990330688" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="social-row">
            <a href="https://vk.ru/gardarika_show" target="_blank" rel="noreferrer">VK</a>
            <a href="https://gardarikashow.ru/" target="_blank" rel="noreferrer">gardarikashow.ru</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><BrandLogo labelled /></div>
        <p>Творческий коллектив нового формата. Санкт-Петербург · Москва · выступления по всей России.</p>
        <nav aria-label="Навигация в подвале"><a href="#programs">Шоу</a><a href="#projects">Проекты</a><a href="#cases">Кейсы</a><a href="#contacts">Контакты</a></nav>
        <span>© 2015–2026 «Гардарика»</span>
      </footer>

      <MobileCall />
    </main>
  );
}
