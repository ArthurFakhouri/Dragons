import { type ChangeEvent, type ComponentProps, useState } from "react"
import './styles.scss'
import { GoAlertFill } from "react-icons/go"

type TextAreaProps = {
  error?: string
} & ComponentProps<'textarea'>

export function TextArea({
  error = "",
  className,
  defaultValue = "",
  onChange,
  ...props
}: TextAreaProps) {

  const [numberChart, setNumberChart] = useState(defaultValue.toString().length)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNumberChart(event.target.value.length)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className="textarea-box">
      <textarea defaultValue={defaultValue} onChange={handleChange} className={`textarea ${className}`} {...props} />
      <div className="feedback">
        {error &&
          <span className="error">
            <GoAlertFill size={14} className="error-icon" />
            {error}
          </span>
        }
        <span className="maxChar">{numberChart}/500</span>
      </div>
    </div>
  )
}