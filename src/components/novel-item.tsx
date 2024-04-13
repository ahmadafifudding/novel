import Image from 'next/image'
import Link from 'next/link'

import { Novel } from '@/types/novel'
import { getYear } from '@/lib/utils'

export function NovelItem({ novel }: { novel: Novel }) {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_URL
  const { id, title, author, cover, ratings, publication, genre } = novel

  return (
    <article className="flex items-center space-x-6 p-6 sm:space-x-0 sm:p-0 md:grid">
      <Image
        alt={title}
        src={`${baseImageUrl}${cover?.formats?.thumbnail?.url}`}
        className="h-[88px] w-[60px] rounded-lg object-cover sm:hidden"
        width={cover?.formats?.thumbnail?.width}
        height={cover?.formats?.thumbnail?.height}
      />
      <Image
        alt={title}
        src={`${baseImageUrl}${cover?.formats?.small?.url}`}
        className="hidden rounded-lg object-cover sm:block"
        width={cover?.formats?.small?.width}
        height={cover?.formats?.small?.height}
      />
      <div className="relative min-w-0 flex-auto md:py-4">
        <div className="sm:h-12">
          <Link
            href={`/novels/${id}`}
            className="line-clamp-1 pr-20 font-semibold text-slate-900
          hover:text-brand-500 sm:line-clamp-2 sm:pr-0"
          >
            {title}
          </Link>
        </div>
        <dl className="mt-2 flex flex-wrap text-sm font-medium leading-6">
          <div className="absolute right-0 top-0 flex items-center space-x-1 sm:hidden">
            <dt className="text-brand-500">
              <span className="sr-only">Star Rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd>{ratings}</dd>
          </div>
          <div className="sm:hidden">
            <dt className="sr-only">Year</dt>
            <dd>{getYear(publication)}</dd>
          </div>
          <div className="ml-2 sm:hidden">
            <dt className="sr-only">Genre</dt>
            <dd>{genre}</dd>
          </div>
          <div className="mt-2 w-full flex-none font-normal sm:hidden">
            <dt className="sr-only">Author</dt>
            <dd className="text-slate-400">{author}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
