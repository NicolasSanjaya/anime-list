"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import React, { useEffect, useState } from 'react'

const Populer = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
      <HeaderMenu title={`Anime Terpopuler Page ${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </div>
  )
}

export default Populer