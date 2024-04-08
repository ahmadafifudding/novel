import { Metadata } from 'next'
import { SearchParams } from '@/types'

import { VerifyOTPForm } from '@/components/verify-otp-form'

export const metadata: Metadata = {
  title: 'Verify OTP',
  description: 'Enter the verification code we sent to your email address',
}

export default function VerificationPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const identifier = searchParams.identifier as string
  const code = Number(searchParams.code)

  return (
    <>
      <div className="space-y-3 text-center">
        <h4 className="text-xl font-bold tracking-tight text-slate-900">
          OTP Verification
        </h4>
      </div>
      <VerifyOTPForm identifier={identifier} code={code} />
    </>
  )
}
