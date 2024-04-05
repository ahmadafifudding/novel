'use client'

import { useFormState } from 'react-dom'

import { register } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const initialState = {
  message: '',
}

export function RegisterForm() {
  const [state, formAction] = useFormState(register, initialState)

  return (
    <form action={formAction} className="space-y-3">
      <FormItem className="grid">
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input
          id="first-name"
          type="text"
          name="first-name"
          placeholder="Fatihah"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <FormItem className="grid">
        <FormLabel htmlFor="last-name">Last name</FormLabel>
        <Input
          id="last-name"
          type="text"
          name="last-name"
          placeholder="Safiya"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <FormItem className="grid">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@kacs.com.my"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <FormItem className="grid">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@kacs.com.my"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <FormItem className="grid">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@kacs.com.my"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <div className="mt-4 grid">
        <Button>Create account</Button>
      </div>
    </form>
  )
}
