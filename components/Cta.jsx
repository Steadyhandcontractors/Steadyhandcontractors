import Link from "next/link";

export default function Cta({
  title = "Ready to Start Your Project?",
  text = "Get a free estimate for your tile, stone, carpentry, or handyman project.",
}) {
  return (
    <section className="cta">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-light" href="/contact">
          Request a Free Estimate
        </Link>
      </div>
    </section>
  );
}
