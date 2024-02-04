"use client"
import React from 'react'
import { ArrowFatLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const DashboardHeader = ({title = "My Collection"}) => {
  const router = useRouter()
  const handleBack = (e) => {
    e.preventDefault()
    router.back()
  }
  return (
    <div className='flex justify-between items-center gap-4 my-6'>
      <button onClick={handleBack} className='p-4 bg-accent rounded-md'><ArrowFatLeft size={32} /></button>
      <h3 className='text-2xl text-primary'>{title}</h3>
    </div>
  )
}

export default DashboardHeader