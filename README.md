# Messenger

Учебный проект «Веб-мессенджер» Яндекс Практикума.

## Ссылки

- Деплой: https://middle-messenger-praktikum.netlify.app
- Макет: [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat_external_link)
- Pull request Sprint 1: https://github.com/sarvar/middle.messenger.praktikum.yandex/pull/4
- Pull request Sprint 2: https://github.com/sarvar/middle.messenger.praktikum.yandex/pull/5

## Описание

Приложение для обмена сообщениями. Во втором спринте страницы переведены
на компонентный подход: добавлен класс `Block` с событийной шиной,
жизненным циклом компонента и рендерингом через Handlebars, а также
валидация форм.

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

## Архитектура

- `src/core` — `Block`, `EventBus`, `renderDOM`
- `src/components` — переиспользуемые компоненты
- `src/pages` — страницы приложения
- `src/utils` — валидация, работа с формами, моковые данные

Формы изменения данных и смены пароля собраны на общем компоненте
`ProfileForm`. На странице изменения данных он добавляет поле
`input[type="file"]` с именем `avatar` для загрузки аватара.

Каждый компонент наследуется от `Block`: получает пропсы через `Proxy`,
реагирует на их изменение и перерисовывается через события
`init`, `flow:component-did-mount`, `flow:component-did-update`, `flow:render`.

## Валидация

Поля проверяются при потере фокуса и при отправке формы.
Если данные корректны, форма выводит их в консоль через `console.log`.

| Поле | Правило |
| --- | --- |
| `first_name`, `second_name`, `display_name` | латиница или кириллица, первая буква заглавная, без пробелов и цифр |
| `login` | от 3 до 20 символов, латиница, не только цифры, без пробелов |
| `email` | латиница, цифры и спецсимволы, обязательна собака |
| `password`, `old_password`, `new_password`, `password_repeat` | от 8 до 40 символов, обязательна заглавная буква и цифра |
| `phone` | от 10 до 15 символов, цифры, может начинаться с плюса |
| `message` | не должно быть пустым |

Поля ввода — компонент `Input`: текст ошибки хранится в пропсах
и выводится под полем, поэтому ошибка видна пользователю в интерфейсе.

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
