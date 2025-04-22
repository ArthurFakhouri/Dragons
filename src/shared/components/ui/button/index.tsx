import type { ComponentProps } from "react";
import './styles.scss'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
} & ComponentProps<'button'>

export function Button({
  variant = 'primary',
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button type="button" className={`button ${variant} ${className}`} {...props} />
  )
}