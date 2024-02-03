// "use client"
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ApiLibs, { getNestedAnimeResponse } from "../libs/api-libs";

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  // const topAnime = await response.json()
  const topAnime = await ApiLibs({
    resource: "top/anime",
    query: "limit=10"
  })

  let recommendAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  console.log(Math.floor(Math.random() * 199));
  recommendAnime = {
    data: recommendAnime.slice(0, 5)
  }

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title={"Paling Populer"} linkHref={"/populer"} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Rekomendasi */}
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
}
export default Page
