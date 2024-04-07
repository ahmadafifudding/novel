import { useState } from 'react'
import { CountryCode } from '@/types'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface SelectCountryCodeProps {
  options: CountryCode[]
}

export function SelectCountryCode({ options }: SelectCountryCodeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.code === value)?.name
            : 'Select country code'}
          <ChevronUpDownIcon className="h-4 w-4 text-slate-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country code..." />
          <CommandEmpty>No country code found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {options.map((option) => (
                <CommandItem
                  key={option.code}
                  value={option.code}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setIsOpen(false)
                  }}
                >
                  {option.name}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
