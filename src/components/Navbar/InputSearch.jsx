"use client"
import React, { useRef } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { redirect, useRouter, usePathname } from 'next/navigation'

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const pathName = usePathname()

  const handleSearch = (event) => {
    event.preventDefault()
    const keyword = searchRef.current.value
    if(!keyword || !keyword.trim()) return
    router.push(`/search/${keyword}`)
  }

  if(pathName === "/search"){
    redirect("/")
  }

  return (
    <div className='relative'>
      <input ref={searchRef} type="text" placeholder='Cari Anime ...' className='p-2 rounded-md w-full' onKeyDown={(e) => e.key === "Enter" ? handleSearch(e) : ""}/>
      <button className='absolute top-2 end-2' onClick={handleSearch}><MagnifyingGlass size={24} /></button>
    </div>
  )
}

export default InputSearch