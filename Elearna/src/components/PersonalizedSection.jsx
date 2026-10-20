
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Headphones,
  Video,
  MessageCircle,
} from "lucide-react";

export default function PersonalizedSection() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 top-4 z-10 rounded-lg bg-[#102f32] p-4 text-white shadow-xl">
            <p className="text-2xl font-bold text-amber-400">50+</p>
            <p className="text-xs">Free courses</p>
            <p className="text-xs">included for you</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-16">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85"
              alt="Online learning student"
              loading="lazy"
              className="mt-12 h-64 w-full rounded-sm object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85"
              alt="Student learning with a laptop"
              loading="lazy"
              className="h-80 w-full rounded-sm object-cover shadow-lg"
            />
          </div>

          <div className="absolute bottom-4 right-0 flex gap-3 rounded-xl bg-white p-4 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f6] text-[#102f32]">
              <Headphones size={18} />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f6] text-[#102f32]">
              <Video size={18} />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5f6] text-[#102f32]">
              <MessageCircle size={18} />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b88b16]">
            What we offer
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102f32] sm:text-4xl">
            Personalized learning for your ambitions
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            Learn from your own pace and schedule. Personalize your learning
            journey with expert-led courses, practical projects, and
            opportunities to improve your professional skills.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Skills-based instruction",
              "Industry insights",
              "Global certification",
              "Customizable courses",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle2 size={17} className="text-emerald-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 bg-[#edf5f6] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-bold text-[#102f32]">
                Still have questions?
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                We're here to help you choose your learning path.
              </p>
            </div>

            <a
              href="mailto:info@example.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#102f32] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#245154]"
            >
              Get Started <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
