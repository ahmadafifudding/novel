'use client'

import { register } from '@/actions/auth'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

import { CountryCode } from '@/types/country-code'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface RegisterFormProps {
  countryCode: CountryCode[]
}

export function RegisterForm({ countryCode }: RegisterFormProps) {
  return (
    <form
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
      action={register}
    >
      <div className="space-y-2 sm:col-span-3">
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" type="text" name="firstName" placeholder="Nur" />
      </div>
      <div className="space-y-2 sm:col-span-3">
        <Label htmlFor="lastName">Last name</Label>
        <Input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Fatihah"
        />
      </div>
      <div className="space-y-2 sm:col-span-4">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@kacs.com.my"
        />
      </div>
      <div className="space-y-2 sm:col-span-3">
        <Label>Country code</Label>
        <Select name="countryCode">
          <SelectTrigger>
            <SelectValue placeholder="Select country code" />
          </SelectTrigger>
          <SelectContent>
            {countryCode.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                    {country.flag}
                  </div>
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 sm:col-span-3">
        <Label htmlFor="phoneNumber">Phone number</Label>
        <Input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          placeholder="0145464803"
        />
      </div>
      <div className="space-y-3 sm:col-span-4">
        <Label htmlFor="gender">Gender</Label>
        <RadioGroup id="gender" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
      </div>
      <RegisterButton />
    </form>
  )
}

function RegisterButton() {
  return (
    <div className="col-span-full">
      <Button type="submit" className="w-full">
        Register
      </Button>
    </div>
  )
}
