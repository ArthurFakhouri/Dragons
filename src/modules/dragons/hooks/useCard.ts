import { deleteDragon } from '@/api/delete-dragon'
import type { DragonProps } from '@/shared/types/dragons'
import { type MouseEvent, type SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router'

type UseCardProps = {
  updateList: (list: SetStateAction<DragonProps[]>) => void
}

export function useCard({ updateList }: UseCardProps) {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  function handleDragonDetails(id: string) {
    navigate(`/dragons/details/${id}`)
  }

  function handleEditDragon(event: MouseEvent<HTMLButtonElement>, id: string) {
    event.stopPropagation()
    navigate(`/dragons/register/${id}`)
  }

  async function handleDeleteDragon(
    event: MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    event.stopPropagation()
    setIsLoading(true)
    try {
      await deleteDragon(id)

      updateList((prev: DragonProps[]) =>
        prev.filter(dragon => dragon.id !== id)
      )
      alert('Dragão excluído com sucesso!')
    } catch (err) {
      console.error(err)
      alert('Não foi possível excluir o dragão')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    handleEditDragon,
    handleDeleteDragon,
    handleDragonDetails,
  }
}
