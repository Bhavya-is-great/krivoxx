import Navbar from '@/components/globals/Navbar'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default page
