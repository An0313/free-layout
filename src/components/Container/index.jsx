import React, {useMemo} from 'react'

import('./index.less')

// 外层容器
export const FlContainer = ({direction = 'horizontal', children}) => {
  const isVertical = useMemo(() => direction === 'vertical', [direction])
  return (
    <div className={`fl-container ${isVertical ? 'vertical' : ''}`}>{...children}</div>
  )
}

// 侧边栏容器
export const FlAside = ({width, children}) => {
  return (
    <div className='fl-aside' style={{width}}>{...children}</div>
  )
}

//  底栏容器
export const FlFooter = ({height, children}) => {
  return (
    <div className='fl-footer' style={{height}}>{...children}</div>
  )
}

// 顶栏容器
export const FlHeader = ({height, children}) => {
  return (
    <div className='fl-header' style={{height}}>{...children}</div>
  )
}

// 主要区域容器
export const FlMain = ({children}) => {
  return (
    <div className='fl-main'>{...children}</div>
  )
}

// 导航容器
export const FlNav = ({children}) => {
  return (
    <div className='fl-nav'>{...children}</div>
  )
}
