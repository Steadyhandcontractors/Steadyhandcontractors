"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, navLinks } from "@/data/site";

export default function Header() {
  const pathname = usePathname();

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
          <nav className="menu" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link className="btn" href="/contact">
            Request a Free Estimate
          </Link>
        </div>
      </header>
    </>
  );
}
