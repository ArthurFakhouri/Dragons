import { getDragon } from '@/api/get-dragon'
import type { DragonProps } from '@/shared/types/dragons'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export function useDetails() {
  const navigate = useNavigate()
  const params = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [dragonDetails, setDragonDetails] = useState<DragonProps | null>(null)

  function handleBackToList() {
    navigate('/dragons/list')
  }

  useEffect(() => {
    async function loadDragon() {
      setIsLoading(true)
      try {
        const dragon = await getDragon(params.id!)

        setDragonDetails(dragon)
      } catch (err) {
        console.error(err)
        navigate('/not-found')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      loadDragon()
    }
  }, [params])

  return {
    isLoading,
    dragonDetails,
    handleBackToList,
  }
}
