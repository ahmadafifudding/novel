import { Metadata } from 'next'
import Link from 'next/link'

import { fetchCoutryCode } from '@/lib/data'
import { RegisterForm } from '@/components/register-form'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new account',
}

export default async function RegisterPage() {
  const data = await fetchCoutryCode()
  return (
    <div className="mx-auto max-w-xl">
      <div className="w-full">
        <h2 className="text-center text-2xl font-bold leading-9 -tracking-wide text-slate-900">
          Sign in to your account
        </h2>
      </div>
      <RegisterForm countryCode={data?.data ?? []} />
      <div className="my-6 text-center text-sm">
        <span className="text-slate-600">Already have an account?</span>
        <Link href="/login" className="text-brand-500 hover:underline">
          &nbsp;Login
        </Link>
      </div>
    </div>
  )
}
