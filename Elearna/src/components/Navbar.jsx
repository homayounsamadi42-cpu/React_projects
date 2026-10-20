
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";

const logo =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg";

const navigation = [
  {
    label: "Home",
    to: "/",
    children: [],
  },
  {
    label: "Courses",
    to: "/courses",
    children: [
      { label: "All Courses", to: "/courses" },
      { label: "Course Details", to: "/courses/details" },
    ],
  },
  {
    label: "Pages",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Our Instructors", to: "/instructors" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    children: [{ label: "All Articles", to: "/blog" }],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [{ label: "Contact Us", to: "/contact" }],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > 30
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  // Main navigation links: white by default, yellow on hover.
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 py-2 text-[15px] font-semibold transition-colors duration-300 xl:text-base ${
      isActive
        ? "text-[#ffb900]"
        : "text-white hover:text-[#ffb900]"
    }`;

  // Submenu links: black by default, yellow on hover.
  const submenuLinkClass =
    "block rounded-lg px-4 py-3 text-sm text-black transition-colors duration-200 hover:bg-yellow-50 hover:text-[#ffb900]";

  return (
    <header
      className={`sticky top-0 z-50 -mb-[84px] w-full transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-[#0f252a] shadow-[0_6px_25px_rgba(0,0,0,0.22)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between gap-4 px-3 sm:px-8 lg:px-6 xl:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Learna home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Learna"
            className="h-auto w-[90px] sm:w-[100px]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <div className="flex items-center gap-0.5">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={navLinkClass}
                >
                  {item.label}
                </NavLink>

                {item.children.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} menu`}
                    aria-expanded={activeDropdown === item.label}
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className="rounded p-1 text-white transition-colors duration-200 hover:text-[#ffb900]"
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label
                          ? "rotate-180"
                          : "group-hover:rotate-180"
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Desktop submenu */}
              {item.children.length > 0 && (
                <div
                  className={`invisible absolute left-0 top-full min-w-48 translate-y-3 rounded-xl border-x border-t border-gray-200 border-b-2 border-b-[#ffb900] bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    activeDropdown === item.label
                      ? "!visible !translate-y-0 !opacity-100"
                      : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={`${child.label}-${child.to}`}
                      to={child.to}
                      onClick={closeMenu}
                      className={submenuLinkClass}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop account actions */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-5">
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative flex items-center justify-center p-1 text-white transition-colors duration-200 hover:text-[#ffb900]"
          >
            <ShoppingBag size={23} strokeWidth={1.7} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ffb900] px-1 text-[11px] font-bold text-[#10292d]">
              0
            </span>
          </Link>

          <div className="flex items-center gap-2.5 text-sm font-semibold text-white xl:gap-3 xl:text-base">
            <Link
              to="/login"
              className="transition-colors duration-200 hover:text-[#ffb900]"
            >
              Login
            </Link>

            <span className="h-6 w-px bg-white/50" />

            <Link
              to="/register"
              className="transition-colors duration-200 hover:text-[#ffb900]"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={
            mobileOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition-colors duration-200 hover:border-[#ffb900] hover:text-[#ffb900] lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="mx-4 mb-4 max-h-[75vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f252a] p-4 shadow-2xl lg:hidden">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/10 last:border-0"
            >
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {item.label}
                </NavLink>

                {item.children.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={activeDropdown === item.label}
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className="p-3 text-white transition-colors duration-200 hover:text-[#ffb900]"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label
                          ? "rotate-180 text-[#ffb900]"
                          : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile submenu with one yellow bottom border */}
              {activeDropdown === item.label &&
                item.children.length > 0 && (
                  <div className="mb-3 ml-3 border-l-2 border-l-[#ffb900] border-b-2 border-b-[#ffb900] rounded-bl-lg bg-white pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={`${child.label}-${child.to}`}
                        to={child.to}
                        onClick={closeMenu}
                        className={submenuLinkClass}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {/* Mobile account actions */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <Link
              to="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm text-white transition-colors duration-200 hover:text-[#ffb900]"
            >
              <ShoppingBag size={19} />
              Cart

              <span className="rounded-full bg-[#ffb900] px-2 py-0.5 text-xs font-bold text-[#10292d]">
                0
              </span>
            </Link>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-white transition-colors duration-200 hover:text-[#ffb900]"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="rounded-lg bg-[#ffb900] px-3 py-2 text-[#10292d] transition-colors duration-200 hover:bg-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
