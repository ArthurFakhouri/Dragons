import dragonBackground from '@/assets/background.jpg'
import type { ReactNode } from "react"
import './styles.scss'

type FullScrenProps = {
  children: ReactNode
}

export function FullScreenLayout({
  children,
}: FullScrenProps) {
  return (
    <div className='fullscreen'>
      <img className='dragon-background' src={dragonBackground} alt="dragon-background" />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}