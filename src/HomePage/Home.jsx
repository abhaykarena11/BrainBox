import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import Testimonial from './Testimonial'
import LastSecond from './LastSecond'
import Footer from './Footer'
import MiddleVideo from './MiddleVideo'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Testimonial/>
      <MiddleVideo/>
      <LastSecond/>
      <Footer/>
    </div>
  )
}
