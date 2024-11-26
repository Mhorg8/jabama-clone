import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "./app/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error("Please fill all required fields");
        }

        const user = await client.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
          throw new Error("Password is not correct");
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
          image: user.image,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          password: user.password,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          name: user.username,
          image: user.image,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
