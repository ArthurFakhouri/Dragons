import type { HTMLAttributes } from 'react'
import './styles.scss'

type BoxProps = {
  as?: keyof HTMLElementTagNameMap,
} & HTMLAttributes<HTMLElement>

export function Box({
  as = 'div',
  className = "",
  ...props
}: BoxProps) {

  const BoxComponent = as

  return (
    <BoxComponent className={`box ${className}`} {...props} />
  )
}