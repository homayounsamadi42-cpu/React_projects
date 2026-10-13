import React from 'react'
import Hero from '../compnents/Hero/Hero'
import { BrowserRouter } from 'react-router'
import Form from '../compnents/Form/Form'
import WhyUs from '../compnents/WhyUs/WhyUs'
import Services from "../compnents/Services/Services"
import AboutUs from '../compnents/AboutUs/AboutUs'
import Features from '../compnents/Features/Features'
import Navbar from '../compnents/Navbar'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Form/>
      <WhyUs/>
      <Services/>
      <AboutUs/>
      <Features/>
    </div>
  )
}
