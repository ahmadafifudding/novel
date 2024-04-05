import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: string
  isActive?: boolean
}

export function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href ?? '#'}
        className={cn(
          'text-slate-900 hover:text-brand-500',
          isActive && 'text-brand-500'
        )}
      >
        {children}
      </Link>
    </li>
  )
}
