import { env } from 'process'
import { Metadata } from 'next'
import Link from 'next/link'
import { CountryCode } from '@/types'

import { RegisterForm } from '@/components/register-form'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new account',
}

interface CountryCodeResponse {
  data: CountryCode[]
}

async function getCountryCodes(): Promise<CountryCodeResponse> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/countryCode`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN_NOVEL}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch country code')
  }

  return res.json()
}

export default async function RegisterPage() {
  const data = await getCountryCodes()
  return (
    <>
      <RegisterForm countryCode={data?.data ?? []} />
      <div className="my-6 self-center text-sm">
        <span className="text-slate-600">Already have an account?</span>
        <Link href="/login" className="text-brand-500 hover:underline">
          &nbsp;Login
        </Link>
      </div>
    </>
  )
}
