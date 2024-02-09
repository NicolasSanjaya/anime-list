"use client"
import React, { useState } from 'react'

const CollectionButton = ({anime_mal_id, user_email, anime_image, anime_title}) => {
  const [isCreated, setIsCreated] = useState(false)
  const handleCollection = async (e) => {
    e.preventDefault()
    const data = { anime_mal_id, user_email, anime_image, anime_title }
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
  })
    const collection = await response.json()
    if(collection.status == 200){
      setIsCreated(true)
    }
    return
  }
  return (
    <div>
      { isCreated ? <p className='text-white'>Berhasil</p> : <button className="p-4 bg-accent" onClick={handleCollection}>Add To Collection</button> }
    </div>
  )
}

export default CollectionButton