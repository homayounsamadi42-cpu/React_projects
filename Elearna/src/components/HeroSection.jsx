
import { motion } from "framer-motion";
import { CheckCheck, Star } from "lucide-react";

const heroBackground =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cc263ad9a65f30e18d086a_Home%20One%20Hero%20Background%20(1).avif";

import heroStudent from "../assets/hero.webp";

const studentAvatars = [
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=44",
  "https://i.pravatar.cc/80?img=49",
  "https://i.pravatar.cc/80?img=12",
];

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#09282b] text-white"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(7, 35, 38, 0.88) 0%,
            rgba(7, 35, 38, 0.78) 100%
          ),
          url(${heroBackground})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark textured overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#09282b]/30 via-transparent to-black/20" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-80 w-80 rounded-full bg-[#16494b]/30 blur-3xl" />

      <div className="pointer-events-none absolute right-[5%] top-0 -z-10 h-72 w-72 rounded-full bg-[#163f42]/30 blur-3xl" />

      {/* Main hero layout */}
      <div className="mx-auto grid min-h-[600px] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:min-h-[690px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:px-12 xl:px-16">
        {/* LEFT: Student image and floating cards */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px] self-end lg:ml-0"
        >
          {/* Yellow abstract decorative shape */}
          <div
            className="absolute bottom-[24%] left-[1%] h-44 w-44 bg-[#fbb900]/90 sm:h-56 sm:w-56"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 35%, 76% 100%, 18% 80%, 0% 40%)",
            }}
          />

          {/* Blue decorative ring */}
          <div className="absolute left-[12%] top-[10%] z-20 h-9 w-9 rounded-full border-[7px] border-blue-600 sm:left-[12%] sm:top-[8%]" />

          {/* Small yellow dot */}
          <div className="absolute left-[17%] top-[27%] z-20 h-2.5 w-2.5 rounded-full bg-amber-400" />

          {/* Student image */}
          <div className="relative z-10 flex h-[360px] items-end justify-center sm:h-[470px] lg:h-[570px]">
            <img
              src={heroStudent}
              alt="Student enjoying an online learning experience"
              fetchPriority="high"
              className="relative z-10 h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Achievement card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute left-0 top-[59%] z-20 flex items-center gap-3 rounded-xl bg-[#f7faf5] px-4 py-3 text-[#183335] shadow-xl sm:left-0 sm:top-[61%] sm:px-5 sm:py-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#536967]">
              <CheckCheck size={30} strokeWidth={1.5} />
            </div>

            <div>
              <p className="text-lg font-bold leading-tight">125+</p>
              <p className="mt-1 whitespace-nowrap text-xs font-medium text-slate-600 sm:text-sm">
                Achievement awards
              </p>
            </div>
          </motion.div>

          {/* Student rating card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-2 right-0 z-20 w-[220px] rounded-[28px] border border-white/10 bg-[#0d292d]/95 px-4 py-4 text-center shadow-2xl sm:bottom-3 sm:right-0 sm:w-[260px] sm:px-5 sm:py-5"
          >
            <p className="text-xs font-medium text-slate-400">
              Trusted By
            </p>

            <p className="mt-1 text-base font-medium sm:text-lg">
              15000+ enrolled students
            </p>

            <div className="mt-3 flex justify-center">
              {studentAvatars.map((avatar, index) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt={`Student ${index + 1}`}
                  loading="lazy"
                  className={`h-8 w-8 rounded-full border-2 border-[#0d292d] object-cover ${
                    index > 0 ? "-ml-2.5" : ""
                  }`}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <span className="text-xs font-semibold text-white">
                4.94 (625)
              </span>
            </div>
          </motion.div>

          {/* Decorative yellow dot */}
          <div className="absolute right-[-3%] top-[57%] z-20 h-4 w-4 rounded-full bg-amber-400" />
        </motion.div>

        {/* RIGHT: Hero heading and CTA */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-[540px] pb-12 lg:mx-0 lg:pb-0 lg:pl-2"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-wide text-slate-200 sm:text-sm">
            Online Learning
          </p>

          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[54px]">
            More then{" "}
            <span className="whitespace-nowrap text-[#ffb900]">
              25000+
            </span>{" "}
            education courses online
          </h1>

          <p className="mt-5 max-w-[470px] text-sm leading-7 text-slate-300 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>

          <motion.a
            href="#courses"
            whileHover={{
              backgroundColor: "#ffb900",
              color: "#102f32",
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-7 inline-flex min-w-[145px] items-center justify-center border border-white/10 bg-[#0b282c] px-7 py-3 text-sm font-semibold text-white"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
