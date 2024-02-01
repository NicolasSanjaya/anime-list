"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
  setTimeout(() => router.push("/"), 2000)
  return (
    <div className='min-h-screen flex justify-center items-center text-2xl text-white font-bold'>Page Not Found!!!</div>
  )
}

export default NotFound