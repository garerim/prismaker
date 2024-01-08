import React from 'react'
import { ThemeToggle } from '../theme-toggle'

export const Header = () => {
  return (
    <header className='w-full flex items-center px-3 py-2'>
        <h1 className='text-3xl font-bold mr-auto'>Prismaker</h1>
        <ThemeToggle />
    </header>
  )
}
