'use client'

import { authenticate } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

type VerifyOTPFormProps = {
  identifier: string
  code: number
}

export function VerifyOTPForm({ identifier, code }: VerifyOTPFormProps) {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch} className="mt-6 space-y-3">
      <div className="sr-only grid space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" value={identifier} />
      </div>
      <div className="grid space-y-2">
        <Label htmlFor="code" className="mb-4 text-center">
          One-Time Password ({code})
        </Label>
        <div className="flex justify-center">
          <InputOTP id="code" name="code" maxLength={6}>
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
        <FormMessage className="text-center">Testing error message</FormMessage>
        <FormDescription className="text-center">
          Please enter the verification code we sent to&nbsp;
          <span className="font-bold">{identifier}</span>
        </FormDescription>
      </div>
      <VerifyButton />
    </form>
  )
}

function VerifyButton() {
  const { pending } = useFormStatus()

  return (
    <div className="grid">
      <Button disabled={pending}>Verify</Button>
    </div>
  )
}
