export type Gender = "Male" | "Female"

export type User = {
    id: number
    username: string
    email: string
    provider: string
    resetPasswordToken: string | null
    confirmationToken: string | null
    confirmed: boolean
    blocked: boolean
    gender: Gender
    nationality: string
    phoneNumber: string
    firstName: string
    lastName: string
}