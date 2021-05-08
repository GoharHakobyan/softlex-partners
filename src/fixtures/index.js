import React from 'react';
import Mountain from '../../static/img/mountain.svg';
import Services from '../../static/img/services.svg';
import Technologies from '../../static/img/technologies.svg';
import Experience from '../../static/img/experience.svg';

export const cardsDesktopData = [
  {
    subtitle: 'О нас',
    title: 'Создаем IT продукты на субподряде',
    img: <Mountain />,
    text:
      'Создадим проект под ключ, укрепим вашу команду своими специалистами, добавим нехватающих компетенций',
    wordsToHightlight: ['на', 'субподряде'],
  },
  {
    subtitle: 'Услуги',
    title: 'Scrum, Kanban, аутсорс, аутстаф — понятные вам форматы',
    text: 'Веб-сервисы, мобильные приложения, чат-боты и дизайн',
    img: <Services />,
    wordsToHightlight: ['понятные'],
  },
  {
    subtitle: 'Опыт',
    title: ' Имеем богатый опыт работы с партнерами',
    text:
      'Занимаемся работой с партнерами с 2016 года и за это время реализовали более 50 проектов, потратили 40 000+ часов разработки',
    img: <Experience />,
    wordsToHightlight: ['партнерами'],
  },
  {
    subtitle: 'Технологии',
    title: 'Используем в проектах современные технологии',
    text:
      'Привлекательный интерфейс мобильного приложения или веб-решения, креативный фирменный стиль и логотип, яркие иллюстрации и цифровая живопись, - это лишь неполный список того, что могут воплотить в жизнь наши графические дизайнеры',
    img: <Technologies />,
    wordsToHightlight: ['современные'],
  },
];

export const mobileCardsData = cardsDesktopData?.map((data, index) => {
  switch (index) {
    case 0:
      return {
        ...data,
        wordsToHightlight: data.wordsToHightlight.slice(-1),
      };
    case 2:
      return {
        ...data,
        wordsToHightlight: ['богатый'],
      };
    case 3:
      return {
        ...data,
        title: 'Передовые технологии для вашего проекта',
        text:
          'Оптимальный технологический стэк, поможет реализовать проект любой сложности',
        wordsToHightlight: ['Передовые'],
      };
    default:
      return data;
  }
});

export const aboutUsData = [
  {
    img: 'team.svg',
    title: 'Команда из 20 человек',
    text:
      'Softlex - это команда профессионалов, с многолетней экспертизой которая проанализирует требования, проектирует интерфейс, разработает программное обеспечение и настроит серверную инфраструктуру для вашего проекта',
    height: 64,
    width: 65,
  },
  {
    img: 'people.svg',
    title: 'В среднем 7 человек на проект',
    text:
      'Серьезному проекту требуется команда как минимум из: проект менеджера, дизайнера, QA, DevOPS, двух-трех разработчиков. Умеем и любим работать в таких командах',
    height: 62,
    width: 62,
  },
  {
    img: 'calendar.svg',
    title: 'Средняя продолжительность проекта 6 месяцев',
    text:
      'Серьезному проекту требуется команда как минимум из: проект менеджера, дизайнера, QA, DevOPS, двух-трех разработчиков. Умеем и любим работать в таких командах',
    width: 60,
    height: 52,
  },
  {
    img: 'modern-technologies.svg',
    title: 'Используем современные подходы к разработке',
    text:
      'В своей работе используем эффективные и актуальные подходы scrum, kanban и разделяем ценности Agile, что позволяет легко адаптироваться под реалии любого проекта',
    width: 66,
    height: 54,
  },
  {
    img: 'product.svg',
    title: 'Подходим к проекту как к продукту',
    text:
      'Не просто пишем код, а ориентируемся на продуктовую ценность, а CAC, LTV, CRR, ROI для нас не просто наборы букв, а маркеры эффективности',
    width: 58,
    height: 58,
  },
  {
    img: 'shield.svg',
    title: 'Прозрачность на каждом этапе',
    text: 'Вы будете видеть в каком состоянии находится проект',
    width: 58,
    height: 59,
  },
];

