import { BUSINESS } from "../data/business.js";
import { CREDITS } from "../data/credits.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">Vindyvasni Marketing</p>
          <p>{BUSINESS.address}</p>
          <p>Petrol pump safety · Uniforms · Lab items · Tender supply</p>
        </div>
        <div className="footer-links">
          <a href="#order">Products</a>
          <a href="#tenders">Tenders</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
          <a href={BUSINESS.whatsappCatalogue} target="_blank" rel="noopener">
            WhatsApp Catalogue
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} Vindyvasni Marketing. All rights
          reserved.
        </p>
        <p className="built">
          Built with <span aria-label="love">♥</span> by Stack Racers Solutions
        </p>
        {/* <details className="credits">
          <summary>Photo credits</summary>
          <ul>
            {CREDITS.map((c) => (
              <li key={c.page}>
                <a href={c.page} target="_blank" rel="noopener">{c.title}</a> by {c.creator},{" "}
                <a href={c.licenseUrl} target="_blank" rel="noopener">{c.license}</a>
              </li>
            ))}
          </ul>
        </details> */}
      </div>
    </footer>
  );
}
