import { Metadata } from 'next'
import Image from 'next/image'
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
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
        <div>
          <Image
            className="mx-auto h-10 w-auto"
            src="/logo.svg"
            alt="Novel KACS"
            width={40}
            height={40}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 -tracking-wide text-slate-900">
            Sign in to your account
          </h2>
        </div>
        <RegisterForm countryCode={data?.data ?? []} />
      </div>
      <div className="my-6 text-center text-sm">
        <span className="text-slate-600">Already have an account?</span>
        <Link href="/login" className="text-brand-500 hover:underline">
          &nbsp;Login
        </Link>
      </div>
    </>
  )
}
