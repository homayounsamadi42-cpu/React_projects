import React from 'react'
import Hero from '../components/Blog/Hero'
import Navbar from '../components/layout/Navbar'
import Cards from '../components/Blog/Cards'
import Footer from '../components/layout/Footer'

function Blog() {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Blog
