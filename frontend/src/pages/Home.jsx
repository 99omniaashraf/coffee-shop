import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
