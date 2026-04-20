"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { WHATSAPP_LINK, SERVICE_CATEGORIES } from "@/lib/constants";
import { services } from "@/lib/sampleData";

/* Group services by category once at module level */
const servicesByCategory = SERVICE_CATEGORIES.map((cat) => ({
  label: cat,
  items: services.filter((s) => s.category === cat),
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(SERVICE_CATEGORIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openDropdown = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const activeGroup = servicesByCategory.find((g) => g.label === activeCategory) ?? servicesByCategory[0];

  const textColor = scrolled ? "text-primary" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col" onClick={() => setOpen(false)}>
          <span
            className={`font-heading text-xl font-bold tracking-tight transition-colors lg:text-2xl ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Dr. Sarika Gangwar
          </span>
          <span
            className={`text-xs tracking-widest uppercase transition-colors ${
              scrolled ? "text-accent" : "text-accent-light"
            }`}
          >
            Plastic &amp; Cosmetic Surgeon
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${textColor}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services mega-dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-accent ${textColor}`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-160 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <div className="flex">
                  {/* Category tabs */}
                  <div className="w-44 shrink-0 bg-gray-50 border-r border-gray-100 py-4">
                    {servicesByCategory.map((group) => (
                      <button
                        key={group.label}
                        onMouseEnter={() => setActiveCategory(group.label)}
                        onClick={() => setActiveCategory(group.label)}
                        className={`w-full px-5 py-2.5 text-left text-sm font-medium transition-all ${
                          activeCategory === group.label
                            ? "bg-primary text-white rounded-full mx-2 w-[calc(100%-16px)]!"
                            : "text-gray-600 hover:text-primary"
                        }`}
                      >
                        {group.label}
                      </button>
                    ))}
                  </div>

                  {/* Service list */}
                  <div className="flex-1 py-4 px-2">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {activeGroup.items.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-accent hover:bg-amber-50 transition-colors"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 px-3">
                      <Link
                        href="/services"
                        onClick={() => setDropdownOpen(false)}
                        className="text-xs font-semibold text-accent hover:underline"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            { label: "Results", href: "/results" },
            { label: "Media", href: "/media" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${textColor}`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-cream-dark px-6 py-6">
          <div className="flex flex-col gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-primary hover:text-accent transition-colors"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="mb-2 ml-1 border-l-2 border-accent/30 pl-3">
                  {servicesByCategory.map((group) => (
                    <div key={group.label} className="mb-3">
                      <p className="mb-1 pt-1 text-xs font-bold uppercase tracking-widest text-accent">
                        {group.label}
                      </p>
                      {group.items.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                          className="block py-1 text-sm text-gray-600 hover:text-accent transition-colors"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className="block py-1 text-sm font-semibold text-accent hover:underline"
                  >
                    View all →
                  </Link>
                </div>
              )}
            </div>

            {[
              { label: "Results", href: "/results" },
              { label: "Media", href: "/media" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
