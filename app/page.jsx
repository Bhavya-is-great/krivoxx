import Navbar from '@/components/globals/Navbar'
import Hero from '@/components/home/Hero'
import Industries from '@/components/home/Industries'
import Services from '@/components/home/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
    </div>
  )
}

export default page
