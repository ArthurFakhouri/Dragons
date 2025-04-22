import { z } from 'zod'

export const createDragonSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  type: z
    .string()
    .min(3, { message: 'O tipo deve ter no mínimo 3 caracteres' }),
  histories: z.array(
    z.object({
      history: z
        .string()
        .min(3, { message: 'A história deve ter no mínimo 3 caracteres' })
        .max(500, { message: 'A história deve ter no máximo 500 caracteres' }),
    })
  ),
})

export type CreateDragonProps = z.infer<typeof createDragonSchema>
export type EditDragonProps = CreateDragonProps & {
  id: string
}
