import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { SearchParams } from '@/types'

import { VerifyOTPForm } from '@/components/verify-otp-form'

export const metadata: Metadata = {
  title: 'Verify OTP',
  description: 'Enter the verification code we sent to your email address',
}

export default async function VerificationPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const identifier = searchParams.identifier as string
  const code = Number(searchParams.code)

  const session = await auth()
  if (session) return redirect('/dashboard')

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="space-y-3 text-center">
        <h4 className="text-xl font-bold tracking-tight text-slate-900">
          OTP Verification
        </h4>
      </div>
      <VerifyOTPForm identifier={identifier} code={code} />
    </div>
  )
}