export const cooperationData = [
  {
    title: 'Предоставляем проектную команду',
    text:
      'Предоставляем проектную команду для реализации проекта «под ключ», сами проектируем, согласовываем и реализовываем',
    img: 'project-team.svg',
  },
  {
    title: 'Отдадим команду в ваше управление',
    text: 'Отдадим команду в ваше управление',
    img: 'team-outstaff.svg',
  },
  {
    title: 'Предоставим сотрудника под ваши нужды',
    text:
      'Предоставляем группу сотрудников в ваше управление. Количество проектов, стиль взаимодействия устанавливается вами',
    img: 'outstaff.svg',
  },
];

export const opacityData = [
  {
    title: 'Визуальная подача',
    text:
      'Дизайн разрабатывается с использованием инструментов, которые обеспечивают постоянный доступ к последней актуальной версии и прогрессу',
    img: 'figma.svg',
  },
  {
    title: 'Задачи',
    text:
      'Открытость статуса задач повышает информированность и позволяет всей команде синхронизироваться. Для этого мы используем Jira и аналоги',
    img: 'jira.svg',
  },
  {
    title: 'Документация',
    text:
      ' В процессе разработки копятся артефакты проекта и документация, которую мы храним в доступе нашего партнера в Confluence',
    img: 'confluence.svg',
  },
  {
    title: 'Код',
    text:
      'Обеспечивает круглосуточный доступ к коду и актуальному состоянию разработки',
    img: 'gitlab.svg',
  },
];

export const servicesData = [
  {
    title: 'Backend',
    text:
      'Спроектируем и реализуем надежную начинку вашего сервиса, позволяющую реализовать  весь спроектированный функционал',
    img: 'backend.svg',
    height: 208,
    width: 262,
  },
  {
    title: 'Мобильные приложения',
    text:
      'Разрабатываем мобильные приложения с использованием кросс — платформенных решений',
    img: 'mobile.svg',
    height: 297,
    width: 297,
  },
  {
    title: 'Frontend',
    text:
      'Берем на себя пользовательские интерфейсы. Взаимодействие будет приятным и быстрым',
    img: 'frontend.svg',
    height: 241,
    width: 198,
  },
  {
    title: 'Ux / UI дизайн',
    text:
      'Интерфейс играет важнейшую роль в процессе получения пользовательского офиса. Спроектируем, реализуем',
    img: 'design.svg',
    height: 321,
    width: 321,
  },
  {
    title: 'Управление проектом',
    text: 'Успешно управляем своими, смешанными и сторонними командами',
    img: 'managment.svg',
    height: 255,
    width: 342,
  },
  {
    title: 'DevOPS',
    text:
      'Правильно спроектированная и реализованная архитектура экономит время, сохраняет нервы и деньги',
    img: 'devops.svg',
    height: 239,
    width: 237,
  },
];

