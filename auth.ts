// 'use server'

import { authenticateSchema } from "@/lib/validations";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { env } from "@/lib/env.mjs";

export const config = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/validateOtp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${env.API_TOKEN_NOVEL}`
                    },
                    body: JSON.stringify(credentials)
                });

                if (response.ok) {
                    console.log(response)
                    return await response.json();
                }
                return null
            }
        })
    ],
    basePath: "/auth"
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config);