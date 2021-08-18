# test-jokes-list

---

## Объяснение деталей реализации

Папка `pages` существует потому что я привык так структурировать проект. Это сделано с мыслью о раутинге. Обычно `App.vue`, в моих проектах, содержит раутинг, и ссылается на страницы.

Папка `models` и описанные в ней классы существуют потому что я хотел типизировать результаты запроса (чего я не делал ранее на ванильном js и не знал получится ли). Как итог, у меня вышло нормально этого добить только в `SearchJokePage.vue`. В остальных местах это не получилось применить.

Папка `service` содержит сервис для работы с API. Простая абстракция, предоставляющая более удобный интерфейс. Я хотел сделать чуть больше фич, но сделал что сделал.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
