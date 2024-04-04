async function getNovel(id: number) {
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
  return <>{id}</>
}
