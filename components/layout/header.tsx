import React from 'react'
import { ThemeToggle } from '../theme-toggle'
import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className='w-full flex items-center px-3 py-2 gap-x-2'>
        <h1 className='text-3xl font-bold mr-auto'>Prismaker</h1>

        <UserButton />
        <ThemeToggle />
    </header>
  )
}
