import NextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";
import client from "./app/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "Password",
          placeholder: "********",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!password || !email) {
          throw new Error("Please fill all required fields");
        }

        const user = await client.user.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isCurrentPassword = await bcrypt.compare(password, user.password);

        if (!isCurrentPassword) {
          throw new Error("Password is not correct");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          password: user.password,
          isLogin: user.isLogin,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      },
    }),
  ],

  pages: {},
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          username: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        // session.user = token.user;
      }
      return session;
    },
  },
});
