import * as React from 'react'

import { cn } from '@/lib/utils'

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'mt-2 text-[0.8rem] text-red-500 dark:text-slate-900',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})

FormMessage.displayName = 'FormMessage'

export { FormMessage }
