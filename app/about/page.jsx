import Link from "next/link";
import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { ownerChecks } from "@/data/site";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero kicker="About Us" title="Craftsmanship With Integrity">
        Steady Hand Contractors is built around careful work, honest
        communication, and a commitment to honoring the Lord through
        craftsmanship and integrity.
      </PageHero>

      <section className="section">
        <div className="wrap about">
          <div className="copy">
            <p className="eyebrow">Owner Bio</p>
            <h2>Meet the Craftsman Behind Steady Hand</h2>
            <p>
              I am from Lexington, South Carolina, and graduated from The
              Citadel, The Military College of South Carolina, in 2023. My
              background shaped the way I approach work: disciplined,
              detail-focused, and committed to doing things the right way.
            </p>
            <p>
              As a Christian, I take pride in all of my work and aim to glorify
              and honor the Lord through craftsmanship, integrity, and how I
              treat every customer and their home.
            </p>
            <p>
              I have completed the Ceramic Tile Education Foundation course for
              floor and wall tile, as well as shower waterproofing training. I
              have also been trained by Schluter Systems to install their
              waterproofing products for showers.
            </p>
            <ul className="checks">
              {ownerChecks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
            <Link className="btn" href="/contact">
              Contact Us
            </Link>
          </div>
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
              alt="Owner photo placeholder"
            />
          </div>
        </div>
      </section>

      <Cta text="Get a free estimate for your next project." />
    </main>
  );
}
