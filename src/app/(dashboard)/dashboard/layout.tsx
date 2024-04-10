import { ReactNode } from 'react'

import { Navbar } from '@/components/navbar'

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="sm:px-8 sm:pt-8">
        <div className="mx-auto max-w-container">{children}</div>
      </main>
    </div>
  )
}
