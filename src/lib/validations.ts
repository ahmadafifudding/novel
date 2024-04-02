import { z } from 'zod';

export const email = z.string().email();

export const loginSchema = z.object({
    email,
})

export const registerSchema = z.object({
    email,
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    gender: z.enum(['male', 'female']),
    countryCode: z.string().length(2),
    phoneNumber: z.string().min(10),
})


export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;