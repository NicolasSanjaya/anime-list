import prisma from '@/libs/prisma'
import React from 'react'

const CommentBox = async ({mal_id}) => {
  const comments = await prisma.comment.findMany({
    where: {
      mal_id
    }
  });
  // const comments = await prisma.comment.findMany()
  return (
    <div className='grid grid-cols-4 gap-4 my-4'>
      {comments?.map(comment => {
        return (
          <div key={comment.id} className='p-4 bg-primary'>
            <p className='font-bold text-xl'>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox