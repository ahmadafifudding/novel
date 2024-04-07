import { FetchNovel } from "@/types/data"

const API = `${process.env.NEXT_PUBLIC_API_URL}/api`
const token = `Bearer ${process.env.API_TOKEN_NOVEL}`

export async function fetchNovels(): Promise<FetchNovel> {
    const res = await fetch(`${API}/listNovel?htmlToText=0`, {
        headers: {
            Authorization: token,
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch novels')
    }

    return res.json()
}