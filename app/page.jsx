import Footer from '@/components/globals/Footer'
import Navbar from '@/components/globals/Navbar'
import AboutStory from '@/components/home/About'
import Contact from '@/components/home/Contact'
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
      <Contact />
      <Footer />
    </div>
  )
}

export default page
