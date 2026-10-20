
import { motion } from "framer-motion";
import {
  Palette,
  ChartNoAxesCombined,
  Code2,
  Megaphone,
  Monitor,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { categories } from "./data.js";

const icons = {
  palette: Palette,
  chart: ChartNoAxesCombined,
  code: Code2,
  megaphone: Megaphone,
  monitor: Monitor,
  book: BookOpen,
};

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20" id="categories">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b88b16]">
            Top Categories
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-3xl font-bold leading-tight text-[#102f32] sm:text-4xl">
            Discover leading categories to elevate your journey
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = icons[category.icon];

            return (
              <motion.a
                key={category.id}
                href="#courses"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group flex min-h-36 flex-col items-center justify-center border border-slate-100 bg-white p-4 text-center transition hover:border-amber-300 hover:shadow-lg"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf5f6] text-[#24484a] transition group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon size={20} />
                </span>

                <h3 className="text-xs font-bold text-slate-800">
                  {category.title}
                </h3>

                <p className="mt-2 text-[10px] text-slate-500">
                  {category.courses}
                </p>

                <ArrowUpRight
                  size={14}
                  className="mt-2 text-slate-300 transition group-hover:text-amber-500"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
