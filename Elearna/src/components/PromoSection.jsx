
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const promotions = [
  {
    id: 1,
    title: "Quick access to the popular courses",
    button: "View Courses",
    href: "#courses",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
    background: "bg-[#edf5f6]",
  },
  {
    id: 2,
    title: "Develop your skills online",
    button: "Apply Now",
    href: "#programs",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=85",
    background: "bg-[#f1f0e8]",
  },
];

export default function PromoSection() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2">
        {promotions.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            className={`relative flex min-h-44 overflow-hidden ${item.background}`}
          >
            <div className="relative z-10 flex w-[55%] flex-col items-start justify-center p-5 sm:p-7">
              <h3 className="max-w-44 text-sm font-bold leading-6 text-[#102f32] sm:text-base">
                {item.title}
              </h3>

              <a
                href={item.href}
                className={`mt-4 inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[10px] font-bold ${
                  item.id === 1
                    ? "bg-amber-400 text-slate-950"
                    : "bg-[#102f32] text-white"
                }`}
              >
                {item.button} <ArrowRight size={13} />
              </a>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="absolute bottom-0 right-0 h-full w-[50%] object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
