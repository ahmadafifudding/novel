'use client'

import { CountryCode } from '@/types'
import { useFormState } from 'react-dom'

import { register } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { FormItem, FormLabel, FormMessage } from '@/components/ui/custom-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SelectCountryCode } from './select-country-code'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

interface RegisterFormProps {
  countryCode: CountryCode[]
}

const initialState = {
  message: '',
}

export function RegisterForm({ countryCode }: RegisterFormProps) {
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
        <FormLabel htmlFor="phone-number">Phone</FormLabel>
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-x-2">
          <SelectCountryCode options={countryCode} />
          <Input
            id="phone-number"
            type="tel"
            name="phone-number"
            placeholder="0145464803"
          />
        </div>
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
        <FormLabel htmlFor="email">Gender</FormLabel>
        <RadioGroup className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male">
              Male
            </RadioGroupItem>
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female">
              Female
            </RadioGroupItem>
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <div className="mt-4 grid">
        <Button>Create account</Button>
      </div>
    </form>
  )
}
