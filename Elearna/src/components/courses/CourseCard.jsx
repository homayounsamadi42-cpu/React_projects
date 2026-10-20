import { useState } from "react";

function MetaIcon({ type }) {
  const props = {
    width: 17, height: 17, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round",
    strokeLinejoin: "round", "aria-hidden": true,
  };
  if (type === "lessons") return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>;
  if (type === "duration") return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  return <svg {...props}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.4-3.1 2.2-4.7 5.5-4.7s5.1 1.6 5.5 4.7M16 5.5a3 3 0 0 1 0 5.8M17 14.5c2.2.4 3.4 1.9 3.7 4.5" /></svg>;
}

export default function CourseCard({ course }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isFree = course.price.toLowerCase() === "free" || course.price === "$0";

  return (
    <article className="course-card">
      <a className={`course-image-wrap ${imageFailed ? "image-placeholder" : ""}`} href={`/courses/${course.id}`} aria-label={`View ${course.title}`}>
        {!imageFailed && <img src={course.image} alt="" loading="lazy" onError={() => setImageFailed(true)} />}
        {imageFailed && <span className="placeholder-mark" aria-hidden="true">E</span>}
        <span className="course-category">{course.category}</span>
        <span className={`course-price ${isFree ? "price-free" : ""}`}>{course.price}</span>
      </a>

      <div className="course-card-content">
        <div className="course-rating"><span className="star" aria-hidden="true">★</span><strong>{course.rating}</strong><span className="review-count">({course.reviews})</span></div>
        <h3><a href={`/courses/${course.id}`}>{course.title}</a></h3>
        <p className="course-description">{course.description}</p>

        <div className="course-meta">
          <div><MetaIcon type="lessons" /><span>{course.lessons}</span></div>
          <div><MetaIcon type="duration" /><span>{course.duration}</span></div>
          <div><MetaIcon type="students" /><span>{course.students}</span></div>
        </div>

        <div className="course-card-footer">
          <a className="text-link" href={`/courses/${course.id}`}>Course Details <span aria-hidden="true">↗</span></a>
          <a className="course-enroll" href={`/courses/${course.id}`}>Enroll now</a>
        </div>
      </div>
    </article>
  );
}
