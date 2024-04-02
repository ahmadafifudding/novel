import Link from 'next/link'

import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className="my-6 self-center text-sm">
        <span className="text-slate-600">Don&apos;t have an account?</span>
        <Link href="/register" className="text-brand-500 hover:underline">
          &nbsp;Register
        </Link>
      </div>
    </>
  )
}
