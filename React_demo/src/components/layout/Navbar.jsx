import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/75 backdrop-blur-md border-b border-gray-100 font-sans sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <span className="text-2xl font-bold tracking-tight select-none">
              <span className="text-orange-500">net</span>
              <span className="text-slate-900">links</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-7">
            <button className="flex items-center text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors gap-1 group">
              Solutions
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <button className="flex items-center text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors gap-1 group">
              Services
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <button className="flex items-center text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors gap-1 group">
              Industries
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <a href="#" className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors">
              Partners
            </a>
            <button className="flex items-center text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors gap-1 group">
              Company
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-[#4A2E80] hover:bg-[#3b2366] text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all shadow-sm">
              Get started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-950 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50">Solutions</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50">Services</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50">Industries</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50">Partners</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50">Company</a>
          <div className="pt-4 px-3">
            <button className="w-full bg-[#4A2E80] text-white px-5 py-3 rounded-lg text-base font-medium flex items-center justify-center gap-2">
              Get started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
