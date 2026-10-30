import { waLink } from "../data/business.js";
import { WhatsAppIcon } from "./Icons.jsx";

const STEPS = [
  ["Share the tender", "Send the bid number or item list on WhatsApp."],
  ["Rates & documents", "We prepare the quotation and bid documents."],
  [
    "Sourcing & quality check",
    "Sourced from trusted makers, checked before dispatch.",
  ],
  ["On-time delivery", "Delivered with GST invoice, challan and warranty."],
];

export default function Tenders() {
  return (
    <section className="section tenders" id="tenders">
      <div className="wrap tenders-grid">
        <div>
          <div className="section-head left">
            <h2>
              Government Tenders <span>GeM, MP e-Tender and other portals</span>
            </h2>
            <p>
              Supply of electronics and general items against government
              tenders, from the first quotation to the final delivery.
            </p>
          </div>
          <ol className="steps">
            {STEPS.map(([title, text], i) => (
              <li key={title}>
                <span className="step-no">{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            className="btn btn-wa btn-lg"
            href={waLink("Namaste, I have a tender. Bid number: ")}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon /> Send tender number
          </a>
        </div>
        <img
          className="tenders-img"
          src="/images/office-computers-india.png"
          alt="Computers in an office lab in Baramati, Maharashtra"
          loading="lazy"
          width="1920"
          height="1440"
        />
      </div>
    </section>
  );
}
