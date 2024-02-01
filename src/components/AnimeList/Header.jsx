import React from 'react'
import Link from 'next/link'

const Header = ({title, linkHref = "", linkTitle = ""}) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-primary">{title}</h1>
      <Link href={linkHref} className="md:text-xl underline hover:text-accent transition-all duration-300 text-primary">{linkTitle}</Link>
    </div>
  )
}

export default Header