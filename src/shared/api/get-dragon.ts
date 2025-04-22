import { api } from '../libs/axios'
import type { DragonProps } from '../types/dragons'

export async function getDragon(id: string) {
  const { data } = await api.get<DragonProps>(`/${id}`)

  return data
}
