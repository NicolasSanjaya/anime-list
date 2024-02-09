import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DashboardHeader from '@/components/Dashboard/Header'
import authUserSession from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

const Collection = async () => {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email
    }
  })
  return (
    <section className='mt-4 w-full p-4'>
      <DashboardHeader title='Collection List'/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {collection?.map((data, index) => {
          return (
            <Link key={index} href={`/anime/${data.mal_id}`} className='border-2 border-accent relative overflow-hidden'>
              <Image src={data.anime_image} alt={data.anime_title} width={350} height={350} className='w-full'/>
                <div className="absolute flex items-center justify-center w-full bottom-0 h-16 bg-accent">
                  <h5 className='text-xl text-center'>{data.anime_title}</h5>
                </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Collection