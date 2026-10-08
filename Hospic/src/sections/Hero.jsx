import React from "react";

import hero from "../assets/hero.webp";
import img12 from "../assets/img12.avif";
import img13 from "../assets/img13.avif";
import img14 from "../assets/img14.avif";

import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${hero})` }}
      className="
        relative
        w-full
        min-h-[800px]
        h-[calc(100vh-0px)]
        max-h-[970px]
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
    >

      {/* Main container */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
          h-full
        "
      >

        {/* Hero content */}
        <div className="flex h-full items-center">

          <div className="max-w-2xl">

            {/* Rating */}
            <div className="mb-8 flex items-center gap-4">

              <div className="flex -space-x-2">

                <img
                  src={img12}
                  alt=""
                  className="
                    h-9
                    w-9
                    rounded-full
                    border-2
                    border-white
                    object-cover
                  "
                />

                <img
                  src={img13}
                  alt=""
                  className="
                    h-9
                    w-9
                    rounded-full
                    border-2
                    border-white
                    object-cover
                  "
                />

                <img
                  src={img14}
                  alt=""
                  className="
                    h-9
                    w-9
                    rounded-full
                    border-2
                    border-white
                    object-cover
                  "
                />

              </div>

              <div className="leading-tight">

                <p className="text-sm font-semibold text-white">
                  4.9/5 rating
                </p>

                <p className="mt-1 text-xs text-white/80">
                  2k Client in the World
                </p>

              </div>

            </div>


            {/* Heading */}
            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-[-0.035em]
                text-white
                sm:text-6xl
                lg:text-[64px]
              "
            >
              Exceptional care
              <br />
              Better health
            </h1>


            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-6
                text-white/80
              "
            >
              Experience trusted healthcare delivered by skilled
              physicians, advanced diagnostic technology.
            </p>


            {/* Button */}
            <div className="mt-8">
              <Button
                text="Book an appoinment"
                onClick={() => console.log("Appointment")}
              />
            </div>

          </div>

        </div>


        {/* Trustpilot */}
        <div
          className="
            absolute
            bottom-10
            left-4
            sm:left-6
            lg:left-8
          "
        >

          <p className="text-sm font-semibold text-white">
            ★ Trustpilot
          </p>

          <div className="mt-2 flex items-center gap-2">

            <div className="flex gap-[2px]">

              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    bg-[#00B67A]
                    text-[10px]
                    text-white
                  "
                >
                  ★
                </span>
              ))}

            </div>

            <span className="text-[10px] text-white">
              4.9 (500+ REVIEWS)
            </span>

          </div>

        </div>


        {/* Appointment card */}
        <div
          className="
            absolute
            bottom-10
            right-4
            sm:right-6
            lg:right-8
            hidden
            sm:block
            w-[205px]
            rounded-2xl
            bg-white
            p-3
            shadow-xl
          "
        >

          <div className="flex items-center gap-3">

            <img
              src={img12}
              alt=""
              className="
                h-12
                w-12
                shrink-0
                rounded-full
                object-cover
              "
            />

            <div>

              <p className="whitespace-nowrap text-xs font-medium text-gray-900">
                Book Appointment
              </p>

              <button
                onClick={() => console.log("Let's talk")}
                className="
                  mt-1
                  text-xs
                  font-medium
                  text-[#1677FF]
                  hover:opacity-70
                "
              >
                Let's talk →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}