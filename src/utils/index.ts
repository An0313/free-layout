// class 命名
export const classNamespace = (name: string) => {
  const namespace = `fl-${name}`

  return (className: string) => `${namespace}-${className}`
}

// 是否是对象
export const isObject = (val: any) => val !== null && typeof val === 'object';

// 是否是数字
export const isNumber = number => /^[0-9]+.?[0-9]*$/.test(number)
