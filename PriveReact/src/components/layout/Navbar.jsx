import React from 'react'

function Navbar() {
  return (
    <div className='max-w-full mx-2 md:mx-20 md:my-5 lg:mx-100 lg:my-8'>
    <div className='flex justify-between'>
        <div className='flex justify-between gap-1'>
            <p className='text-orange-500 font-bold '>LW </p>
            <span className='text-gray-300'>|</span>
            <ul className='flex justify-around gap-3'>
                <li className='hover:text-orange-500'><Navlink href="">Home</Navlink></li>
                <li className='hover:text-orange-500'><a href="">About</a></li>
                <li className='hover:text-orange-500'><a href="">Work</a></li>
                <li className='hover:text-orange-500'><a href="">Blog</a></li>
                <li className='hover:text-orange-500'><a href="">Contact</a></li>
            </ul>
        </div>
      <div>
        <div className="ml-auto flex items-center gap-7">

          {/* X / Twitter */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              text-gray-800
              transition-colors
              duration-200
              hover:text-orange-500
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[16px] w-[16px] fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
            </svg>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              text-gray-800
              transition-colors
              duration-200
              hover:text-orange-500
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[16px] w-[16px] fill-current"
            >
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>


          {/* RIGHT SEPARATOR */}
          <span className="h-4 w-[2px] bg-gray-300" />


          {/* ================================
              DARK MODE BUTTON
          ================================= */}
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-black
              transition-all
              duration-200
              hover:bg-gray-200
              hover:scale-105
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[12px] w-[12px] fill-current"
            >
              <path d="M21.64 13.02A9 9 0 0 1 10.98 2.36 9.01 9.01 0 1 0 21.64 13.02Z" />
            </svg>
          </button>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
