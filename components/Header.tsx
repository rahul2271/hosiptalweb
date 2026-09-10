"use client";

import { useEffect, useState } from "react";
import { nav, contact } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar — call + consultation, centered, both work on mobile and desktop */}
      <div className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-8 flex items-center justify-center gap-2">
          <a
            href={`tel:${contact.phoneHref}`}
            className="flex items-center gap-1.5 rounded bg-white px-2.5 py-1 text-[0.68rem] font-medium text-navy"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
            <span className="hidden sm:inline">{contact.phoneSecondary}</span>
          </a>
          <button
            onClick={() => handleNavClick("booking")}
            className="rounded bg-cream px-2.5 py-1 text-[0.68rem] font-medium text-navy hover:bg-creamDeep transition-colors"
          >
            Consultation
          </button>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[76px] items-center justify-between gap-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 shrink-0"
            >
              {/* Logo placeholder — drop the real file at /public/logo.png (transparent PNG,
                  roughly square) and it will render here at the same size. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./logo-blue.avif"
                alt="Yukti Herbs"
                width={100}
                height={100}
                className="h-[110px] w-[110px] object-contain shrink-0"
              />
              
            </a>

            <nav className="hidden xl:flex items-center gap-6 min-w-0" aria-label="Section navigation">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap text-[0.85rem] font-medium transition-colors ${
                    active === item.id ? "text-goldDeep" : "text-navy/75 hover:text-navy"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden xl:flex items-center shrink-0">
              <button
                onClick={() => handleNavClick("booking")}
                className="rounded-md bg-gold px-5 py-2.5 text-[0.82rem] font-semibold text-navy hover:bg-goldDeep hover:text-white transition-colors"
              >
                Book Consultation
              </button>
            </div>

            <button
              className="xl:hidden text-navy p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden border-t border-line bg-white px-5 pb-6 pt-2">
            <nav className="flex flex-col" aria-label="Section navigation mobile">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-3 text-left text-base border-b border-line ${
                    active === item.id ? "text-goldDeep" : "text-navy"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <a href={`tel:${contact.phoneHref}`} className="text-sm text-navy/70">
                Call {contact.phoneSecondary}
              </a>
              <button
                onClick={() => handleNavClick("booking")}
                className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
