"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CommentInput = ({mal_id, user_email, username, anime_title}) => {
  const [comment, setComment] = useState("")
  const [isCreated, setIsCreated] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const router = useRouter()
  const handleChange = (e) => {
    e.preventDefault()
    setComment(e.target.value)
  }
  const handleClick = async (e) => {
    e.preventDefault()
    if(comment.length > 3){
      setIsValid(true)
      const data = { mal_id, user_email, comment, username, anime_title }
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data)
      })
      const createComment = await response.json()
      if(createComment.status == 200) {
        setIsCreated(true)
        setComment("")
        router.refresh()
      }  
      return
    }else{
      setIsValid(false)
    }
  }
  return (
    <div className='flex flex-col w-[40%]'>
      { !isValid && <p className='text-red-400'>Komentar Kurang Dari 3 Karakter!!!</p> }
      { isCreated && <p className='text-primary'>Komentar Terkirim</p> }
      <textarea name="" id="" cols="100" rows="5" onChange={handleChange} className='p-2 text-lg' style={{ resize: "none" }} value={comment} />
      <button onClick={handleClick} className='p-4 rounded bg-accent mt-4'>Kirim Komen</button>
    </div>
  )
}

export default CommentInput