import { Button } from '@/components/ui/button'
import React from 'react'
import { LogIn } from 'lucide-react';
import clsx from 'clsx';

export const LoginButton = () => {
  return (
    <Button size="lg" >
      <LogIn size={24} />
      Login 
     </Button>
  )
}
