### Этапы установки проекта

- Клонирование из ветки feature
  `git clone -b feature https://github.com/kseniakap/npm-module-webbee.git`
- Установка зависимостей
  `npm i`
  или
  `npm install`

### Запуск проекта
  `npm run start`

### Тестирование созданного npm модуля

- Изменение пути для хука в компоненте LeaveTabCounter.tsx
  ("src/componets/LeaveTabCounter.tsx").
  Изменяем данный путь:
  `import useDocumentVisibility from '../hooks/useDocumentVisibility'`
  на
  `import { useDocumentVisibility } from '@kseniakap/use-visibility-document'`
  импорт будет происходить из созданного модуля
