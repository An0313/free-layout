import {useEffect, useCallback, useState} from 'react'
import {windowSize as defaultWindowSize} from '../constant/'
import {isObject, isNumber} from '../utils'

//
export default (monitorSize = defaultWindowSize) => {
  const [size, setSize] = useState()

  const onResize = useCallback(() => {
    const screenWidth = document.body.clientWidth

    setSize(() => {
      const s = {}
      if (!isObject(monitorSize)) throw new Error('请传入对象');
      for (let [key, value] of Object.entries(monitorSize)) {
        if (!isNumber(value.min) || !isNumber(value.max)) throw new Error('请传入数字');
        s[key] = screenWidth >= value.min && screenWidth <= value.max
      }

      return s
    })
  }, [])


  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return {size}
}
