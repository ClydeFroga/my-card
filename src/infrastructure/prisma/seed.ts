import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  const existing = await prisma.profile.findFirst();
  if (existing) return;

  await prisma.profile.create({
    data: {
      name: 'Привалихин Дмитрий',
      description: 'Full Stack Developer',
      links: {
        create: [
          { url: 'https://github.com/ClydeFroga' },
          {
            url: 'https://krasnoyarsk.hh.ru/resume/45ff53deff07fa98bb0039ed1f6f466a71707a',
          },
        ],
      },
      skills: {
        create: [
          { name: 'Nest.js' },
          { name: 'GraphQL' },
          { name: 'TypeORM' },
          { name: 'Prisma' },
          { name: 'PostgreSQL' },
          { name: 'RabbitMQ' },
          { name: 'Redis' },
          { name: 'Node.js' },
          { name: 'Docker' },
          { name: 'Jest' },
          { name: 'Vue.js' },
        ],
      },
      experiences: {
        create: [
          {
            company: 'ООО "ПромоГрупп Медиа"',
            position: 'Web-разработчик',
            startedAt: new Date('2020-06-01'),
            endedAt: new Date('2021-11-01'),
            achievements: [
              'Создание, поддержка и администрирование трех новостных сайтов на Nuxt 2',
            ],
          },
          {
            company: 'ООО "Акцептум-Инжиниринг"',
            position: 'Full-stack разработчик',
            startedAt: new Date('2021-06-02'),
            endedAt: new Date('2025-04-01'),
            achievements: [
              'Оптимизация производительности приложений с помощью кэширования (Redis)',
              'Налаживание процессов непрерывной интеграции и доставки (CI/CD) : автоматизация сборки и деплоя приложений для минимизации рисков и ускорения выхода новых версий',
              'Реализация интеграций с внешними сервисами: успешно интегрировано несколько внешних API, что позволило расширить функциональность платформы и повысить удобство для конечных пользователей',
              'Настройка веб-серверов (nginx)',
              'Администрирование Linux-систем',
              'Разработка и поддержка backend-решений на базе Nest.js',
              'Создание и оптимизация SQL-запросов и структур данных в PostgreSQL',
              'Разработка event-driven архитектуры с использованием RabbitMQ',
              'Создание приложения на electron + vue 3, работающих с устройствами через COM-порты, для внутренних нужд',
            ],
          },
          {
            company: 'All Funeral Services',
            position: 'Backend-разработчик',
            startedAt: new Date('2025-04-02'),
            achievements: [
              'Интегрировал GetStream Chat и AI-агент в backend сервиса поддержки: серверное подключение бота, маршрутизация сообщений, fallback на AI при офлайн-менеджерах',
              'Реализовал платёжный контур на Stripe: создание подписок, верификация webhook-подписей, обработка событий оплаты',
              'Построил асинхронную обработку задач на pg-boss: постановка задач из API, выполнение в worker-сервисе (например, отправка событий в Meta CAPI)',
              'Проектирование и поддержка схемы PostgreSQL и триггеров',
            ],
          },
        ],
      },
      projects: {
        create: [
          { name: 'Tending', url: 'https://tending.app/' },
          { name: 'Eva Pro', url: 'https://1eva.pro/' },
          { name: 'Личный кабинет Eva Pro', url: 'https://newlk.1eva.pro/' },
        ],
      },
    },
  });
}

main().finally(() => prisma.$disconnect());
