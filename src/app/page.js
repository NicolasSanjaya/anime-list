// "use client"
import AnimeList from "@/components/AnimeList";
import Link from 'next/link'

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()
  console.log(anime)
  
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold">Paling Populer</h1>
        <Link href={"/populer"} className="md:text-xl underline hover:text-indigo-500 transition-all duration-300">Lihat Semua</Link>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4'>
      {anime.data.map((data) => {
        return (
          <div key={data.mal_id} className="shadow-md rounded-md">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        )
      })}
      </div>
    </div>
  );
}
export default Home