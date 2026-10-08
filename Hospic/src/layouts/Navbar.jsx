import React, { useState } from "react";
import Button from "../components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 transition-all duration-300">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Brand Logo */}
          <div className="flex items-center gap-2">

            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>

            <span className="text-3xl font-extrabold text-white">
              Hospic
            </span>

          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-semibold">

            <a
              href="#home"
              className="text-sm font-semibold text-white hover:underline transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-white hover:underline transition"
            >
              About
            </a>


            {/* Departments Dropdown */}
            <div className="relative group">

              <button
                className="
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-semibold
                  text-white
                  transition
                "
              >
                <span>Departments</span>

                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ▼
                </span>
              </button>


              {/* Dropdown */}
              <div
                className="
                  absolute
                  left-0
                  mt-2
                  w-48
                  origin-top-left
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  p-2
                  shadow-xl

                  opacity-0
                  scale-95
                  pointer-events-none

                  group-hover:pointer-events-auto
                  group-hover:opacity-100
                  group-hover:scale-100

                  transition-all
                  duration-200
                "
              >

                <a
                  href="#cardiology"
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Cardiology
                </a>

                <a
                  href="#neurology"
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Neurology
                </a>

                <a
                  href="#orthopedics"
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Orthopedics
                </a>

              </div>

            </div>


            <a
              href="#pricing"
              className="text-sm font-semibold text-white hover:underline transition"
            >
              Pricing
            </a>

            <a
              href="#blog"
              className="text-sm font-semibold text-white hover:underline transition"
            >
              Blog
            </a>

          </div>


          {/* Desktop Find Doctors Button */}
          <div className="hidden md:flex items-center">

            <Button
              text="Find Doctors"
              variant="primary"
              padding="pl-5 pr-2 py-2.5"
              rounded="rounded-xl"
              onClick={() => console.log("Find Doctors")}
            />

          </div>


          {/* Mobile Menu Button */}
          <div className="flex md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                p-2.5
                text-white
                transition
              "
              aria-expanded={isOpen}
            >

              <span className="sr-only">
                Open main menu
              </span>

              {isOpen ? (

                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

              ) : (

                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

              )}

            </button>

          </div>

        </div>

      </div>


      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out

          ${
            isOpen
              ? "max-h-screen border-t border-gray-100 bg-white"
              : "max-h-0"
          }
        `}
      >

        <div className="space-y-1 px-4 pt-3 pb-6 shadow-inner">

          <a
            href="#home"
            className="
              block
              rounded-xl
              bg-blue-50
              px-4
              py-3
              text-base
              font-semibold
              text-blue-600
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
              block
              rounded-xl
              px-4
              py-3
              text-base
              font-semibold
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            About
          </a>

          <a
            href="#departments"
            className="
              block
              rounded-xl
              px-4
              py-3
              text-base
              font-semibold
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            Departments
          </a>

          <a
            href="#pricing"
            className="
              block
              rounded-xl
              px-4
              py-3
              text-base
              font-semibold
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            Pricing
          </a>

          <a
            href="#blog"
            className="
              block
              rounded-xl
              px-4
              py-3
              text-base
              font-semibold
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            Blog
          </a>


          {/* Mobile Find Doctors */}
          <div className="mt-4 border-t border-gray-100 pt-4">

            <Button
              text="Find Doctors"
              variant="primary"
              padding="pl-6 pr-2 py-3"
              rounded="rounded-xl"
              className="w-full"
              onClick={() => console.log("Find Doctors")}
            />

          </div>

        </div>

      </div>

    </nav>
  );
}