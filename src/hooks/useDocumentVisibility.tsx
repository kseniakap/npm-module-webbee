import { useEffect, useState } from 'react'

const isVisibleDocument = (): boolean => !document.hidden

const useDocumentVisibility = () => {
  const [visible, setVisible] = useState(isVisibleDocument)
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      setVisible(false)
      setCount((prevCount) => prevCount + 1)
    } else {
      setVisible(true)
    }
  }

  const onVisibilityChange = (fn: (isVisible: boolean) => void) => {
    const visibilityHandler = () => {
      fn(document.visibilityState === 'visible')
    }
    document.addEventListener('visibilitychange', visibilityHandler)
    return () => {
      document.removeEventListener('visibilitychange', visibilityHandler)
    }
  }

  return { visible, count, onVisibilityChange }
}
export default useDocumentVisibility
