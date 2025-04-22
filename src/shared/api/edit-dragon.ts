import type { EditDragonProps } from '@/modules/dragons/validations/register-dragon'
import { api } from '../libs/axios'

export async function editDragon({ id, ...data }: EditDragonProps) {
  return await api.put(`/${id}`, {
    name: data.name,
    type: data.type,
    histories: data.histories.map(history => history.history),
  })
}
