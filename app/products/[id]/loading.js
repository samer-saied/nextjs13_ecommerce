import Image from 'next/image'
import React from 'react'

export default function categoryPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Image width={200} height={200} src='/loading.gif'/>
      <p className="text-red-600 font-medium text-xl">Loading...</p>
    </div>
  )
}
