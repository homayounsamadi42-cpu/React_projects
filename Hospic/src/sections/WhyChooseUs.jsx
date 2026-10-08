import React from "react";
import {
  BriefcaseMedical,
  FlaskConical,
  Dna,
  Ambulance,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Experienced specialists",
    description:
      "Receive expert care from highly qualified doctors and healthcare.",
    icon: BriefcaseMedical,
  },
  {
    id: 2,
    title: "Advanced technology",
    description:
      "Our hospital features modern diagnostic equipment and innovative.",
    icon: FlaskConical,
  },
  {
    id: 3,
    title: "Trusted healthcare",
    description:
      "Thousands of patients rely on us for quality medical services.",
    icon: Dna,
  },
  {
    id: 4,
    title: "24/7 emergency care",
    description:
      "Emergency medical services are available around the clock with rapid.",
    icon: Ambulance,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-14 sm:py-28 lg:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5">
            <span className="text-sm text-[#172033]">✚</span>

            <span className="text-sm font-medium text-[#172033]">
              Why Choose Us
            </span>
          </div>

          <h2 className="mx-auto max-w-[650px] text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#172033] sm:text-5xl lg:text-[52px]">
            Excellence in every
            <br />
            medical service
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-20 grid max-w-[1180px] grid-cols-1 gap-5 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex min-h-[160px] items-center gap-6 rounded-xl bg-white p-6 sm:p-7"
              >

                {/* Icon / Image */}
                <div
                  className="
                    group/icon
                    flex h-[138px] w-[138px] shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#f7f7f7]
                    transition-colors duration-300
                    hover:bg-[#1769FF]
                  "
                >
                  <Icon
                    size={58}
                    strokeWidth={1.5}
                    className="
                      text-[#1769FF]
                      transition-colors duration-300
                      group-hover/icon:text-white
                    "
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#172033] sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-base leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Image */}
        <div className="mx-auto mt-5 max-w-[1180px] overflow-hidden rounded-xl">
          <img
            src="https://framerusercontent.com/images/u5KDmsEaFhyj2ja56OHXOHoA424.webp?height=958&width=1641"
            alt="Doctor talking with patient"
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
          />
        </div>

      </div>
    </section>
  );
}