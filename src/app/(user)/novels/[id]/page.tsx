import { Novel } from '@/types'

import { NovelDetails } from '@/components/novel-details'

type NovelResponse = {
  data: Novel
}

async function getNovel(id: number): Promise<NovelResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/novel/${id}?htmlToText=0`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN_NOVEL}`,
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch novel')
  }

  return res.json()
}

export default async function NovelPage({
  params: { id },
}: {
  params: { id: number }
}) {
  const data = await getNovel(id)
  return (
    <div className="px-4 py-6">
      <NovelDetails novel={data?.data} />
    </div>
  )
}
