'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { CountryCode } from '@/types/country-code'
import { getDialCode } from '@/lib/utils'
import { RegisterSchema, registerSchema } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'

import { RadioGroup, RadioGroupItem } from './ui/radio-group'

interface RegisterFormProps {
  countryCode: CountryCode[]
}

export function RegisterForm({ countryCode }: RegisterFormProps) {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '',
      phoneNumber: '',
    },
  })

  async function onSubmit(formData: RegisterSchema) {
    try {
      setIsPending(true)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data?.error?.message)
        return
      }

      router.push(
        '/verification?identifier=' + formData.email + '&code=' + data?.otp
      )
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-6 sm:gap-x-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-full sm:col-span-3">
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <FormControl>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Nur"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-full sm:col-span-3">
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <FormControl>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Fatihah"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-full sm:col-span-4">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="text"
                  placeholder="example@kacs.com.my"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="countryCode"
          render={({ field }) => (
            <FormItem className="col-span-full sm:col-span-3">
              <FormLabel htmlFor="countryCode">Country Code</FormLabel>
              <Select
                onValueChange={(value) => {
                  form.setValue('countryCode', value)
                  form.setValue('phoneNumber', getDialCode(value, countryCode))
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country code" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-[280px]">
                  {countryCode.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.name} ({item.dialCode})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="col-span-full sm:col-span-3">
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <FormControl>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="60145464803"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onChange={field.onChange}
                  className="flex space-x-4 pt-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel>Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel>Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-full">
          <Button className="w-full" type="submit">
            {isPending ? <Spinner /> : 'Create Account'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
