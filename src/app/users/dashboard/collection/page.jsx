import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DashboardHeader from '@/components/Dashboard/Header'

const Collection = () => {
  return (
    <section className='mt-4 w-full p-4'>
      <DashboardHeader title='Collection'/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Link href={"/"} className='border-2 border-accent relative'>
            <Image src={""} alt='' width={350} height={350} className='w-full'/>
            <div className="absolute flex items-center justify-center w-full bottom-0 h-16 bg-accent">
              <h5 className='text-xl text-center'>Judul Anime</h5>
            </div>
        </Link>
      </div>
    </section>
  )
}

export default Collection