import { Novel } from '@/types/novel'
import { CountryCode } from '@/types/country-code'

export type FetchNovels = {
    data: Novel[]
}

export type FetchNovel = {
    data: Novel
}

export type FetchCountryCode = {
    data: CountryCode[]
}