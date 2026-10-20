
import { motion } from "framer-motion";
import { brands } from "./data.js";

export default function BrandsSection() {
  return (
    <section className="bg-[#edf5f6] py-9">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
          Trusted by learners and education partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:justify-between">
          {brands.map((brand, index) => (
            <motion.span
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`text-slate-500 transition hover:text-[#102f32] ${brand.style}`}
            >
              {brand.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
