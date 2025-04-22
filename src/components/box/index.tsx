import type { ComponentProps } from 'react'
import './styles.scss'

type BoxProps = ComponentProps<'div'>

export function Box({
  className = "",
  ...props
}: BoxProps) {
  return (
    <div className={`box ${className}`} {...props} />
  )
}