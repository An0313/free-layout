import React, {useMemo, useContext, createContext} from 'react'
import {classNamespace, isObject} from '../../utils/index'

import('./row.less')
import('./col.less')

const Context = createContext({gutter: 0});

const useClassNamespace = classNamespace

// row 组件
export const FlRow = ({gutter = 0, justify = 'start', align = 'stretch', children}) => {
  const styles = useMemo(() => {
    const style = {
      justifyContent: justify,
      alignItems: align,
    }
    if (gutter) {
      const m = `-${gutter / 2}px`
      style.marginLeft = m
      style.marginRight = m
    }
    return {}
  }, [gutter, justify, align])

  return (
    <Context.Provider value={{gutter}}>
      <div className='fl-row' style={styles}>{...children}</div>
    </Context.Provider>
  )
}

// col 组件
export const FlCol = (
  {
    span = 24,
    offset = 0,
    pull = 0,
    push = 0,
    // xs = {},
    // sm = {},
    // md = {},
    // lg = {},
    // xl = {},
    children,
    ...props
  }) => {
  const {gutter} = useContext(Context)
  const setClassName = useClassNamespace('col')

  const styles = useMemo(() => {
    const style = {}

    if (gutter) {
      const p = `${gutter / 2}px`
      style.paddingLeft = p
      style.paddingRight = p
    }

    return style
  }, [gutter])

  const classes = useMemo(() => {

    const classList = []

    if (Number.isInteger(span)) {
      classList.push(setClassName(`span-${span}`))
    }

    if (Number.isInteger(offset) && offset > 0) {
      classList.push(setClassName(`offset-${offset}`))
    }

    if (Number.isInteger(push) && offset > 0) {
      classList.push(setClassName(`push-${push}`))
    }

    if (Number.isInteger(pull) && offset > 0) {
      classList.push(setClassName(`pull-${pull}`))
    }

    const sizes = ["xs", "sm", "md", "lg", "xl"];

    sizes.forEach((size) => {
      if (Number.isInteger(props[size])) {
        classList.push(setClassName(`${size}-${props[size]}`));
      } else if (isObject(props[size])) {
        Object.entries(props[size]).forEach(([prop, sizeProp]) => {
          classList.push(prop !== "span" ? setClassName(`${size}-${prop}-${sizeProp}`) : setClassName(`${size}-${sizeProp}`));
        });
      }
    });

    return classList
  }, [span, offset, pull, push, props])

  return (
    <div className={`fl-col ${classes.join(' ')}`} style={styles}>{...children}</div>
  )
}
