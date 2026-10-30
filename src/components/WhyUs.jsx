const POINTS = [
  ["Fair rates", "Better prices on bulk orders, sourced directly."],
  ["Checked quality", "Every item is checked before it is dispatched."],
  ["On-time delivery", "Before your tender or inspection date."],
  ["One supplier", "Safety, uniforms, lab and tender items on one bill."],
];

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="wrap why-grid">
        <img
          src="/images/fire-safety-training.png"
          alt="Fire extinguisher safety demonstration for students in India"
          loading="lazy"
          width="1920"
          height="1440"
        />
        <div>
          <div className="section-head left">
            <h2>
              Why choose us <span>A supplier you can rely on</span>
            </h2>
          </div>
          <ul className="why-list">
            {POINTS.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
