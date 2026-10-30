import { BUSINESS, waLink } from "../data/business.js";
import { WhatsAppIcon, PhoneIcon } from "./Icons.jsx";

// Round WhatsApp button on desktop; Call + WhatsApp bar on phones.
// Hidden while the order bar is showing, so the two don't stack.
export default function WhatsAppFloat({ hidden }) {
  if (hidden) return null;
  return (
    <>
      <a className="wa-float" href={waLink("Namaste, I need a quotation.")} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <WhatsAppIcon width={30} height={30} />
      </a>
      <div className="mobile-bar">
        <a href={BUSINESS.phoneHref}><PhoneIcon /> Call now</a>
        <a className="mb-wa" href={waLink("Namaste, I need a quotation.")} target="_blank" rel="noopener"><WhatsAppIcon /> WhatsApp</a>
      </div>
    </>
  );
}
