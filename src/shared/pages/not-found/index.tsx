import { FullScreenLayout } from '@/shared/layouts/full-screen'
import { Box } from '../../components/ui/box'
import { Link } from '../../components/ui/link'
import './styles.scss'
import { useMemo } from 'react'

export function NotFound() {

  const linkTo = useMemo(() => {
    const token = localStorage.getItem('@dragons-token')

    if (token) {
      return '/dragons/list'
    }
    return '/'
  }, [localStorage.getItem('@dragons-token')])

  return (
    <FullScreenLayout>
      <Box className='not-found-box'>
        <strong className='fourofour'>404</strong>
        <span className='description'>
          A página não foi encontrada! {" "}
          <Link to={linkTo}>Clique aqui para voltar!</Link>
        </span>
      </Box>
    </FullScreenLayout>
  )
}