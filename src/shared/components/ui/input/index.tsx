import { type ComponentProps, useState } from "react"
import './styles.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { GoAlertFill } from "react-icons/go"
import { Button } from "../button"

type InputProps = {
  error?: string
} & ComponentProps<'input'>

export function Input({
  className = "",
  type = "text",
  error = "",
  ...props
}: InputProps) {

  const [showPassword, setShowPassword] = useState(false)

  function handleToggleVisiblePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="input-content">
      <div className="input-box">
        <div className="filled-circle" />
        <input type={showPassword ? 'text' : type} className={`input ${className}`} {...props} />
        {type === 'password' && (
          <Button variant="tertiary" className="button-password" onClick={handleToggleVisiblePassword}>
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </Button>
        )}
      </div>
      {error &&
        <span className="error">
          <GoAlertFill size={14} className="error-icon" />
          {error}
        </span>
      }
    </div>
  )
}