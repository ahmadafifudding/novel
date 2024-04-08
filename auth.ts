import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const config = {
    providers: [
        Credentials({

        })
    ],
    basePath: "/auth"
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config);