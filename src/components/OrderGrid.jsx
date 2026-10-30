import { useState } from "react";
import { CATEGORIES, PRODUCTS, PRODUCT_INDEX } from "../data/products.js";
import { BUSINESS, waLink } from "../data/business.js";
import { WhatsAppIcon, CheckIcon } from "./Icons.jsx";

function buildMessage(order, { name, place, notes }) {
  const lines = Object.entries(order).map(([id, qty], i) => {
    const p = PRODUCT_INDEX[id];
    return `${i + 1}. ${p.en}: ${qty} ${p.unit}`;
  });
  const extra = [
    notes && `Other items / details: ${notes}`,
    name && `Name: ${name}`,
    place && `Place: ${place}`,
  ].filter(Boolean);
  return [
    `Namaste ${BUSINESS.name},`,
    "Please send a quotation for:",
    ...lines,
    ...(extra.length ? ["", ...extra] : []),
  ].join("\n");
}

export default function OrderGrid({ order, setOrder }) {
  const [cat, setCat] = useState("all");
  const [details, setDetails] = useState({ name: "", place: "", notes: "" });
  const shown = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  const ids = Object.keys(order);
  const count = ids.length;

  const setQty = (id, qty) =>
    setOrder((o) => {
      const next = { ...o };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  const toggle = (id) => setQty(id, order[id] ? 0 : 1);
  const setField = (k) => (e) => setDetails((d) => ({ ...d, [k]: e.target.value }));

  const message = buildMessage(order, {
    name: details.name.trim(),
    place: details.place.trim(),
    notes: details.notes.trim(),
  });

  return (
    <section className="section order" id="order">
      <div className="wrap">
        <div className="section-head">
          <h2>Our Products <span>Select items and get a quotation on WhatsApp</span></h2>
          <p>Tap a product to add it, set the quantity, then send your order on WhatsApp.</p>
        </div>

        <div className="chips" role="group" aria-label="Filter by category">
          {[{ id: "all", en: "All products" }, ...CATEGORIES].map((c) => (
            <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {c.en}
            </button>
          ))}
        </div>

        <ul className="grid6">
          {shown.map((p) => {
            const qty = order[p.id] || 0;
            return (
              <li key={p.id} className={`item${qty ? " is-selected" : ""}`}>
                <button className="item-pick" aria-pressed={!!qty} onClick={() => toggle(p.id)}>
                  <span className="item-img">
                    <img src={`/products/${p.id}.jpg`} alt="" loading="lazy" width="400" height="400" />
                    {qty > 0 && <span className="item-check"><CheckIcon width={16} height={16} /></span>}
                  </span>
                  <span className="item-name">{p.en}</span>
                </button>
                {qty ? (
                  <div className="stepper">
                    <button onClick={() => setQty(p.id, qty - 1)} aria-label={`One less ${p.en}`}>−</button>
                    <span>{qty} {p.unit}</span>
                    <button onClick={() => setQty(p.id, qty + 1)} aria-label={`One more ${p.en}`}>+</button>
                  </div>
                ) : (
                  <button className="item-add" onClick={() => setQty(p.id, 1)} aria-label={`Add ${p.en}`}>+ Add</button>
                )}
              </li>
            );
          })}
        </ul>

        <p className="catalogue-link">
          Need something else? See photos of more items in our{" "}
          <a href={BUSINESS.whatsappCatalogue} target="_blank" rel="noopener">WhatsApp catalogue</a>.
        </p>

        <div className="cart" id="your-order">
          <div className="cart-list">
            <div className="cart-head">
              <h3>Your order {count > 0 && <span>({count} item{count > 1 ? "s" : ""})</span>}</h3>
              {count > 0 && (
                <button className="link-btn" onClick={() => setOrder({})}>Clear all</button>
              )}
            </div>
            {count === 0 ? (
              <p className="muted">No items selected yet. Tap any product above to add it.</p>
            ) : (
              <ol>
                {ids.map((id) => {
                  const p = PRODUCT_INDEX[id];
                  return (
                    <li key={id}>
                      <img src={`/products/${id}.jpg`} alt="" width="48" height="48" />
                      <span className="cart-name">{p.en}</span>
                      <div className="stepper small">
                        <button onClick={() => setQty(id, order[id] - 1)} aria-label={`One less ${p.en}`}>−</button>
                        <span>{order[id]} {p.unit}</span>
                        <button onClick={() => setQty(id, order[id] + 1)} aria-label={`One more ${p.en}`}>+</button>
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>

          <div className="cart-form">
            <div className="form-row">
              <label>
                Your name
                <input value={details.name} onChange={setField("name")} autoComplete="name" />
              </label>
              <label>
                Town / pump / office
                <input value={details.place} onChange={setField("place")} placeholder="Betul, Multai…" />
              </label>
            </div>
            <label>
              Other items or details (optional)
              <textarea rows="3" value={details.notes} onChange={setField("notes")} placeholder="Sizes, brand, delivery date, tender number…" />
            </label>
            {count > 0 && (
              <pre className="preview" aria-label="Message preview">{message}</pre>
            )}
            <a
              className={`btn btn-wa btn-lg btn-block${count ? "" : " is-disabled"}`}
              href={count ? waLink(message) : undefined}
              aria-disabled={!count}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon /> {count ? "Send order on WhatsApp" : "Select items to order"}
            </a>
          </div>
        </div>
      </div>

      {count > 0 && (
        <a className="order-bar" href="#your-order">
          <span><strong>{count}</strong> item{count > 1 ? "s" : ""} selected</span>
          <span className="order-bar-cta"><WhatsAppIcon /> Review &amp; send</span>
        </a>
      )}
    </section>
  );
}
