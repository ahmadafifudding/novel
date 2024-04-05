'use client'

import { useFormState } from 'react-dom'

import { authenticate } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <div className="mt-4 grid">
        <Button>Sign in to continue</Button>
      </div>
    </form>
  )
}
