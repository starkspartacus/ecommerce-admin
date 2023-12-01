import NextAuth, {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/lib/prisma'
import { env } from '@/lib/env'


// export default NextAuth({
//   providers: [
//     // OAuth authentication providers...
    
//     GoogleProvider({
//       clientId: env.GOOGLE_ID,
//       clientSecret: env.GOOGLE_SECRET
//     }),
    
//   ]
// })

export const autConfig = {
  providers: [  
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    }),
    
  ],
  adapter: PrismaAdapter(prisma),

} satisfies NextAuthOptions


export default NextAuth(autConfig)