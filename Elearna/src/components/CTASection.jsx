
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative z-10 mx-auto -mb-10 max-w-7xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-between gap-6 bg-amber-400 px-6 py-8 shadow-xl sm:px-10 md:flex-row"
      >
        <div>
          <h2 className="max-w-md text-2xl font-bold leading-tight text-slate-950">
            Are you ready to start your journey?
          </h2>
          <p className="mt-2 text-sm text-slate-800">
            Take the next step toward your learning goals.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 bg-[#102f32] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#245154]"
          >
            Browse Courses <ArrowRight size={15} />
          </a>

          <a
            href="mailto:info@example.com"
            className="border border-slate-900/20 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Contact Our Team
          </a>
        </div>
      </motion.div>
    </section>
  );
}
