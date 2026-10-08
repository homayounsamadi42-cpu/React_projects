import React from "react";
import img8 from "../assets/img8.avif"
import img9 from "../assets/img9.avif"
import img10 from "../assets/img10.avif"
import img11 from "../assets/img11.avif"


import {
  ArrowUpRight,
  HeartPulse,
  Brain,
  Scan,
  Bone,
} from "lucide-react";

import Button from "../components/Button";

const departments = [
  {
    id: 1,
    title: "Cardiology",
    description:
      "Expert diagnosis and treatment for heart and cardiovascular conditions.",
    image: img8,
    icon: HeartPulse,
  },
  {
    id: 2,
    title: "Neurology",
    description:
      "Expert care and treatment for neurological conditions and disorders.",
    image: img9,
    icon: Brain,
  },
  {
    id: 3,
    title: "Radiology",
    description:
      "Advanced diagnostic imaging services using modern medical technology.",
    image:img10,
    icon: Scan,
  },
  {
    id: 4,
    title: "Orthopedics",
    description:
      "Specialized care for bones, joints, muscles, and sports injuries.",
    image:img11,
    icon: Bone,
  },
];

export default function Departments() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>

              <span className="text-sm font-medium text-gray-500">
                Departments
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Specialized departments for complete healthcare
            </h2>
          </div>

          {/* Dynamic Button */}
          <Button
            text="More departments"
            icon={<ArrowUpRight size={18} />}
            href="/departments"
          />
        </div>


        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <div
                key={department.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-gray-50 p-3 md:flex-row"
              >

                {/* ================= IMAGE ================= */}
                <div className="w-full shrink-0 overflow-hidden md:w-[42%]">

                  <img
                    src={department.image}
                    alt={department.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:min-h-[274px]"
                  />

                </div>


                {/* ================= CONTENT ================= */}
                <div className="flex flex-1 flex-col px-4 py-6 md:px-6 md:py-5">

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </div>


                  {/* Heading + Description */}
                  <div className="mt-6">

                    <h3 className="text-xl font-semibold text-gray-900">
                      {department.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {department.description}
                    </p>

                  </div>


                  {/* View Details */}
                  <div className="mt-auto pt-8">

                    <a
                      href={`/departments/${department.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
                    >
                      View Details

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}