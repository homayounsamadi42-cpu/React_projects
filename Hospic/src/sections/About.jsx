import React from "react";
import { HeartPulse } from "lucide-react";

import Button from "../components/Button";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";

export default function About() {
  return (
    <section className="w-full bg-gray-100 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* About Us Label */}
          <div className="flex justify-center items-center lg:justify-start mb-10 lg:mb-0">
            <div className="inline-flex items-center gap-2">
              <HeartPulse size={17} strokeWidth={2} />
              {/* Add this later after installing lucide-react */}
              <HeartPulse size={17} strokeWidth={2} />

              <span className="text-sm font-medium text-[#172033]">
                About Us
              </span>
            </div>
          </div>

          {/* Heading + Button */}
          <div>
            <h2
              className="
                max-w-[720px]
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#172033]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              We are committed to delivering exceptional medical care through
              skilled professionals, modern facilities.
            </h2>

            <div className="mt-16">
              <Button
                text="About Us"
                variant="secondary"
                padding="pl-6 pr-2 py-2.5"
                rounded="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* IMAGES + STATS */}
        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20">

          {/* IMAGES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Image 1 */}
            <div className="h-[420px] lg:h-[470px] w-full overflow-hidden rounded-[8px]">
              <img
                src={img1}
                alt="Doctor consulting with patient"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="h-[420px] lg:h-[470px] w-full overflow-hidden rounded-[8px]">
              <img
                src={img2}
                alt="Doctor talking with patient"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

          {/* STATISTICS */}
          <div className="flex flex-col">

            {/* 200+ */}
            <div className="pb-10">
              <h3 className="text-5xl font-semibold tracking-[-0.03em] text-[#172033]">
                200<span className="text-[#1769FF]">+</span>
              </h3>

              <p className="mt-3 text-base text-gray-600">
                Experienced Doctors
              </p>
            </div>

            <div className="border-t border-gray-200" />

            {/* 98% */}
            <div className="py-10">
              <h3 className="text-5xl font-semibold tracking-[-0.03em] text-[#172033]">
                98<span className="text-[#1769FF]">%</span>
              </h3>

              <p className="mt-3 text-base text-gray-600">
                Patient Satisfaction
              </p>
            </div>

            <div className="border-t border-gray-200" />

            {/* 24/7 */}
            <div className="pt-10">
              <h3 className="text-5xl font-semibold tracking-[-0.03em] text-[#172033]">
                24/7
              </h3>

              <p className="mt-3 text-base text-gray-600">
                Emergency Care
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}