import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    API_TOKEN_NOVEL: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    API_TOKEN_NOVEL: process.env.API_TOKEN_NOVEL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
})
