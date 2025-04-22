import { Box } from '@/components/ui/box'
import './styles.scss'
import { Loading } from '@/components/loading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TextArea } from '@/components/ui/text-area'
import { PiPlusBold, PiTrash } from 'react-icons/pi'
import { useRegister } from '../../hooks/useRegister'

export function DragonsRegister() {

  const {
    fields,
    errors,
    isLoading,
    onSubmit,
    register,
    handleAddHistory,
    handleBackToList,
    handleRemoveHistory,
  } = useRegister()

  return (
    <Box className='register'>
      <strong>Registro de dragão</strong>
      <form className='register-form' onSubmit={onSubmit}>
        <Input
          {...register('name')}
          placeholder='Digite o nome do dragão'
          error={errors.name?.message}
        />
        <Input
          {...register('type')}
          placeholder='Digite o tipo do dragão (fogo, água, fúria, etc.)'
          error={errors.type?.message}
        />
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <TextArea
                placeholder='Digite a história do dragão'
                defaultValue={field.history}
                {...register(`histories.${index}.history`)}
                error={errors.histories?.[index]?.history?.message}
              />
              {index !== 0 &&
                <Button
                  className='register-remove-history'
                  variant='secondary'
                  onClick={() => handleRemoveHistory(index)}
                >
                  <PiTrash size={16} />
                  remover história
                </Button>}
            </div>
          )
        })}
        <Button
          variant='secondary'
          className='register-add-history'
          onClick={handleAddHistory}
        >
          <PiPlusBold />
          <span>Adicionar história</span>
        </Button>
        <div className='register-actions'>
          <Button
            variant='secondary'
            onClick={handleBackToList}
            disabled={isLoading}
          >
            Voltar
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loading />}
            {!isLoading && 'Salvar'}
          </Button>
        </div>
      </form>
    </Box>
  )
}