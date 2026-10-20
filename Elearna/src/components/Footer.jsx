
import {
  ArrowUpRight,
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const footerGroups = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Courses", href: "/#courses" },
      { label: "Programs", href: "/#programs" },
    ],
  },
  {
    title: "Popular Courses",
    links: [
      { label: "Web Development", href: "/#courses" },
      { label: "UI/UX Design", href: "/#courses" },
      { label: "Business Management", href: "/#courses" },
      { label: "Digital Marketing", href: "/#courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Programs", href: "/#programs" },
      { label: "Contact", href: "mailto:info@example.com" },
      { label: "FAQs", href: "mailto:info@example.com" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com",
    Icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0b2427] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 pt-24 sm:px-8 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
              <BookOpen size={22} />
            </span>

            <span className="text-2xl font-bold tracking-tight">
              elearna<span className="text-amber-400">.</span>
            </span>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Learn new skills, discover opportunities, and build a brighter
            future with accessible online education.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="mailto:info@example.com"
              className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-amber-400"
            >
              <Mail size={16} />
              info@example.com
            </a>

            <a
              href="tel:+93700000000"
              className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-amber-400"
            >
              <Phone size={16} />
              +93 700 000 000
            </a>

            <p className="flex items-center gap-3 text-sm text-slate-400">
              <MapPin size={16} />
              Kabul, Afghanistan
            </p>
          </div>

          <div className="mt-7 flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-sm font-bold">{group.title}</h3>

            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Ele arna. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="mailto:info@example.com"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="mailto:info@example.com"
              className="hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
