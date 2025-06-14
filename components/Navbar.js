"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const path=usePathname()
  const shownav=["/","/generate","/about","/contact"].includes(path)
  return (
    <div>
     {shownav && <nav className='bg-white fixed right-[6vw] top-12 rounded-full w-[88vw]  items-center  px-12 py-3 sm:py-6 pad width '>
        <div className='flex flex-col sm:flex-row gap-3  justify-between items-center '>

        <div className="logo  ">
          <Link href="/" className='text-4xl  font-extrabold '>
           Linknest
          </Link>
        </div>
        <ul className='text-gray-600 flex gap-3 sm:gap-9  items-center font-semibold '>
          <Link href="/"><li>Home</li></Link> 
          <Link href="/about"><li>About</li></Link> 
          <Link href="/generate"><li>Generate</li></Link> 
          <Link href="/contact"><li>Contact</li></Link> 
          
        
        </ul>
        </div>
      </nav> } 
    </div>
 )
}

export default Navbar
