import PageHero from "@/components/PageHero";
import { business } from "@/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
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
          <div className="form-card">
            <form action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID" method="POST">
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" />
              </label>
              <label>
                Project Location
                <input
                  type="text"
                  name="location"
                  placeholder="City or neighborhood"
                />
              </label>
              <label>
                Project Details
                <textarea
                  name="message"
                  required
                  placeholder="Tell us what you need help with."
                />
              </label>
              <button type="submit">Send Request</button>
            </form>
            <p className="form-note">
              Note: replace the Formspree action URL with your real form endpoint
              before going live.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
