import { env } from "@/lib/env.mjs";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

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

                const data = await response.json();
                if (response.ok) return data

                throw new Error(data?.error?.message)
            }
        })
    ],
    basePath: "/auth",
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user }
            return token
        },

        async session({ session, token }) {
            session.user = token.user as any
            session.token = token.token
            return session
        }
    }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config);