import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const AnimeList = ({api}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4'>
      {api.data?.map((data) => {
        return (
          <Link href={`/${data.mal_id}`} className='text-primary hover:text-accent transition-all duration-300' key={data.mal_id}>
            <Image src={data.images.webp.image_url} alt={data.title} width={350} height={350} className='w-full max-h-80 object-cover'/>
            <h1 className='font-bold text-xl md:text-2xl text-center'>{data.title}</h1>
          </Link>
        )
      })}
      
    </div>
  )
}

export default AnimeList