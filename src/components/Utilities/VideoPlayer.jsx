"use client"
import React, { useState } from 'react'
import Youtube from 'react-youtube'
import { XCircle } from '@phosphor-icons/react'

const VideoPlayer = ({videoId}) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }
  const buttonOnError = () => {
    setIsOpen(false)
  }
  const Player = () => {
    return (
      <div className={`fixed -mb-4 -mr-4 md:mb-0 md:mr-0 bottom-0 md:bottom-2 right-0 md:right-2 transition-all duration-1000 ${setIsOpen ? "scale-100" : "scale-0"} scale-[75%] md:scale-100`}>
        <button className='text-primary text-right float-end' onClick={handleClick}><XCircle size={32} /></button>
        <Youtube videoId={videoId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={buttonOnError}/>
      </div>
    )
  }
  const option = {
    width: "300",
    height: "250"
  }
  return isOpen ? <Player /> : <button className='fixed bottom-4 right-4 w-32 p-2 bg-accent rounded-md' onClick={handleClick}>Tonton Trailer</button>
}

export default VideoPlayer