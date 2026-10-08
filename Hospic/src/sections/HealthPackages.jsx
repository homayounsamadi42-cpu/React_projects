import React from "react";
import Button from "../components/Button";
import { ArrowUpRight, Check } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Basic Health Check",
    price: "0",
    description:
      "Perfect for routine wellness, this package includes essential health screenings.",
    features: [
      "Ideal for routine wellness",
      "General physician consultation",
      "Complete blood count (CBC)",
      "Blood pressure screening",
    ],
  },
  {
    id: 2,
    name: "Standard Health Check",
    price: "0",
    description:
      "A comprehensive package with advanced diagnostic tests and preventive care.",
    features: [
      "Ideal for routine wellness",
      "Everything in Basic",
      "Liver function test",
      "Chest X-ray",
    ],
  },
  {
    id: 3,
    name: "Premium Health Check",
    price: "0",
    description:
      "Our most complete package featuring full-body evaluations and specialist screenings.",
    features: [
      "Ideal for routine wellness",
      "Everything in Standard",
      "Heart health screening",
      "Vitamin D & B12 tests",
    ],
  },
];

export default function HealthPackages() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-6xl px-6 ">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-black ">
            Health packages
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Affordable health packages for every need
          </h2>

        </div>

        {/* ================= PACKAGE CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`flex flex-col rounded-[8px] p-7 ${
                index === 1
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >

              {/* ================= PACKAGE NAME ================= */}
              <h3
                className={`text-[18px] font-semibold ${
                  index === 1 ? "text-white" : "text-gray-900"
                }`}
              >
                {pkg.name}
              </h3>

              {/* ================= PRICE ================= */}
              <div className="mt-5 flex items-end gap-1">
                <span
                  className={`text-sm font-medium ${
                    index === 1 ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  $
                </span>

                <span
                  className={`text-5xl font-semibold tracking-tight ${
                    index === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.price}
                </span>
              </div>

              {/* ================= DESCRIPTION ================= */}
              <p
                className={`mt-5 min-h-[72px] text-sm leading-6 ${
                  index === 1 ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {pkg.description}
              </p>

              {/* ================= FEATURES ================= */}
              <div className="mt-6 rounded-2xl bg-white p-3">

                <div className="space-y-3">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      {/* Feature Icon */}
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check size={13} strokeWidth={2.5} />
                      </div>

                      {/* Feature Text */}
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* ================= BUTTON ================= */}
              <div className="mt-6 w-full">
                <Button
                    text="Choose Plan"
                    icon={<ArrowUpRight size={18} />}
                    href="#"
                    className="w-full justify-between"
                />
                </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}