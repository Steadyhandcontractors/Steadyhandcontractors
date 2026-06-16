import Cta from "@/components/Cta";
import PageHero from "@/components/PageHero";
import { galleryImages } from "@/data/site";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero kicker="Gallery" title="Project Photos">
        Browse completed tile, repair, carpentry, mailbox, and outdoor project
        photos from Steady Hand Contractors.
      </PageHero>

      <section className="section">
        <div className="wrap gallery">
          {galleryImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <Cta text="Get a free estimate for your next project." />
    </main>
  );
}
