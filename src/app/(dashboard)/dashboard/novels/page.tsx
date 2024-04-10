import { Metadata } from 'next'

import { fetchNovels } from '@/lib/data'
import { NovelItem } from '@/components/novel-item'

export const metadata: Metadata = {
  title: 'Novels',
  description: 'List of novels',
}

export default async function NovelPage() {
  const data = await fetchNovels()

  return (
    <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-none md:grid-cols-5 md:gap-x-12">
      {data?.data.map((novel) => <NovelItem key={novel.id} novel={novel} />)}
    </div>
  )
}
