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
              Noah Gillespie is from Lexington, South Carolina, and graduated
              from The Citadel, The Military College of South Carolina, in 2023.
              His background has shaped the way he approaches his work:
              disciplined, detail-focused, and committed to doing things the
              right way.
            </p>
            <p>
              As a Christian, Noah takes pride in his craftsmanship and aims to
              honor the Lord through integrity, honest work, and the way he
              treats every customer and their home.
            </p>
            <p>
              Noah has completed Ceramic Tile Education Foundation training in
              floor and wall tile installation, as well as shower waterproofing.
              He has also been trained by Schluter Systems to properly install
              their shower waterproofing products.
            </p>
            <p>
              After graduating, Noah started Steady Hand Contractors with a focus
              on quality tile work, honest communication, and dependable service.
              He believes every project should be completed with care, from the
              first conversation to the final cleanup. Based in the Charleston
              area, Noah serves homeowners who want their work done cleanly,
              correctly, and with long-term durability in mind.
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
