import authUserSession from '@/libs/auth-libs'
import Image from 'next/image'
import Link from 'next/link'
const Page = async () => {
  const user = await authUserSession()
  // if(!user) redirect("/") 
  return (
    <div className='mt-8 text-white flex flex-col justify-center items-center'>
      <h3>Dashboard</h3>
      <h3 className='text-2xl font-bold'>Welcome {user?.name}</h3>
      <Image src={user?.image} alt={user?.name} width={250} height={250}/>

      <div className='mt-8 flex gap-4 flex-wrap'>
        <Link href={"/users/dashboard/collection"} className='p-4 bg-accent rounded-md text-dark'>My Collection</Link>
        <Link href={"/users/dashboard/comment"} className='p-4 bg-accent rounded-md text-dark'>My Comment</Link>
      </div>
    </div>
  )
}

export default Page