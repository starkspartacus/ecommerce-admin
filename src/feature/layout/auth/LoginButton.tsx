"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { LogIn } from 'lucide-react';
import clsx from 'clsx';
import { signIn } from 'next-auth/react'

export const  LoginButton = () => {
  return (
    <Button size="lg" onClick={async()=> {await signIn()}} >
      <LogIn size={24} />
      Login 
     </Button>
  )
}
