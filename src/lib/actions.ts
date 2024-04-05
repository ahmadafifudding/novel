'use server'

import { loginSchema, registerSchema } from "@/lib/validations"

export async function authenticate(_currentState: any, formData: FormData) {
    const validatedFields = loginSchema.safeParse({
        email: formData.get('email') as string
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    return {
        message: "Please enter a valid email"
    }
}

export async function register(_currentState: any, formData: FormData) {
    const validatedFields = registerSchema.safeParse({
        email: formData.get('email') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        gender: formData.get("gender") as string,
        countryCode: formData.get('countryCode') as string,
        phoneNumber: formData.get('phoneNumber') as string,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    return {
        message: "Please enter a valid email"
    }

}
