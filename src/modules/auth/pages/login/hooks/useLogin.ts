import { zodResolver } from '@hookform/resolvers/zod'
import { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { type LoginProps, loginSchema } from '../validations/login'

export function useLogin() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  })

  function handleSignIn(data: LoginProps) {
    setIsLoading(true)
    setTimeout(() => {
      if (
        data.user === import.meta.env.VITE_USER &&
        data.password === import.meta.env.VITE_PASSWORD
      ) {
        const token = btoa(JSON.stringify(data))

        localStorage.setItem('@dragons-token', token)
        navigate('/dragons/list')
      } else {
        window.alert('Usuário não existe ou dados incorretos!')
      }
      setIsLoading(false)
    }, 1000)
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem('@dragons-token')

    const path = window.location.pathname
    if (token) {
      if (path === '/') {
        window.location.href = '/dragons/list'
      }
    }
  }, [])

  return {
    errors,
    isLoading,
    onSubmit: handleSubmit(handleSignIn),
    register,
  }
}
