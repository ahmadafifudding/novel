'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { validateOTP } from '@/lib/actions'
import { verificationSchema, VerificationSchema } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { FormItem } from '@/components/ui/custom-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Spinner } from '@/components/ui/spinner'

interface OTPVerificationFormProps {
  email: string
  code: string
}

export function OTPVerificationForm({ email, code }: OTPVerificationFormProps) {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  const form = useForm<VerificationSchema>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      identifier: email,
      code: '',
    },
  })

  async function onSubmit(values: VerificationSchema) {
    setIsPending(true)
    // validateOTP(values)

    // const response = await fetch('/api/validate-otp', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // })

    // const data = await response.json()

    // setIsPending(false)

    // if (!response.ok) {
    //   toast.error(data?.error?.message || 'Something went wrong')
    //   return
    // }

    // router.push('/novels')
  }

  return (
    <Form {...form}>
      <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-4 block text-center" htmlFor="code">
                One-Time Password ({code})
              </FormLabel>
              <FormControl>
                <div className="flex justify-center">
                  <InputOTP id="code" maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </FormControl>
              <FormDescription className="text-center">
                Please enter the verification we sent to&nbsp;
                <span className="font-semibold">{email}</span>
              </FormDescription>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />
        <div className="mt-8 grid">
          <Button type="submit">
            {isPending ? <Spinner className="mr-1" /> : 'Verify'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
