import { Metadata } from 'next'
import Link from 'next/link'

import { LoginForm } from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Log in to your account',
}

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
