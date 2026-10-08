import React from "react";
import Button from "../components/Button";
import { ArrowUpRight } from "lucide-react";
import apointment from "../assets/apointment.avif";

const departments = [
  "Cardiology",
  "Neurology",
  "Radiology",
  "Orthopedics",
];

export default function Appointment() {
  return (
    <section className=" py-6">
      <div className="mx-auto lg:max-w-6xl ">

        {/* ================= APPOINTMENT BACKGROUND ================= */}
        <div
          className="relative overflow-hidden rounded-[12px] bg-cover py-5 sm:py-6 md:py-10"
          style={{
            backgroundImage: `url(${apointment})`,
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 mx-auto max-w-6xl">

            {/* ================= TITLE ================= */}
            <div className="mx-auto mb-2 max-w-2xl text-center">
              <h2 className="font-semibold leading-tight tracking-tight pb-2 text-white sm:text-1x1 md:text-1xl">
                Make an appointment today for a free dental checkup.
              </h2>
            </div>

            {/* ================= FORM ================= */}
            <form>
              <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* ================= FULL NAME ================= */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Edward Bennett"
                    className="h-11 w-full rounded-xl border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-white/70 outline-none transition focus:border-white"
                  />
                </div>

                {/* ================= PHONE ================= */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Phone *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (212) 555-0100"
                    className="h-11 w-full rounded-xl border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-white/70 outline-none transition focus:border-white"
                  />
                </div>

                {/* ================= DEPARTMENT ================= */}
                <div>
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Department *
                  </label>

                  <select
                    id="department"
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-white/30 bg-transparent px-4 text-sm text-white outline-none transition focus:border-white"
                  >
                    <option
                      value=""
                      disabled
                      className="text-gray-900"
                    >
                      Select Department
                    </option>

                    {departments.map((department) => (
                      <option
                        key={department}
                        value={department}
                        className="text-gray-900"
                      >
                        {department}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ================= BUTTON ================= */}
                <div className="flex h-11 items-center">
                  <Button
                    text="Appointment Now"
                    icon={<ArrowUpRight size={18} />}
                    href="#"
                  />
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}