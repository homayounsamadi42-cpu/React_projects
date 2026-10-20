import { useState } from "react";

function Icon({ name, size = 19 }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
  };
  if (name === "cart") return <svg {...common}><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>;
  if (name === "user") return <svg {...common}><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c.7-4 3.2-6 7.5-6s6.8 2 7.5 6" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  return null;
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="/" aria-label="Elearna home">
          <img src="/images/logo.svg" alt="Elearna" onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <span className="brand-fallback">elearna<span>.</span></span>
        </a>

        <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>

        <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-dropdown">
            <button className="nav-link" type="button" aria-expanded={homeOpen} onClick={() => setHomeOpen(!homeOpen)}>
              Home <span className="chevron">⌄</span>
            </button>
            {homeOpen && <div className="dropdown-panel"><a href="/">Home one</a><a href="/home-two">Home two</a></div>}
          </div>

          <div className="nav-dropdown">
            <button className="nav-link nav-link-active" type="button" aria-expanded={coursesOpen} onClick={() => setCoursesOpen(!coursesOpen)}>
              Courses <span className="chevron">⌄</span>
            </button>
            {coursesOpen && <div className="dropdown-panel"><a href="/courses">All courses</a><a href="/free-courses">Free courses</a><a href="/paid-courses">Paid courses</a></div>}
          </div>

          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/blog">Blog</a>
          <a className="nav-link" href="/contact">Contact</a>

          <div className="nav-actions">
            <div className="cart-wrap">
              <button className="icon-button" type="button" aria-label="Shopping cart" aria-expanded={cartOpen} onClick={() => setCartOpen(!cartOpen)}>
                <Icon name="cart" />
                <span className="cart-count">0</span>
              </button>
              {cartOpen && <div className="cart-popover"><strong>Your cart</strong><p>Your cart is currently empty.</p><a href="/courses">Browse courses</a></div>}
            </div>
            <a className="account-link" href="/login"><Icon name="user" size={17} /> Log in</a>
            <a className="button button-primary header-signup" href="/signup">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
