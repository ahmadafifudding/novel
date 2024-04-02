'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { registerSchema, RegisterSchema } from '@/lib/validations'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Button } from './ui/button'

export function RegisterForm() {
  const form = useForm<RegisterSchema>({
    defaultValues: {
      email: 'tester1@gmail.com',
      firstName: 'Tester',
      lastName: '1',
      gender: 'male',
      countryCode: 'MY',
      phoneNumber: '60123456789',
    },
    resolver: zodResolver(registerSchema),
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
                  <FormLabel htmlFor="email-address">First name</FormLabel>
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
          <Button className="mt-2">Create account</Button>
        </div>
      </form>
    </Form>
  )
}
