import React from 'react'
import Link from 'next/link'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <header className='bg-accent sticky top-0 z-50'>
      <div className='flex flex-col sm:flex-row justify-between p-4 gap-2 md:items-center'>
        <Link href={"/"} className='font-bold text-2xl text-white text-center drop-shadow-md'>Anime List</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar