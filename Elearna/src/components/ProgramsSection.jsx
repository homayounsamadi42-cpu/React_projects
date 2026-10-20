
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { programs } from "./data.js";

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#edf5f6] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b88b16]">
            Training courses
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#102f32]">
            Explore our top programs
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Discover carefully designed programs that help you develop
            practical skills and advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-bold text-white">
                  {program.price}
                </span>
              </div>

              <div className="p-4">
                <p className="text-[10px] font-bold tracking-wider text-[#b88b16]">
                  {program.category}
                </p>

                <h3 className="mt-2 min-h-12 text-sm font-bold leading-5 text-[#102f32]">
                  {program.title}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-amber-500">
                    <Star size={13} fill="currentColor" />
                    <span className="font-bold">{program.rating}</span>
                  </span>

                  <a
                    href="#courses"
                    aria-label={`Explore ${program.title}`}
                    className="rounded-full bg-[#edf5f6] p-2 text-[#102f32] transition group-hover:bg-amber-400"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
