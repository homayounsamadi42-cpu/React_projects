import { categories } from "../data/courses";

export default function CourseCategories() {
  return (
    <section className="category-section" aria-label="Course categories">
      <div className="site-container category-grid">
        {categories.map((category) => (
          <a className="category-card" href={`/courses?category=${encodeURIComponent(category.name)}`} key={category.name}>
            <span className="category-icon" aria-hidden="true">{category.icon}</span>
            <span className="category-copy">
              <strong>{category.name}</strong>
              <span>{category.count} Courses</span>
            </span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
