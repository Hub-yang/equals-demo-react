import type * as React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    // 匹配 UnoCSS 的属性模式
    [key: string]: any
  }
}
