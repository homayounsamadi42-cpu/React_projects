
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Linda Garcia",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
    quote:
      "The learning experience completely changed how I approach my career. The courses are practical, clear, and easy to follow.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
    quote:
      "I learned valuable new skills and built projects that helped me take the next step in my professional journey.",
  },
  {
    id: 3,
    name: "Sarah Miller",
    role: "Marketing Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85",
    quote:
      "The flexibility and variety of courses make it easy to keep learning while balancing work and everyday life.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const previous = () =>
    setActive((index) => (index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setActive((index) => (index + 1) % testimonials.length);

  return (
    <section className="overflow-hidden bg-[#102f32] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
            Our testimonials
          </p>

          <h2 className="mt-4 max-w-md text-3xl font-bold sm:text-4xl">
            Trusted by our successful students
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-5 border-y border-white/10 py-6">
            <div>
              <p className="text-3xl font-bold">70M+</p>
              <p className="mt-2 text-xs text-slate-400">
                Learning experiences
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">25K+</p>
              <p className="mt-2 text-xs text-slate-400">
                Active learners
              </p>
            </div>
          </div>

          <div className="mt-7 flex gap-2 text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={17} fill="currentColor" />
            ))}
          </div>

          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 max-w-lg text-sm leading-7 text-slate-300"
          >
            “{current.quote}”
          </motion.blockquote>

          <div className="mt-6 flex items-center gap-3">
            <img
              src={current.image}
              alt={current.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold">{current.name}</p>
              <p className="mt-1 text-xs text-slate-400">{current.role}</p>
            </div>
          </div>

          <div className="mt-7 flex gap-3">
            <button
              onClick={previous}
              aria-label="Previous testimonial"
              className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-white/20 p-3 transition hover:bg-amber-400 hover:text-slate-950"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
            alt="Students collaborating in a learning environment"
            loading="lazy"
            className="h-[350px] w-full rounded-xl object-cover sm:h-[430px]"
          />

          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#102f32]/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
