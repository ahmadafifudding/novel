import { z } from 'zod';

export const email = z.string().email({
    message: "Please enter a valid email"
});

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

export const verificationSchema = z.object({
    identifier: email,
    code: z.string().length(6, {
        message: "Your one-time password must be 6 characters."
    })
});


export type VerificationSchema = z.infer<typeof verificationSchema>;