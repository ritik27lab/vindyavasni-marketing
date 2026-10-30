import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import OrderGrid from "./components/OrderGrid.jsx";
import Tenders from "./components/Tenders.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

const STORAGE_KEY = "vm-order";

function loadOrder() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export default function App() {
  // The visitor's order: { productId: quantity }, kept across page reloads.
  const [order, setOrder] = useState(loadOrder);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
    } catch {
      /* storage unavailable: the order just won't persist */
    }
  }, [order]);
  const count = Object.keys(order).length;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <OrderGrid order={order} setOrder={setOrder} />
        <Tenders />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat hidden={count > 0} />
    </>
  );
}
