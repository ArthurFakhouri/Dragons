import { Button } from "@/components/ui/button"
import { EmptyList } from "../../components/empty-list"
import { useListDragon } from "../../hooks/useListDragon"
import './styles.scss'
import { Loading } from "@/components/loading"
import type { dragonTypes } from "@/constants/dragon-types"
import { PiPlusBold } from "react-icons/pi"
import { Card } from "../../components/card"

export function DragonsList() {

  const {
    isLoading,
    listDragons
  } = useListDragon()

  return (
    <div className="list-content"
    >
      <div className="list-content-header">
        <strong className="list-content-header-title">Lista de dragões</strong>
        <Button className="register-dragon">
          <PiPlusBold size={20} />
          Cadastrar dragão
        </Button>

      </div>
      {isLoading && <Loading className="list-content-loading" />}
      {!isLoading && listDragons.length === 0 && (
        <EmptyList />
      )}
      {!isLoading && listDragons.length > 0 && (
        <ul className="list-content-list-dragons">
          {listDragons.sort((dragonOdd, dragonEven) => dragonOdd.name.localeCompare(dragonEven.name)).map((dragon) => (
            <Card
              key={dragon.id}
              as="li"
              title={dragon.name}
              type={dragon.type.toLowerCase().trim() as keyof typeof dragonTypes}
              histories={dragon.histories}
              createdAt={dragon.createdAt}
            />
          ))}
        </ul>
      )}
    </div>
  )
}