// "use client"
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {
  // const keyword = params.keyword.replaceAll("%20", " ")
  const keyword = params.keyword
  const decodedKeyword = decodeURI(keyword)
  console.log(keyword);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
      <section>
        <Header title={`Hasil Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
export default Page
