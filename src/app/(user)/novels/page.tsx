import { Novel } from '@/types'

import { NovelItem } from '@/components/novel-item'

type NovelResponse = {
  data: Novel[]
}

async function getNovels(): Promise<NovelResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/listNovel?htmlToText=0`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN_NOVEL}`,
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch novels')
  }

  return res.json()
}

export default async function NovelPage() {
  const data = await getNovels()
  console.log(data)

  return (
    <div className="mx-auto">
      <div className="max-w-container mx-auto grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-none md:grid-cols-5 md:gap-x-12">
        {data?.data.map((novel) => <NovelItem key={novel.id} novel={novel} />)}
      </div>
    </div>
  )
}
