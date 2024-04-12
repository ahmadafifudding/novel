'use client'

import { usePathname } from 'next/navigation'
import { NavItem } from '@/types'

import { NavLink } from './nav-link'

interface NavLinkProps {
  navs: NavItem[]
}

export function Nav({ navs }: NavLinkProps) {
  const path = usePathname()

  return (
    <nav className="mx-6 text-sm font-medium text-slate-700">
      <ul className="flex items-center space-x-8">
        {navs.map((nav) => {
          const isActive = nav.exact
            ? path === nav.href
            : path.startsWith(nav.href)

          return (
            <NavLink key={nav.href} href={nav.href} isActive={isActive}>
              {nav.title}
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}
