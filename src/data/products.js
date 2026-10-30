// The product grid (6 categories × 6 products). Each product's photo is
// /products/<id>.jpg. Edit names here; keep ids unique.
export const CATEGORIES = [
  { id: "safety", en: "Fire Safety" },
  { id: "ppe", en: "Uniforms & PPE" },
  { id: "lab", en: "Laboratory" },
  { id: "electronics", en: "Electronics" },
  { id: "electrical", en: "Electrical" },
  { id: "office", en: "Office & General" },
];

export const PRODUCTS = [
  { id: "foam", cat: "safety", en: "Mechanical foam extinguisher, 50 L trolley", unit: "pcs" },
  { id: "dcp9", cat: "safety", en: "DCP fire extinguisher, 9 kg (ISI)", unit: "pcs" },
  { id: "dcp5", cat: "safety", en: "DCP fire extinguisher, 5 kg (ISI)", unit: "pcs" },
  { id: "co2", cat: "safety", en: "CO₂ fire extinguisher, 4.5 kg", unit: "pcs" },
  { id: "bucket", cat: "safety", en: "Fire bucket stand with 4 buckets", unit: "sets" },
  { id: "firstaid", cat: "safety", en: "First-aid box", unit: "pcs" },

  { id: "uniform", cat: "ppe", en: "Staff uniform with name/logo", unit: "sets" },
  { id: "jacket", cat: "ppe", en: "Reflective safety jacket", unit: "pcs" },
  { id: "helmet", cat: "ppe", en: "Safety helmet", unit: "pcs" },
  { id: "shoes", cat: "ppe", en: "Safety shoes, steel toe", unit: "pairs" },
  { id: "gloves", cat: "ppe", en: "Safety gloves", unit: "pairs" },
  { id: "coverall", cat: "ppe", en: "Boiler suit / coverall", unit: "pcs" },

  { id: "beaker", cat: "lab", en: "Glass beaker set", unit: "sets" },
  { id: "flask", cat: "lab", en: "Conical flask", unit: "pcs" },
  { id: "testtube", cat: "lab", en: "Test tubes with stand", unit: "sets" },
  { id: "microscope", cat: "lab", en: "Compound microscope", unit: "pcs" },
  { id: "balance", cat: "lab", en: "Digital weighing balance", unit: "pcs" },
  { id: "labcoat", cat: "lab", en: "Lab coat", unit: "pcs" },

  { id: "desktop", cat: "electronics", en: "Desktop computer", unit: "pcs" },
  { id: "laptop", cat: "electronics", en: "Laptop", unit: "pcs" },
  { id: "printer", cat: "electronics", en: "Printer", unit: "pcs" },
  { id: "cctv", cat: "electronics", en: "CCTV camera", unit: "pcs" },
  { id: "ups", cat: "electronics", en: "UPS / inverter", unit: "pcs" },
  { id: "router", cat: "electronics", en: "Wi-Fi router", unit: "pcs" },

  { id: "ledbulb", cat: "electrical", en: "LED bulb", unit: "pcs" },
  { id: "tubelight", cat: "electrical", en: "LED tube light", unit: "pcs" },
  { id: "fan", cat: "electrical", en: "Ceiling fan", unit: "pcs" },
  { id: "extension", cat: "electrical", en: "Extension board", unit: "pcs" },
  { id: "mcb", cat: "electrical", en: "MCB / switchgear", unit: "pcs" },
  { id: "wire", cat: "electrical", en: "Electrical wire coil", unit: "coils" },

  { id: "almirah", cat: "office", en: "Steel almirah", unit: "pcs" },
  { id: "chair", cat: "office", en: "Office chair", unit: "pcs" },
  { id: "table", cat: "office", en: "Office table", unit: "pcs" },
  { id: "stationery", cat: "office", en: "Office stationery kit", unit: "sets" },
  { id: "cleaning", cat: "office", en: "Housekeeping & cleaning items", unit: "sets" },
  { id: "tools", cat: "office", en: "Hand tool kit", unit: "sets" },
];

export const PRODUCT_INDEX = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
