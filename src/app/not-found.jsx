"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
  setTimeout(() => router.back(), 1500)
  return (
    <div className='min-h-screen text-center flex flex-col justify-center items-center text-2xl text-white font-bold'>
      <h1>Page Not Found!!!</h1>
      <h2>Redirecting Back . . .</h2>
    </div>
  )
}

export default NotFound