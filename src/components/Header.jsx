import { useState } from "react";
import { BUSINESS, waLink } from "../data/business.js";
import { PhoneIcon, ClockIcon, PinIcon, WhatsAppIcon } from "./Icons.jsx";

const LINKS = [
  ["#order", "Products"],
  ["#tenders", "Tenders"],
  ["#why", "Why Us"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <a href={BUSINESS.phoneHref}>
            <PhoneIcon width={15} height={15} /> {BUSINESS.phone}
          </a>
          <span>
            <ClockIcon width={15} height={15} /> {BUSINESS.hours}
          </span>
          <span className="hide-sm">
            <PinIcon width={15} height={15} /> Betul, Madhya Pradesh
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="logo" onClick={() => setOpen(false)}>
            {/* <span className="logo-mark">VM</span>
            <span className="logo-text">
              <strong>Vindyvasni Marketing</strong>
              <small>Betul, Madhya Pradesh</small>
            </span> */}
            <img
              src="/images/vv_logo.png"
              alt="An Indian Oil petrol pump"
              width="240"
              height="300"
            />
          </a>
          <nav className={`nav${open ? " is-open" : ""}`} id="nav">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="btn btn-wa nav-wa"
              href={waLink("Namaste, I need a quotation.")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </nav>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
