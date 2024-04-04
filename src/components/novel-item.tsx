import Image from 'next/image'
import { Novel } from '@/types'

export function NovelItem({ novel }: { novel: Novel }) {
  const { title, author, cover } = novel
  return (
    <div className="grid">
      <div>
        <h1 className="mt-1 text-lg font-semibold">{title}</h1>
        <p className="text-sm font-medium leading-4">{author}</p>
      </div>
      <div>
        <Image
          alt={title}
          src={cover?.formats?.thumbnail?.url}
          className="h-60 w-full rounded-lg object-cover"
          width={cover?.formats?.thumbnail?.width}
          height={cover?.formats?.thumbnail?.height}
        />
      </div>
    </div>
  )
}
