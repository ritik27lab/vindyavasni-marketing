import { BUSINESS } from "../data/business.js";
import { WhatsAppIcon, PhoneIcon, CheckIcon } from "./Icons.jsx";

const POINTS = [
  "GST invoice on every order",
  "Rates within 24–48 hours",
  "Delivery across India",
  "GeM & government tenders",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="hero-place">Trusted supplier from Betul, M.P.</p>
          <h1>Petrol pump, lab and tender supplies, all in one place</h1>
          <p className="hero-en">
            Fire safety equipment, uniforms, laboratory items, electronics and
            office goods. Pick what you need and get rates on WhatsApp.
          </p>
          <div className="hero-btns">
            <a className="btn btn-wa btn-lg" href="#order">
              <WhatsAppIcon /> Order on WhatsApp
            </a>
            <a className="btn btn-outline btn-lg" href={BUSINESS.phoneHref}>
              <PhoneIcon /> Call now
            </a>
          </div>
          <ul className="hero-points">
            {POINTS.map((p) => (
              <li key={p}>
                <CheckIcon width={18} height={18} /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-img">
          <img
            src="/images/petrol-pump.jpg"
            alt="An Indian Oil petrol pump"
            width="1920"
            height="1440"
          />
        </div>
      </div>
    </section>
  );
}
