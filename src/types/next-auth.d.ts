import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "@/types/user";

declare module "next-auth" {
    interface Session {
        user: User;
        token: string;
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        user: User;
        token: string;
    }
}