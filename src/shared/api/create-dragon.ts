import type { CreateDragonProps } from '@/modules/dragons/validations/register-dragon'
import { api } from '../libs/axios'

export async function createDragon(data: CreateDragonProps) {
  return await api.post('/', {
    name: data.name,
    type: data.type,
    histories: data.histories.map(history => history.history),
  })
}
