import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main>
      <PageHero kicker="Gallery" title="Project Photos">
        Browse completed tile, carpentry, drywall, and handyman project photos
        from Steady Hand Contractors.
      </PageHero>
      <section className="section"><div className="wrap"><Gallery /></div></section>
      <Cta text="Get a free estimate for your next project." />
    </main>
  );
}
