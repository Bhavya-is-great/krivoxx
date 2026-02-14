import Navbar from '@/components/globals/Navbar'
import AboutStory from '@/components/home/About'
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
      <AboutStory />
    </div>
  )
}

export default page
