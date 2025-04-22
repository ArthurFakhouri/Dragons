import { api } from '../libs/axios'

export async function deleteDragon(id: string) {
  return await api.delete(`/${id}`)
}
