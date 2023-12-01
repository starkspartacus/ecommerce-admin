import { LoginButton } from '@/src/feature/layout/auth/LoginButton'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from 'next-auth'
import { autConfig } from '@/pages/api/auth/[...nextauth]'

export default async function Home() {
  const session = await getServerSession(autConfig);

  if(session){
    return(
      <p>
        {JSON.stringify(session, null, 2)}
      </p>
    )
  }
  return (
    <div className='bg-blue-500 w-screen h-screen flex items-center '>
      <div className='text-center w-full'>
      <LoginButton/>
      </div>
        
    </div>
  )
}
