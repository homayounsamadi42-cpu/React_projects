const footerGroups = [
  { title: "Popular courses", links: [["Finance", "/courses?category=finance"], ["Management", "/courses?category=management"], ["Design", "/courses?category=design"], ["Web development", "/courses?category=development"]] },
  { title: "Company", links: [["About", "/about"], ["Courses", "/courses"], ["Blog", "/blog"], ["Contact", "/contact"], ["License", "/license"], ["Pricing", "/pricing"]] },
  { title: "CMS", links: [["Course details", "/courses/example"], ["Instructor details", "/instructors/example"], ["Blog details", "/blog/example"]] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="/" aria-label="Elearna home">
            <img src="/images/logo.svg" alt="Elearna" onError={(event) => { event.currentTarget.style.display = "none"; }} />
            <span className="brand-fallback">elearna<span>.</span></span>
          </a>
          <p>Learn something new today and build the skills for tomorrow.</p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-column" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </div>
        ))}

        <div className="footer-column footer-help">
          <h3>Need help?</h3>
          <span className="footer-contact-label">Call us</span>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
          <span className="footer-contact-label">Email us</span>
          <a href="mailto:support@elearna.com">support@elearna.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Elearna. All rights reserved.</p>
          <p>Design by <a href="https://radianttemplates.com">Radiant Templates</a> · Powered by <a href="https://webflow.com">Webflow</a></p>
        </div>
      </div>
    </footer>
  );
}
