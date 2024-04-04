'use server'

export async function authenticate(_currentState: unknown, formData: any) {
    try {
        alert("authenticated")
    } catch (error) {
        alert("error")
    }
}