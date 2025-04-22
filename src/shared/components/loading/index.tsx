import { ImSpinner9 } from "react-icons/im";
import './styles.scss'
import type { ComponentProps } from "react";

type LoadingProps = ComponentProps<'div'>

export function Loading({
  className,
  ...props
}: LoadingProps) {
  return (
    <div className={`loading ${className}`} {...props}>
      <ImSpinner9 size={16} />
    </div>
  )
}