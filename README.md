# Messenger

Учебный проект «Веб-мессенджер» Яндекс Практикума.

## Ссылки

- Деплой: https://middle-messenger-praktikum.netlify.app
- Макет: [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat_external_link)

## Описание

Приложение для обмена сообщениями. В первом спринте свёрстаны страницы
приложения с использованием шаблонизатора Handlebars.

## Страницы

| Страница | Путь |
| --- | --- |
| Вход | `/` |
| Регистрация | `/signup.html` |
| Список чатов | `/chats.html` |
| Профиль | `/profile.html` |
| Изменить данные | `/edit-profile.html` |
| Изменить пароль | `/edit-password.html` |
| Ошибка 404 | `/404.html` |
| Ошибка 500 | `/500.html` |

## Технологии

- TypeScript
- Vite
- Handlebars
- CSS
- ESLint, Stylelint

## Установка и запуск

- `npm install` — установка зависимостей
- `npm run dev` — запуск версии для разработки
- `npm run build` — сборка проекта
- `npm run start` — сборка и запуск на порту 3000

## Проверка кода

- `npm run lint` — проверка TypeScript
- `npm run lint:css` — проверка стилей
- `npm run typecheck` — проверка типов
