export default function CourseCTA() {
  return (
    <section className="cta-section">
      <div className="site-container cta-inner">
        <div className="cta-copy">
          <span className="eyebrow cta-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Are you ready to start your journey?</h2>
          <p>Learn new skills, explore your interests, and take the next step toward your goals.</p>
        </div>
        <div className="cta-actions">
          <a className="button button-light" href="/courses">Browse courses <span aria-hidden="true">↗</span></a>
          <a className="button button-outline-light" href="/become-instructor">Become an instructor</a>
        </div>
      </div>
    </section>
  );
}
