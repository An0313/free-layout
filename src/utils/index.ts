// class 命名
export const classNamespace = (name: string) => {
  const namespace = `fl-${name}`

  return (className: string) => `${namespace}-${className}`
}


export const isObject = (val: any) => val !== null && typeof val === 'object';
