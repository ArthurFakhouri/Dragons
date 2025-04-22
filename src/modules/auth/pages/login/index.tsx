import './styles.scss'
import { Loading } from '@/components/loading'
import { Logo } from '@/shared/components/logo'
import { Box } from '@/shared/components/ui/box'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { FullScreenLayout } from '@/shared/layouts/full-screen'
import { useLogin } from './hooks/useLogin'

export function Login() {

  const {
    errors,
    isLoading,
    onSubmit,
    register,
  } = useLogin()

  return (
    <FullScreenLayout>
      <Box as='form' className='login-box' onSubmit={onSubmit}>
        <Logo />
        <strong className='sub-title'>Bem-vindo, bravo aventureiro</strong>
        <Input
          {...register('user')}
          autoComplete='username'
          placeholder='Aventureiro'
          error={errors.user?.message}
        />
        <Input
          type='password'
          {...register('password')}
          autoComplete='current-password'
          placeholder='Senha'
          error={errors.password?.message}
        />
        <Button disabled={isLoading} type='submit'>
          {isLoading && <Loading />}
          {!isLoading && "Entrar"}
        </Button>
      </Box>
    </FullScreenLayout>
  )
}