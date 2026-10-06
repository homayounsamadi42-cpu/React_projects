import React from 'react'
import logo from "../../assets/logo.avif"
function Footer() {
  return (
    <div className='pt-16 pb-6'>
      <hr className='max-w mx-auto' />
      <div className='flex justify-between my-5 px-38'>
        <div className='flex flex-col items-start max-w-1/4 text-gray-400 gap-3.5'>
          <img src={logo} alt="netlinks" />
          <p>A global technology partner for Odoo ERP implementation, custom software development, AI automation, and digital transformation.</p>
          <div className=''>
            <p>info@netlinks.af</p>
            <p>077-302-0101</p>
          </div>
          
          <p>NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw Kabul, Afghanistan</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <ul className=''>
          <li className='text-gray-400'>Sulotion</li>
          <li><a href="">CRM</a></li>
          <li><a href="">services</a></li>
          <li><a href="">CRM</a></li>
          <li><a href="">CRM</a></li>
          <li><a href="">CRM</a></li>
        </ul>
        <ul>
          <li className='text-gray-400'>Services</li>
          <li><a href="">Odoo ERP Services</a></li>
          <li><a href="">Odoo ERP Services</a></li>
          <li><a href="">Odoo ERP Services</a></li>
          <li><a href="">Odoo ERP Services</a></li>
          <li><a href="">Odoo ERP Services</a></li>
        </ul>
        <ul>
          <li className='text-gray-400'>Industries</li>
          <li><a href="">Manufacturing</a></li>
          <li><a href="">Manufacturing</a></li>
          <li><a href="">Manufacturing</a></li>
          <li><a href="">Manufacturing</a></li>
          <li><a href="">Manufacturing</a></li>
        </ul>
        <ul>
          <li className='text-gray-400'>Company</li>
          <li><a href="">About</a></li>
          <li><a href="">About</a></li>
          <li><a href="">About</a></li>
          <li><a href="">About</a></li>
          <li><a href="">About</a></li>
        </ul>
      </div>
      <hr className='max-w-7xl mx-auto py-3'/>
      <div className='flex justify-between px-38 text-gray-400 text-[12px]'>
        <p>© 2026 NETLINKS. All rights reserved.</p>
        <a href="" className='hover:text-gray-600'>Sitemap · Business ethics · Privacy policy · Terms of use · Dark mode</a>
      </div>
    </div>
  )
}

export default Footer
