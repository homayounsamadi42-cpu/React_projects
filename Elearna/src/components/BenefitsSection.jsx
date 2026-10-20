
import { motion } from "framer-motion";
import {
  BookOpen,
  Wallet,
  GraduationCap,
  Award,
} from "lucide-react";
import { benefits } from "./data.js";

const iconMap = {
  "book-open": BookOpen,
  wallet: Wallet,
  graduation: GraduationCap,
  award: Award,
};

export default function BenefitsSection() {
  return (
    <section className="bg-[#edf5f6] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b88b16]">
            Why choose us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#102f32]">
            Elevate your professional journey
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Get the flexibility, knowledge, and support you need to achieve
            your educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#102f32] shadow-sm transition hover:bg-amber-400">
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                <h3 className="mt-5 font-bold text-[#102f32]">
                  {benefit.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
