import Link from "next/link";
import Cta from "@/components/Cta";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  homeServices,
  proofItems,
  trustChecks,
} from "@/data/site";

export const metadata = {
  title: "Tile, Stone & Handyman Services",
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="hero-content">
            <p className="kicker">Quality Work. Reliable Service.</p>
            <h1>Tile, Stone &amp; Handyman Services</h1>
            <p>
              Professional craftsmanship rooted in precision, integrity, and care
              for every home project, inside and out.
            </p>
            <div className="actions">
              <Link className="btn" href="/services">
                Our Services
              </Link>
              <Link className="btn btn-outline" href="/contact">
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap proof-grid">
          {proofItems.map((item) => (
            <div className="proof-item" key={item.title}>
              <span className="proof-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>
                <span className="proof-title">{item.title}</span>
                <span className="proof-text">{item.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What We Do</p>
            <h2>Our Services</h2>
          </div>
          <div className="services">
            {homeServices.map((service) => (
              <article className="card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <div className="center">
            <Link className="btn" href="/services">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about">
          <div className="copy">
            <p className="eyebrow">Why Choose Us</p>
            <h2>
              Built on Trust.
              <br />
              Focused on Quality.
            </h2>
            <p>
              At Steady Hand Contractors, every project is handled with respect
              for your home, clear communication, and a commitment to doing the
              work the right way.
            </p>
            <ul className="checks">
              {trustChecks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
            <Link className="btn" href="/about">
              Learn More About Us
            </Link>
          </div>
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1300&q=80"
              alt="Completed bathroom remodel with tiled shower and vanity"
            />
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <Cta />
    </main>
  );
}
