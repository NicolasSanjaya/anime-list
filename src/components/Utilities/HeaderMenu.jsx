import React from 'react'

const HeaderMenu = ({title = "Title"}) => {
  return (
    <div>
      <div className='p-8'>
        <h3 className='text-center text-2xl text-primary font-bold'>{title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu