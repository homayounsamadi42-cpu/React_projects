import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router'
import Navbar from "./layouts/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import WhyChooseUs from "./sections/WhyChooseUs"
import Departments from "./sections/Departments"
import Appointment from './sections/AppointmentForm'
import HealthPackages from './sections/HealthPackages'
import Footer from "./layouts/Footer"
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <Departments/>
      <Appointment/>
      <HealthPackages/>
      <Footer/>
    </div>
  )
}
