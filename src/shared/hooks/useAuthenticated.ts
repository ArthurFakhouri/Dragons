import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router'

export function useAuthenticated() {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const token = localStorage.getItem('@dragons-token')

    const path = window.location.pathname
    if (!token) {
      if (path !== '/') {
        window.location.href = '/'
      }
    }
  }, [])

  function handleSignOut() {
    localStorage.removeItem('@dragons-token')
    navigate('/')
  }

  return {
    handleSignOut,
  }
}
