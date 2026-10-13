import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='px-20 py-10'>
      <nav className="flex fixed bg-white px-20 top-0 left-0 w-full z-50 py-6 justify-between">
        <div className='flex gap-5'>
          <div>
            <img  src="https://vitalflow.framer.website/" alt="logo" />
          </div>
          <div>
            <h3>Vital+Flow</h3>
          </div>
        </div>
        <div className="flex gap-10 font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/blog">blog</NavLink>
        </div>
        <div>
          <button className='bg-blue-500 p-2 px-5 rounded-4xl text-white'>Book a call</button>
        </div>
      </nav>
    </div>
  );
} 

