import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  if (!courses.length) {
    return <div className="empty-state">No courses found on this page.</div>;
  }

  return (
    <div className="course-grid">
      {courses.map((course) => <CourseCard course={course} key={course.id} />)}
    </div>
  );
}
