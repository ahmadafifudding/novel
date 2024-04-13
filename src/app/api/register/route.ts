import { env } from "@/lib/env.mjs"

export async function POST(req: Request) {
    const body = await req.json()

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.API_TOKEN_NOVEL}`,
        },
        body: JSON.stringify(body),
    })

    const data = await response.json()

    return Response.json(data, { status: response.status })
}