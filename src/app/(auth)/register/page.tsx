import Link from 'next/link'

import { RegisterForm } from '@/components/register-form'

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <div className="my-6 self-center text-sm">
        <span className="text-slate-600">Already have an account?</span>
        <Link href="/login" className="text-brand-500 hover:underline">
          &nbsp;Login
        </Link>
      </div>
    </>
  )
}
