import { z } from 'zod';

export const email = z.string({
    required_error: 'Please provide an email.'

}).email({
    message: 'Please provide a valid email.'
});

export const loginSchema = z.object({
    identifier: email
})

export const authenticateSchema = z.object({
    identifier: email,
    code: z.string({
        required_error: 'Please provide your one-time password.'
    }).length(6, {
        message: "Your one-time password must be 6 characters."
    })
})

export const registerSchema = z.object({
    email,
    firstName: z.string({
        required_error: 'Please provide your first name.'
    }).min(1, {
        message: 'First name must be at least 1 character.'

    }),
    lastName: z.string({
        required_error: 'Please provide your last name.'
    }).min(1, {
        message: 'Last name must be at least 1 character.'

    }),
    gender: z.enum(['male', 'female'], {
        required_error: 'Please select a gender.'
    }),
    countryCode: z.string({
        required_error: 'Please select a country code.'
    }).length(2, {
        message: 'Please select a valid country code.'
    }),
    phoneNumber: z.string({
        required_error: 'Please provide your phone number.',
        invalid_type_error: 'Please provide a valid phone number.'
    }).min(10, {
        message: 'Phone number must be at least 10 characters.'

    }),
})


export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type AuthenticateSchema = z.infer<typeof authenticateSchema>;

