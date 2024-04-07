'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { authenticate } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/custom-form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'

const initialState = {
  message: '',
}

export function LoginForm() {
  const [state, formAction] = useFormState(authenticate, initialState)

  return (
    <form action={formAction}>
      <FormItem className="grid">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@kacs.com.my"
        />
        <FormMessage>{state?.errors?.email || state.message}</FormMessage>
      </FormItem>
      <LoginButton />
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <div className="mt-4 grid">
      <Button>
        {pending ? <Spinner className="mr-1" /> : 'Sign in to continue'}
      </Button>
    </div>
  )
}
