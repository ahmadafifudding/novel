import { Metadata } from 'next'
import { SearchParams } from '@/types'

import { OTPVerificationForm } from '@/components/otp-verification-form'

export const metadata: Metadata = {
  title: 'Verify OTP',
  description: 'Enter the verification code we sent to your email address',
}

export default function VerificationPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const email = searchParams.email as string
  const code = searchParams.code as string

  return (
    <>
      <div className="space-y-3 text-center">
        <h4 className="text-xl font-bold tracking-tight text-slate-900">
          OTP Verification
        </h4>
      </div>
      <OTPVerificationForm email={email} code={code} />
    </>
  )
}
