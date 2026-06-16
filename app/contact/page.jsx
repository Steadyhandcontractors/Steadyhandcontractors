import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { business } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const sent = params?.sent === "1";

  return (
    <main>
      <PageHero kicker="Contact" title="Request a Free Estimate">
        Tell us about your tile, stone, carpentry, hardscaping, plant
        installation, or handyman project and we will follow up with you.
      </PageHero>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="copy">
            <p className="eyebrow">Get in Touch</p>
            <h2>{business.name}</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={business.phoneHref}>{business.phone}</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={business.emailHref}>{business.email}</a>
            </p>
            <p>{business.serviceAreaFull}</p>
            <p>
              <strong>Hours:</strong>
              <br />
              {business.hours}
              <br />
              Saturday: By Appointment
            </p>
          </div>
          <ContactForm sent={sent} />
        </div>
      </section>
    </main>
  );
}
