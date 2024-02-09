import ApiLibs from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton";
import authUserSession from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({params}) => {
  // const keyword = params.keyword.replaceAll("%20", " ")
  const id = params.id
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${id}`)
  // const searchAnime = await response.json()
  const searchAnime = await ApiLibs({
    resource: `anime/${id}`,
  })
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: id }
  })

  return (
    <>
      <section className="md:p-8 px-4 py-">
        <Header title={`${searchAnime.data.title} - ${searchAnime.data.year}`} />
        { id === collection?.mal_id || !user ? null : <CollectionButton anime_mal_id={id} user_email={user?.email}/> }
        <div className="pt-4 px-4 flex gap-8 text-primary overflow-x-auto items-center">
          <div className="w-36 border rounded-md border-accent p-4 text-center">
            <h3 className="text-accent">Peringkat {searchAnime.data.rank}</h3>
          </div>
          <div className="w-36 border rounded-md border-accent p-4 text-center">
            <h3 className="text-accent">Score {searchAnime.data.score}</h3>
          </div>
          <div className="w-36 border rounded-md border-accent p-4 text-center">
            <h3 className="text-accent">Anggota {searchAnime.data.members}</h3>
          </div>
          <div className="w-36 border rounded-md border-accent p-4 text-center">
            <h3 className="text-accent">Episode {searchAnime.data.episodes}</h3>
          </div>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-primary flex-wrap md:flex-nowrap">
          <Image src={searchAnime.data.images.webp.image_url} alt={searchAnime.data.title} width={350} height={350} className="w-full rounded object-cover"/>
          <p className="text-justify text-lg">{searchAnime.data.synopsis}</p>
        </div>
      </section>
      <div>
        <VideoPlayer videoId={searchAnime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
export default Page
