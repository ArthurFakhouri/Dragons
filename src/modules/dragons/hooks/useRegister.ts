import { createDragon } from '@/api/create-dragon'
import { editDragon } from '@/api/edit-dragon'
import { getDragon } from '@/api/get-dragon'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import {
  type CreateDragonProps,
  createDragonSchema,
} from '../validations/register-dragon'

export function useRegister() {
  const navigate = useNavigate()
  const params = useParams()

  const [isLoading, setIsLoading] = useState(false)

  const {
    reset,
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateDragonProps>({
    resolver: zodResolver(createDragonSchema),
    defaultValues: {
      name: '',
      type: '',
      histories: [
        {
          history: '',
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'histories',
  })

  async function handleCreateDragon(data: CreateDragonProps) {
    setIsLoading(true)
    try {
      await createDragon(data)

      alert('Dragão criado com sucesso!')
      reset()
    } catch (err) {
      console.error(err)
      window.alert('Não foi possível registrar o dragão')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleEditDragon(data: CreateDragonProps) {
    setIsLoading(true)
    try {
      await editDragon({
        id: params.id!,
        ...data,
      })

      alert('Dragão editado com sucesso!')
      reset()
      handleBackToList()
    } catch (err) {
      console.error(err)
      window.alert('Não foi possível registrar o dragão')
    } finally {
      setIsLoading(false)
    }
  }

  function handleRegisterDragon(data: CreateDragonProps) {
    if (params.id === '-1') {
      handleCreateDragon(data)
    } else {
      handleEditDragon(data)
    }
  }

  function handleAddHistory() {
    append({
      history: '',
    })
  }

  function handleRemoveHistory(index: number) {
    remove(index)
  }

  function handleBackToList() {
    navigate('/dragons/list')
  }

  useEffect(() => {
    async function loadDragonData() {
      try {
        const dragon = await getDragon(params.id!)

        setValue('name', dragon.name)
        setValue('type', dragon.type)
        setValue(
          'histories',
          dragon.histories.map(history => {
            return {
              history,
            }
          })
        )
      } catch (err) {
        console.log(err)
        navigate('/not-found')
      }
    }

    if (Number.parseInt(params.id!) !== -1) {
      loadDragonData()
    }
  }, [params])

  return {
    fields,
    errors,
    isLoading,
    register,
    handleAddHistory,
    handleBackToList,
    handleRemoveHistory,
    onSubmit: handleSubmit(handleRegisterDragon),
  }
}