export const partnersData = [
  {
    year: '2015',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2016',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2017',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2018',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },

  {
    year: '2017',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2017',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2017',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
  {
    year: '2017',
    hours: '5 969',
    partnersAmount: 20,
    partners: [
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
      {
        logo: 'partner1.png',
        name: 'Partner from UAE',
      },
      {
        logo: 'partner2.png',
        name: 'Coca-Cola Company',
      },
    ],
  },
];

export const reviewsData = [
  {
    name: 'Виктор Сухороров',
    job: 'Директор по развитию компании «Тружусь и горжусь»',
    text:
      'Первый раз сотрудничали с компанией Softlex в формате найма одного специалиста. Работу сделал качественно и без срывов срока. Теперь доверяем им проекты полностью',
    img: 'reviewer1.png',
  },
  {
    name: 'Виктор Сухороров',
    job: 'Директор по развитию компании «Тружусь и горжусь»',
    text:
      'Первый раз сотрудничали с компанией Softlex в формате найма одного специалиста. Работу сделал качественно и без срывов срока. Теперь доверяем им проекты полностью',
    img: 'reviewer2.png',
  },
  {
    name: 'Виктор Сухороров',
    job: 'Директор по развитию компании «Тружусь и горжусь»',
    text:
      'Первый раз сотрудничали с компанией Softlex в формате найма одного специалиста. Работу сделал качественно и без срывов срока. Теперь доверяем им проекты полностью',
    img: 'reviewer3.png',
  },
];

export const projectsData = [
  {
    img: 'project.png',
    title: 'Интерфейс CRM системы',
    team: '6',
    hours: '1236',
    summary: '4 месяца',
  },
  {
    img: 'project.png',
    title: 'Интерфейс CRM системы',
    team: '6',
    hours: '1236',
    summary: '4 месяца',
  },
];

export const technologiesData = [
  {
    sectionName: 'Для разработки',
    technologies: [
      {
        title: 'Backend',
        items: [
          {
            title: 'Python',
            icon: 'python.svg',
          },
          {
            title: 'Mysql',
            icon: 'mysql.svg',
          },
          {
            title: 'PostgreSQL',
            icon: 'postgreSQL.svg',
          },
          {
            title: 'PHP',
            icon: 'php.svg',
          },
          {
            title: 'Node.js',
            icon: 'nodejs.svg',
          },
        ],
      },
      {
        title: 'Frontend',
        items: [
          {
            title: 'Vue.js',
            icon: 'vue.svg',
          },
          {
            title: 'TypeScript',
            icon: 'typescript.svg',
          },
          {
            title: 'React',
            icon: 'react.svg',
          },
        ],
      },
      {
        title: 'Mobile',
        items: [
          {
            title: 'ReactNative',
            icon: 'react.svg',
          },
        ],
      },
    ],
  },
  {
    sectionName: 'Дополнительные инструменты',
    technologies: [
      {
        items: [
          {
            title: 'CI/CD',
            icon: 'ci-cd.svg',
          },
          {
            title: 'GitLab',
            icon: 'gitlab.svg',
          },
          {
            title: 'Docker',
            icon: 'docker.svg',
          },
          {
            title: 'Postman',
            icon: 'postman.svg',
          },
          {
            title: 'Swagger',
            icon: 'swagger.svg',
          },
          {
            title: 'Figma',
            icon: 'figma.svg',
          },
          {
            title: 'Confluence',
            icon: 'confluence.svg',
          },
          {
            title: 'Jira',
            icon: 'jira.svg',
          },
        ],
      },
    ],
  },
];

export const formData = [
  {
    name: 'name',
    label: 'Имя',
  },
  {
    name: 'email',
    label: 'Электронная почта',
    type: 'mail',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
  },
  {
    type: 'select',
    label: 'Причина обращения',
    items: ['Ищу партнера для разработки', 'Ищу подрядчика', 'пример 1'],
  },
];

export const menuItems = [
  {
    name: 'Портфолио',
    to: '/portfolio',
  },
  {
    name: 'Вакансии и карьера в Softlex',
    href: 'https://www.notion.so/Softlex-defc450398d945dcbc5510a9dbabae80',
  },
  {
    name: 'О нас',
    to: '/aboutPage',
  },
];

export const contactData = [
  {
    title: 'Звоните',
    info: ['+7 (977) 818-66-89'],
  },
  {
    title: 'Пишите',
    info: ['work@softlex.pro'],
  },
  {
    title: 'Приходите',
    info: [' г.Москва , ул.Тверская', 'г.Новороссийск , ул.Пионерская 2ж'],
  },
];

export const projectsList = [
  'Все',
  'Управление проектом',
  'DevOPS',
  'backend',
  'frontend',
  'ux/ui дизайн',
  'Тестирование',
  'Мобильная разработка',
];

export const projectExamples = [
  {
    title: 'Название проекта',
    text: 'Реализация мобиильной версии приложения для фонда пожертвований',
    heading: 'ux/ui дизайн',
  },
  {
    title: 'Название проекта',
    text: 'Реализация мобиильной версии приложения для фонда пожертвований',
    heading: 'Мобильная разаботка',
  },
  {
    title: 'Название проекта',
    text: 'Реализация мобиильной версии приложения для фонда пожертвований',
    heading: 'Мобильная разработка',
  },
  {
    title: 'Название проекта',
    text: 'Реализация мобиильной версии приложения для фонда пожертвований',
    heading: 'ux/ui дизайн',
  },
];
