import { type ComponentProps, useState } from "react"
import './styles.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

type InputProps = ComponentProps<'input'>

export function Input({
  className = "",
  type = "text",
  ...props
}: InputProps) {

  const [showPassword, setShowPassword] = useState(false)

  function handleToggleVisiblePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="input-content">
      <div className="filled-circle" />
      <input type={showPassword ? 'text' : type} className={`input ${className}`} {...props} />
      {type === 'password' && (
        <button type="button" className="button-password" onClick={handleToggleVisiblePassword}>
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </button>
      )}
    </div>
  )
}