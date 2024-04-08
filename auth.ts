'use server'

import { authenticateSchema } from "@/lib/validations";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const config = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = authenticateSchema.safeParse(credentials);

                if (parsedCredentials.success) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/validateOtp`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(parsedCredentials.data)
                    });

                    const data = await response.json();

                    if (response.ok) {
                        return data;
                    }

                    return null;
                }
                return null
            }
        })
    ],
    basePath: "/auth"
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config);