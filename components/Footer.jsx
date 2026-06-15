import Link from "next/link";
import { business, footerServices, navLinks, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="footer-logo" href="/">
            <img src={business.logo} alt={business.name} />
          </Link>
          <p>
            Professional tile installation, stone work, carpentry, hardscaping,
            plant installation, and reliable handyman services.
          </p>
          <div className="socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Our Services</h3>
          <ul>
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <div className="contact-row">
            <span className="top-icon" aria-hidden="true">
              ☎
            </span>
            <p>
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
          </div>
          <div className="contact-row">
            <span className="top-icon" aria-hidden="true">
              @
            </span>
            <p>
              <a href={business.emailHref}>{business.email}</a>
            </p>
          </div>
          <div className="contact-row">
            <span className="top-icon" aria-hidden="true">
              +
            </span>
            <p>If you do not see your area, call us to see if we service you.</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="wrap">
          <span>TCNA &amp; ANSI Compliant</span>
          <span>&copy; 2026 {business.name}. All Rights Reserved.</span>
          <span>★★★★★ Google Business Reviews</span>
        </div>
      </div>
    </footer>
  );
}
