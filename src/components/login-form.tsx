'use client'

import { login } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'

export function LoginForm() {
  const [state, dispatch] = useFormState(login, { message: '' })

  const isError = Boolean(state.errors?.identifier || state.message)
  const errorMessage = state.errors?.identifier || state.message

  return (
    <form action={dispatch}>
      <div className="grid space-y-2">
        <Label htmlFor="identifier">Email address</Label>
        <Input
          id="identifier"
          type="email"
          name="identifier"
          placeholder="example@kacs.com.my"
        />
      </div>
      {isError && <FormMessage>{errorMessage}</FormMessage>}
      <LoginButton />
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <div className="mt-6 grid">
      <Button disabled={pending}>
        {pending ? <Spinner /> : 'Login with email'}
      </Button>
    </div>
  )
}
