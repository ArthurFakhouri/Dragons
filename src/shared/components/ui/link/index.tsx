import { type LinkProps, Link as LinkRRouter } from "react-router";
import './styles.scss'


export function Link({
  className = "",
  ...props
}: LinkProps) {
  return (
    <LinkRRouter className={`link ${className}`} {...props} />
  )
}