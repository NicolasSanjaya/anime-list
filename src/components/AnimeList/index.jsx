import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const AnimeList = ({title, images, id}) => {
  return (
    <Link href={`${id}`}>
      <Image src={images} alt={title} width={350} height={350} className='w-full max-h-80 object-cover'/>
      <h1 className='font-bold text-xl md:text-2xl text-center'>{title}</h1>
    </Link>
  )
}

export default AnimeList