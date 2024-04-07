import * as React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const spinnerVariants = cva('animate-spin text-white', {
  variants: {
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface SpinnerProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <ArrowPathIcon
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}
