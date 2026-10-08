import React from "react";
import Button from "../components/Button";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";

const services = [
  {
    id: 1,
    title: "Emergency care",
    description:
      "Receive immediate medical attention 24/7 from our experienced emergency.",
    image:img3,
    icon: "▣",
  },
  {
    id: 2,
    title: "General medicine",
    description:
      "Comprehensive diagnosis, treatment, and preventive care for common.",
    image:img4,
    icon: "◈",
  },
  {
    id: 3,
    title: "Women's health",
    description:
      "Comprehensive gynecology, maternity, reproductive, and preventive.",
    image:img5,
    icon: "♡",
  },
  {
    id: 4,
    title: "Diagnostic imaging",
    description:
      "Advanced imaging services, including X-rays, ultrasound, CT scans.",
    image:img6,
    icon: "⌁",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >
          <div
            className="
              lg:sticky
              lg:top-24
              lg:self-start
            "
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-gray-300
                px-3
                py-1.5
              "
            >
              <span className="text-sm font-medium text-[#172033]">
                ✚
              </span>

              <span className="text-sm font-medium text-[#172033]">
                Our Services
              </span>

            </div>
            <h2
              className="
                max-w-[560px]
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#172033]

                sm:text-5xl
                lg:text-[52px]
              "
            >
              Excellence in every medical service
            </h2>


            {/* Button */}
            <div className="mt-14">
            <Button 
            text="Book An Appointment" 
            variant="secondary" 
            padding="pl-6 pr-2 py-2.5" 
            rounded="rounded-full"
            className="border border-gray-300"
        />
        </div>

          </div>
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="
                  relative
                  mb-6
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-gray-100
                  lg:sticky
                  lg:top-24
                  lg:h-[258px]
                "
                style={{
                  zIndex: index + 1,
                }}
              >
                <div
                  className="
                    flex
                    flex-col

                    lg:h-full
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:p-5
                  "
                >
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      px-6
                      pt-7
                      pb-6

                      lg:h-full
                      lg:w-[55%]
                      lg:justify-between
                      lg:px-0
                      lg:py-2
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                      "
                    >

                      <span
                        className="
                          text-4xl
                          font-light
                          text-[#172033]
                        "
                      >
                        {service.icon}
                      </span>

                    </div>
                    <div className="mt-8 lg:mt-0">

                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-[-0.025em]
                          text-[#172033]

                          lg:text-3xl
                        "
                      >
                        {service.title}
                      </h3>


                      <p
                        className="
                          mt-3
                          max-w-[500px]
                          text-base
                          leading-6
                          text-gray-600
                        "
                      >
                        {service.description}
                      </p>

                    </div>

                  </div>
                  <div
                    className="
                      h-[430px]
                      w-full
                      px-5
                      pb-5

                      lg:h-full
                      lg:w-[38%]
                      lg:px-0
                      lg:pb-0
                    "
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        h-full
                        w-full
                        rounded-lg
                        object-cover
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}