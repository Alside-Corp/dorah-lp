import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.').max(120, 'Use até 120 caracteres.'),
  email: z.string().trim().email('Informe um e-mail válido.').max(254, 'E-mail muito longo.'),
  phone: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .pipe(z.string().regex(/^[1-9]{2}\d{8,9}$/, 'Informe o telefone com DDD e 10 ou 11 dígitos.')),
  company: z.string().trim().min(2, 'Informe a empresa.').max(160, 'Use até 160 caracteres.'),
});

export type ContactInput = z.input<typeof contactSchema>;
