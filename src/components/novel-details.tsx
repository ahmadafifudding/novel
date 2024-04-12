import Image from 'next/image'
import { StarIcon, UserIcon } from '@heroicons/react/24/outline'

import { Novel } from '@/types/novel'
import { SanitizedHtmlContent } from '@/components/sanitized-html-content'

type NovelDetailsProps = {
  novel: Novel
}

export function NovelDetails({ novel }: NovelDetailsProps) {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_URL

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
      <div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 lg:row-start-1 lg:bg-none lg:p-0">
        <h1 className="flex text-lg font-semibold text-white lg:text-slate-900">
          {novel.title}
        </h1>
        <p className="text-sm font-medium leading-4 text-white lg:text-slate-500">
          {novel.author}
        </p>
      </div>
      <div className="col-start-1 col-end-3 row-start-1 grid lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0">
        <Image
          alt={novel.title}
          src={`${baseImageUrl}${novel?.cover?.formats?.small?.url}`}
          className="w-full rounded-lg object-cover lg:hidden"
          width={novel?.cover?.formats?.small?.width}
          height={novel?.cover?.formats?.small?.height}
        />
        <Image
          alt={novel.title}
          src={`${baseImageUrl}${novel?.cover?.formats?.medium?.url}`}
          className="hidden w-full rounded-lg object-cover lg:block"
          width={novel?.cover?.formats?.medium?.width}
          height={novel?.cover?.formats?.medium?.height}
          priority
        />
      </div>
      <dl className="row-start-2 mt-4 flex items-center text-xs font-medium lg:row-start-2">
        <dt className="sr-only">Reviews</dt>
        <dd className="flex items-center text-brand-600">
          <StarIcon
            className="mr-1 h-4 w-4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <span>{novel.ratings}</span>
        </dd>
        <dt className="sr-only">Author</dt>
        <dd className="mx-3 flex items-center">
          <UserIcon
            className="mr-1 h-4 w-4 text-slate-400"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <span>{novel.author}</span>
        </dd>
      </dl>
      <div className="col-start-1 mt-4 text-sm leading-6 lg:col-span-1 lg:row-start-3 lg:mt-6">
        <div>
          <SanitizedHtmlContent content={novel.descriptions} />
        </div>
        <h6 className="mt-4 text-sm font-semibold leading-6 text-slate-700">
          Plot Summary:
        </h6>
        <div>
          <SanitizedHtmlContent content={novel.plotSummary} />
        </div>
      </div>
    </div>
  )
}
