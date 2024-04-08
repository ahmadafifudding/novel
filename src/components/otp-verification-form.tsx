'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { authenticate } from '@/lib/actions'
import { Button } from '@/components/ui/button'

export function VerifyOTPForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch}>
      <label htmlFor="identifier">Email</label>
      <input id="identifier" type="email" name="idetifier" />
      <label htmlFor="code">Code</label>
      <input id="code" type="text" name="code" />
      <button type="submit">Verify</button>
    </form>
  )
}

function VerifyButton() {
  const { pending } = useFormStatus()

  return <Button aria-disabled={pending}>Verify</Button>
}
