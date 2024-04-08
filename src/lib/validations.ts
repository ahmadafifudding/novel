import { Coda } from 'next/font/google';
import { z } from 'zod';

export const email = z.string({
    required_error: "Please provide an email"
}).email({
    message: "Please provide a valid email"
});

export const loginSchema = z.object({
    identifier: email
})

export const authenticateSchema = z.object({
    identifier: email,
    code: z.string().length(6, {})
})

export const registerSchema = z.object({
    email,
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    gender: z.enum(['male', 'female']),
    countryCode: z.string().length(2),
    phoneNumber: z.string().min(10),
})

export const verificationSchema = z.object({
    identifier: email,
    code: z.string().length(6, {
        message: "Your one-time password must be 6 characters."
    })
});


export type VerificationSchema = z.infer<typeof verificationSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;