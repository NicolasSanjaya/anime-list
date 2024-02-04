import React from 'react'
import { getServerSession } from 'next-auth'
import { authOption } from '@/app/api/auth/[...nextauth]/route'

const authUserSession = async () => {
  const user = await getServerSession(authOption)
  return user?.user
}

export default authUserSession