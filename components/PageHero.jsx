export default function PageHero({ kicker, title, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
