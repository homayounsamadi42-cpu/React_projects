import React from 'react'
import Hero from '../components/home/Hero'
import BlogPosts from '../components/home/BlogPosts'
import Projects from '../components/home/Projects'
import Newsletter from '../components/home/Newsletter'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <BlogPosts/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
