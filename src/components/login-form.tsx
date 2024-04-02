'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { loginSchema, LoginSchema } from '@/lib/validations'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Button } from './ui/button'

export function LoginForm() {
  const form = useForm<LoginSchema>({
    defaultValues: {
      email: 'tester1@gmail.com',
    },
    resolver: zodResolver(loginSchema),
  })
  return (
    <Form {...form}>
      <form>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid md:grid-cols-12">
                <div className="col-span-12">
                  <FormLabel htmlFor="email-address">Email address</FormLabel>
                </div>
                <FormControl className="col-span-12">
                  <Input
                    id="email-address"
                    placeholder="example@kacs.com.my"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="mt-2">Login with Email</Button>
        </div>
      </form>
    </Form>
  )
}
