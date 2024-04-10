import { Novel } from '@/types/novel'
import { fetchNovel } from '@/lib/data'
import { NovelDetails } from '@/components/novel-details'

type NovelResponse = {
  data: Novel
}
export default async function NovelPage({
  params: { id },
}: {
  params: { id: number }
}) {
  const data = await fetchNovel(id)
  return (
    <div className="px-4 py-6">
      <NovelDetails novel={data?.data} />
    </div>
  )
}
