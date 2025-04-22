import { AppRoutes } from './shared/routes'
import './globals.scss'
import { BrowserRouter } from 'react-router'

export function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}