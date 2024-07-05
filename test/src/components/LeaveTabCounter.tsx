import { useEffect } from 'react'
//использование хука локально
import useDocumentVisibility  from './../../../src/useDocumentVisibility'

// загрузка из npm пакета
// import { useDocumentVisibility } from 'webbee-use-visibility-document'

export const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility()

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    })

    const unsubscribeSecondHandler = onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    })

    setTimeout(() => unsubscribeSecondHandler(), 5000) 
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
