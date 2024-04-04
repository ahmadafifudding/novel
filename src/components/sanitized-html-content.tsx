'use client'

import DOMPurify from 'dompurify'

type SanitizedHtmlContentProps = {
  content: string
}

export function SanitizedHtmlContent({ content }: SanitizedHtmlContentProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    ></div>
  )
}
