import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { serviceRows } from "@/data/site";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero kicker="Services" title="Tile, Stone, Carpentry & Outdoor Work">
        Interior and exterior work completed with steady craftsmanship, clear
        communication, and respect for your home.
      </PageHero>

      <section className="section">
        <div className="wrap service-list">
          {serviceRows.map((service) => (
            <article className="service-row" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.alt} />
              </div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta text="Get a free estimate for your next project." />
    </main>
  );
}
