import { Box } from "@/components/ui/box";
import './styles.scss'
import { Button } from "@/components/ui/button";
import { dragonTypes } from "@/constants/dragon-types";
import type { DragonProps } from "@/shared/types/dragons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { SetStateAction } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSpikedDragonHead } from "react-icons/gi";
import { PiPencilFill, PiTrash } from "react-icons/pi";
import { useCard } from "../../hooks/useCard";

type CardProps = {
  as?: keyof HTMLElementTagNameMap
  id: string
  title: string
  type: keyof typeof dragonTypes
  createdAt: string
  histories: string[]
  updateList: (list: SetStateAction<DragonProps[]>) => void
}

export function Card({
  as = 'div',
  id,
  title,
  type,
  createdAt,
  histories,
  updateList,
}: CardProps) {

  const {
    isLoading,
    handleEditDragon,
    handleDeleteDragon,
  } = useCard({
    updateList,
  })

  const {
    title: typeTitle,
    icon
  } = dragonTypes[type] ?? {
    title: type,
  }

  return (
    <Box as={as} className="card-box">
      <GiSpikedDragonHead className="card-icon" />
      <div className="card-data">
        <div className="card-data-content">
          <div className="card-data-header">
            <strong className="card-data-header-title">{title}</strong>
            <div className="card-data-type">
              {icon && icon}
              <span className="card-data-type-text">
                {typeTitle}
              </span>
            </div>
          </div>
          <p className="card-data-description">
            {histories[0] || "História desconhecida"}
          </p>
          <div className="card-data-header-created">
            <span className="card-data-header-created-text">Criado em:</span>
            <span className="card-data-header-date">
              <FaCalendarAlt size={16} />
              {format(new Date(createdAt), 'dd/MM/yyyy hh:mm', { locale: ptBR })}
            </span>
          </div>
        </div>
        <div className="card-data-actions">
          <Button
            className="edit"
            onClick={() => handleEditDragon(id)}
            disabled={isLoading}
          >
            <PiPencilFill size={20} />
          </Button>
          <Button
            className="delete"
            onClick={() => handleDeleteDragon(id)}
            disabled={isLoading}
          >
            <PiTrash size={20} />
          </Button>
        </div>
      </div>
    </Box>
  )
}