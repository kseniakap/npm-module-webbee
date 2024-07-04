# Тестовые задания на реализацию npm модулей

Реализуем на github, публикуем в npm под названием @имя-вашего-npm-пользователя/название-пакета, например @vasya228/react-use

## React - useDocumentVisibility
Стек: React, typescript (опционален), сборка - microbundle/rollup
## react hook, который

* скажет, активна (видна) ли сейчас вкладку браузера
* скажет, сколько раз с момента инициализации компонента вкладка становилась неактивной (невидимой)
* предоставит функцию, в которой можно подписаться на изменение активности (видимости) текущей вкладки

## Пример работы хука

```javascript
import React from 'react'
import { useDocumentVisibility } from '@my-npm-user/react-document-visibility'

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility()

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    })

    const unsubscribeSecondHandler = onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    })

    setTimeout(() => unsubscribeSecondHandler(), 5000) // отписываемся от 'second handler' через 5 секунд
  }, [])

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз Вкладка активна?{' '}
        {visible ? 'да' : 'нет'}
      </span>
    </div>
  )
}
```
