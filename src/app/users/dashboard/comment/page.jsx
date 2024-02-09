import DashboardHeader from '@/components/Dashboard/Header'
import authUserSession from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'
import Link from "next/link"

const Comment = async () => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({where: {user_email: user.email}})
  return (
    <div className='mt-4 p-4'>
      <DashboardHeader title='Comment List'/>
      <div className='grid grid-cols-1 gap-4 mt-4'>
        {comments ? comments.map(comment => {
          return (
            <Link href={`/anime/${comment.mal_id}`} key={comment.id} className='bg-primary p-4 rounded'>
              <p className='font-bold text-xl'>{comment.anime_title}</p>
              <p>{comment.comment}</p>
            </Link>
          )
        }) : <h2 className='text-4xl text-center text-white'>Komentar Belum Ada</h2>}
      </div>
    </div>
  )
}

export default Comment