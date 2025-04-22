import authBackground from '@/assets/auth-background.jpg'
import './styles.scss'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { useAuthenticated } from '@/shared/hooks/useAuthenticated'
import { VscSignOut } from 'react-icons/vsc'
import { Outlet } from 'react-router'

export function AuthenticatedLayout() {

  const {
    handleSignOut,
  } = useAuthenticated()

  return (
    <div>
      <header className='auth-header'>
        <div className='auth-header-content'>
          <Logo />
          <Button variant='tertiary' onClick={handleSignOut}>
            <VscSignOut size={28} />
          </Button>
        </div>
      </header>
      <main className='auth-main-content'>
        <img className='auth-image' src={authBackground} alt={'auth-background'} />
        <div className='auth-content'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}