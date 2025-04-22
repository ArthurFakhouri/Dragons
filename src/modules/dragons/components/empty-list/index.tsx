import { GiDragonHead } from "react-icons/gi";
import './styles.scss'
import { Box } from "@/components/ui/box";

export function EmptyList() {
  return (
    <div className="empty-content">
      <Box className="empty-box">
        <GiDragonHead className="empty-icon" size={64} />
        <span>Ainda não existem dragões cadastrados</span>
      </Box>
    </div>
  )
}