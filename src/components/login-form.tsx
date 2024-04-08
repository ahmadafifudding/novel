'use client'

import { useFormState } from 'react-dom'

import { login } from '@/lib/actions'

export function LoginForm() {
  const [] = useFormState(login, { message: '' })
  return <p>Test</p>
}
