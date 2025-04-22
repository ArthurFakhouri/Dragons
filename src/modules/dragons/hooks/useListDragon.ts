import { getDragons } from '@/api/get-dragons'
import type { DragonProps } from '@/shared/types/dragons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export function useListDragon() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [listDragons, setListDragons] = useState<DragonProps[]>([])

  function handleRegisterDragon() {
    navigate('/dragons/register/-1')
  }

  useEffect(() => {
    async function loadDragons() {
      setIsLoading(true)
      try {
        const dataDragons = await getDragons()

        setListDragons(dataDragons)
      } catch (error) {
        window.alert(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadDragons()
  }, [])

  return {
    isLoading,
    listDragons,
    setListDragons,
    handleRegisterDragon,
  }
}
