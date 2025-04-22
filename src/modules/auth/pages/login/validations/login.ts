import { z } from 'zod'

export const loginSchema = z.object({
  user: z.string().min(1, 'O usuário é obrigatório'),
  password: z.string().min(1, 'A senha é obrigatória'),
})

export type LoginProps = z.infer<typeof loginSchema>
