'use server'

import { loginSchema, registerSchema } from "@/lib/validations"
import { env } from "@/lib/env.mjs"
import { redirect } from "next/navigation"

export async function authenticate(_currentState: any, formData: FormData) {
    const email = formData.get('email') as string
    const validatedFields = loginSchema.safeParse({
        email
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.API_TOKEN_NOVEL}`
        },
        body: JSON.stringify({ identifier: email }),
    })

    const data = await response.json()

    if (!response.ok) {
        return {
            message: data?.error?.message || 'Something went wrong',
        }
    }

    console.log(data)

    const redirectUrl = `/verification?email=${email}&code=${data?.otp}`
    redirect(redirectUrl)
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

export async function validateOTP(formData: FormData) {
    console.log(formData)
}
