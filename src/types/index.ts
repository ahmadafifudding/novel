export type SearchParams = {
  [key: string]: string | string[] | undefined
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
  links: {
    github?: string
    twitter?: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  exact?: boolean
}

export type DashboardConfig = {
  mainNav: NavItem[]
}

