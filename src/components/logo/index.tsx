import { GiSpikedDragonHead } from "react-icons/gi";
import './styles.scss'

export function Logo() {
  return (
    <div className="logo">
      <GiSpikedDragonHead size={40} className="icon" />
      <strong className="title">Dragons</strong>
    </div>
  )
}