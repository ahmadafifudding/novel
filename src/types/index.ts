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

export type CoverImage = {
  id: number
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    small: ImageFormat
    medium: ImageFormat
    thumbnail: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  folder_path: string
}

export type ImageFormat = {
  ext: string
  url: string
  hash: string
  mine: string
  name: string
  path?: string
  width: number
  height: number
  sizeInBytes: number
}

export type Novel = {
  id: number
  title: string
  author: string
  characters: string[]
  publication: string
  genre: string
  language: string
  ratings: number
  descriptions: string
  plotSummary: string
  cover: CoverImage
}
