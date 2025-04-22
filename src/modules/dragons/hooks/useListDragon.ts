import { getDragons } from '@/api/get-dragons'
import type { DragonProps } from '@/shared/types/dragons'
import { useEffect, useState } from 'react'

export function useListDragon() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [listDragons, setListDragons] = useState<DragonProps[]>([])

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
  }
}
