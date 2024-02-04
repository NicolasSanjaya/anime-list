import React from 'react'
import Link from 'next/link'
import authUserSession from '@/libs/auth-libs'

const UserActionButton = async () => {
  const user = await authUserSession()
  return (
    <div className='flex justify-center items-center gap-4'>
      <h1 className='text-center'>{user?.name}</h1>
      <Link href={"/users/dashboard"} className={`${user ? "block" : "hidden"} p-4 rounded-sm bg-dark text-primary`}>Dashboard</Link>
      <Link href={user ? "/api/auth/signout" : "/api/auth/signin"} className='p-4 bg-primary rounded-md text-center'>{user ? "Sign Out" : "Sign In"}</Link>
    </div>
  )
}

export default UserActionButton