import { Button } from '@/components/ui/button'
import { useDetails } from '../../hooks/useDetails'
import './styles.scss'
import { Loading } from '@/components/loading'
import { Box } from '@/components/ui/box'
import { dragonTypes } from '@/constants/dragon-types'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FaCalendarAlt } from 'react-icons/fa'
import { GiSpikedDragonHead } from 'react-icons/gi'

export function DragonsDetails() {

  const {
    isLoading,
    dragonDetails,
    handleBackToList,
  } = useDetails()

  if (isLoading || dragonDetails === null) return <Loading className='details-loading' />

  const type = dragonDetails.type.toLowerCase()

  const {
    title: typeTitle,
    icon
  } = dragonTypes[type as keyof typeof dragonTypes] ?
      dragonTypes[type as keyof typeof dragonTypes]
      : {
        title: type || '',
      }

  return (
    <Box className='details'>
      <strong>Detalhes do dragão</strong>
      <div className='details-box-icon'>
        <GiSpikedDragonHead size={32} className='details-icon' />
      </div>
      <div className='details-data'>
        <strong className='details-data-title'>{dragonDetails.name}</strong>
        <div className="details-data-type">
          {icon && icon}
          <span className="details-data-type-text">
            {typeTitle}
          </span>
        </div>
      </div>
      <div className="details-data-header-created">
        <span className="details-data-header-created-text">Criado em:</span>
        <span className="details-data-header-date">
          <FaCalendarAlt size={16} />
          {format(new Date(dragonDetails.createdAt), 'dd/MM/yyyy hh:mm', { locale: ptBR })}
        </span>
      </div>
      <ul className='details-histories'>
        {dragonDetails.histories.map((history, index) => {
          return (
            <li key={`history${index + 1}`}>
              <strong className='details-history-title'>{index + 1}a história</strong>
              <p className='details-history-description'>
                {history}
              </p>
            </li>
          )
        })}
      </ul>
      <Button variant='secondary' onClick={handleBackToList}>
        Voltar
      </Button>
    </Box>
  )
}