import Link from 'next/link'
import React from 'react'

const NavbarMenu = ({text,href,icon}) => {
  return (
    <div className="flex flex-row items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 hidden sm:flex"
    >
      {icon}
    </svg>
    <Link href={href} className="hidden sm:flex">
      {text}
    </Link>
  </div>
  )
}

export default NavbarMenu