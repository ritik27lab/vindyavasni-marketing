import { BUSINESS, waLink } from "../data/business.js";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, WhatsAppIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="section-head left">
            <h2>Contact us <span>We reply within one business day</span></h2>
          </div>
          <ul className="contact-list">
            <li>
              <PhoneIcon />
              <div><small>Phone</small><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></div>
            </li>
            <li>
              <WhatsAppIcon />
              <div><small>WhatsApp</small><a href={waLink("Namaste!")} target="_blank" rel="noopener">{BUSINESS.phone}</a></div>
            </li>
            <li>
              <MailIcon />
              <div><small>Email</small><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
            </li>
            <li>
              <PinIcon />
              <div><small>Address</small><span>{BUSINESS.address}</span></div>
            </li>
            <li>
              <ClockIcon />
              <div><small>Hours</small><span>{BUSINESS.hours}</span></div>
            </li>
          </ul>
          <div className="contact-btns">
            <a className="btn btn-wa btn-lg" href={waLink("Namaste!")} target="_blank" rel="noopener"><WhatsAppIcon /> WhatsApp</a>
            <a className="btn btn-outline btn-lg" href={BUSINESS.phoneHref}><PhoneIcon /> Call now</a>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Vindyvasni Marketing location on Google Maps"
            src="https://www.google.com/maps?q=Housing+Board,+Betul+Ganj,+Betul,+Madhya+Pradesh+460001&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
