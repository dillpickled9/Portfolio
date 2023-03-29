import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='flex justify-center'>
    <div className=" text-gray-400 flex justify-center w-full max-w-7xl">
      <div className='pointer-events-none'>
       Copyright &copy; 2023 Dylan DeSantis
      </div>
    </div>
    </div>
  )
}

export default Footer