"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { business, navLinks } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="top-item">
            <span className="top-icon" aria-hidden="true">
              +
            </span>
            {business.serviceArea}
          </div>
          <div className="top-items">
            <div className="top-item">
              <span className="top-icon" aria-hidden="true">
                o
              </span>
              {business.hours}
            </div>
            <a className="top-item red" href={business.phoneHref}>
              <span className="top-icon" aria-hidden="true">
                ☎
              </span>
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <Link className="logo" href="/" aria-label={`${business.shortName} home`}>
            <img src={business.logo} alt={business.name} />
          </Link>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav id="primary-menu" className={`menu${menuOpen ? " menu-open" : ""}`} aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link className="mobile-menu-cta" href="/contact" onClick={() => setMenuOpen(false)}>Request a Free Estimate</Link>
          </nav>
          <Link className="btn nav-cta" href="/contact">
            Request a Free Estimate
          </Link>
        </div>
      </header>
    </>
  );
}
