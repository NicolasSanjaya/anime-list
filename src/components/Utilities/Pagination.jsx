import React from 'react'

const Pagination = ({page, lastPage, setPage}) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
  const handleClickPrev = () => {
      setPage((prev) => prev - 1)
      scrollTop()
  }

  const handleClickNext = () => {
    if(page >= 1){
      setPage((prev) => prev + 1)
      scrollTop()
    }
  }
  return (
    <div className='flex justify-center items-center gap-4 text-2xl font-semibold my-8 relative bottom-4'>
      {page > 1 && <button className='p-2 bg-accent rounded-sm hover:bg-white hover:text-accent' onClick={handleClickPrev}>Prev</button>}
      <p className='text-white'>{page} of {lastPage}</p>
      {page < lastPage && <button className='p-2 bg-accent rounded-sm hover:bg-white hover:text-accent' onClick={handleClickNext}>Next</button>}
    </div>
  )
}

export default Pagination