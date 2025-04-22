import { api } from '../libs/axios'
import type { DragonProps } from '../types/dragons'

export async function getDragons() {
  const { data } = await api.get<DragonProps[]>('/')

  return data
}
