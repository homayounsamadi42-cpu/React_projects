
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { courses } from "./data.js";

const filters = [
  "All Courses",
  "Design",
  "Development",
  "Management",
  "Business",
];

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filteredCourses = useMemo(() => {
    if (activeFilter === "All Courses") return courses;

    return courses.filter((course) => {
      if (activeFilter === "Design") return course.category === "DESIGN";
      if (activeFilter === "Development")
        return course.category === "DEVELOPMENT";
      if (activeFilter === "Management")
        return course.category === "MANAGEMENT";
      if (activeFilter === "Business")
        return course.category === "BUSINESS";

      return true;
    });
  }, [activeFilter]);

  return (
    <section id="courses" className="bg-[#edf5f6] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b88b16]">
              Our e-learning
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102f32] sm:text-4xl">
              Top online courses
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-2 text-xs transition ${
                  activeFilter === filter
                    ? "bg-[#102f32] text-white"
                    : "bg-white text-slate-600 hover:bg-amber-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCourses.map((course) => (
            <motion.article
              layout
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow">
                  {course.price}
                </span>
              </div>

              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#b88b16]">
                  {course.category}
                </p>

                <h3 className="mt-2 min-h-12 text-base font-bold leading-6 text-[#102f32]">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center gap-1 text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-slate-800">
                    {course.rating}
                  </span>
                  <span className="text-xs text-slate-400">
                    (Student rating)
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={14} />
                    {course.lessons} lessons
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={14} />
                    {course.students} students
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Instructor:{" "}
                  <span className="font-semibold text-slate-800">
                    {course.instructor}
                  </span>
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <p className="py-12 text-center text-slate-500">
            No courses available in this category.
          </p>
        )}

        <div className="mt-10 text-center">
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full bg-[#102f32] px-7 py-3 text-xs font-semibold text-white transition hover:bg-[#245154]"
          >
            Discover more courses <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
