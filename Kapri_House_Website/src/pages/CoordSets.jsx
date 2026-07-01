import "../styles/CoordSets.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cs2  from "../assets/cs2.webp";
import cs3  from "../assets/cs3.webp";
import cs4  from "../assets/cs4.webp";
import cs5  from "../assets/cs5.webp";
import cs6  from "../assets/cs6.webp";
import css1 from "../assets/css1.webp";
import cord from "../assets/cord.webp";
import co1 from "../assets/co1.webp";
import co2 from "../assets/co2.webp";
import co3 from "../assets/co3.webp";
import co4 from "../assets/co4.webp";
const products = [
  {
    id: 1,
    name: "Floral Embroidered Co-ord Set",
    category: "Embroidered",
    color: "#ff69b4",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2499,
    discount: "37% OFF",
    image: cs2,
  },
  {
    id: 2,
    name: "Stripe Cotton Co-ord Set",
    category: "Cotton Co-Ord",
    color: "#4a6fa5",
    sizes: ["M", "L", "XL"],
    mrp: 3500,
    price: 2199,
    discount: "37% OFF",
    image: cs3,
  },
  // {
  //   id: 3,
  //   name: "Solid Linen Co-ord Set",
  //   category: "Printed Sets",
  //   color: "#6b8e6b",
  //   sizes: ["S", "M", "L"],
  //   mrp: 4200,
  //   price: 2799,
  //   discount: "33% OFF",
  //   image: cs4,
  // },
  {
    id: 4,
    name: "Tie-Dye Co-ord Set",
    category: "Co-ord Sets",
    color: "#ff0000",
    sizes: ["M", "L", "XL"],
    mrp: 3800,
    price: 2499,
    discount: "34% OFF",
    image: cs5,
  },
  {
    id: 5,
    name: "Casual Co-ord Set",
    category: "Co-ord Sets",
    color: "#b8860b",
    sizes: ["L", "XL", "XXL"],
    mrp: 4500,
    price: 2999,
    discount: "33% OFF",
    image: cs6,
  },
  {
    id: 6,
    name: "Block Print Co-ord Set",
    category: "Embroidered",
    color: "#ffa500",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2499,
    discount: "37% OFF",
    image: css1,
  },
  {
    id: 7,
    name: "Pastel Co-ord Set",
    category: "New Arrivals",
    color: "#e8c9a0",
    sizes: ["S", "M", "L"],
    mrp: 3500,
    price: 2199,
    discount: "37% OFF",
    image: co4,
  },
  {
    id: 8,
    name: "Cotton Casual Co-ord Set",
    category: "New Arrivals",
    color: "#6b8e6b",
    sizes: ["M", "L", "XL"],
    mrp: 3200,
    price: 1999,
    discount: "37% OFF",
    image: co1,
  },
  {
    id: 9,
    name: "Printed Kurti Co-ord Set",
    category: "Printed Sets",
    color: "#d97882",
    sizes: ["S", "M", "L"],
    mrp: 4200,
    price: 2799,
    discount: "33% OFF",
    image: cs4,
  },
  {
    id: 10,
    name: "Organza Co-ord Set",
    category: "New Arrivals",
    color: "#00ced1",
    sizes: ["L", "XL", "XXL"],
    mrp: 5000,
    price: 3499,
    discount: "30% OFF",
    image: co2,
  },
  {
    id: 11,
    name: "Rust Cotton Co-ord Set",
    category: "Cotton Co-Ord",
    color: "#8b4513",
    sizes: ["M", "L", "XL"],
    mrp: 3800,
    price: 2499,
    discount: "34% OFF",
    image: co3,
  },
  // {
  //   id: 12,
  //   name: "Ivory Lace Co-ord Set",
  //   category: "Embroidered",
  //   color: "#fff",
  //   sizes: ["S", "M", "L"],
  //   mrp: 4500,
  //   price: 2999,
  //   discount: "33% OFF",
  //   image: css1,
  // },
];

const categories = ["New Arrivals", "Co-Ord Sets", "Cotton Co-Ord", "Printed Sets", "Embroidered"];
const colors = [
  "#fff",
  "#000",
  "#e8c9a0",
  "#d97882",
  "#6b8e6b",
  "#b8860b",
  "#4a6fa5",
  "#c49a6c",
  "#ff0000",
  "#800080",
  "#ffa500",
  "#ffff00",
  "#00ced1",
  "#ff69b4",
  "#808080",
  "#8b4513",
];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function CoordSets() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange,       setPriceRange]       = useState(5000);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

const filteredProducts = products.filter((product) => {
  const categoryMatch =
    !selectedCategory ||
    product.category === selectedCategory;

  const colorMatch =
    !selectedColor ||
    product.color === selectedColor;

  const sizeMatch =
    !selectedSize ||
    product.sizes.includes(selectedSize);

  const priceMatch =
    product.price <= priceRange;

  return (
    categoryMatch &&
    colorMatch &&
    sizeMatch &&
    priceMatch
  );
});

const sorted = [...filteredProducts].sort((a, b) => {
  if (sortBy === "price-asc") return a.price - b.price;

  if (sortBy === "price-desc") return b.price - a.price;

  if (sortBy === "discount")
    return parseInt(b.discount) - parseInt(a.discount);

  return a.id - b.id;
});

  return (
    <div className="cs-page">

      <div className="cs-breadcrumb">
        <span>Home</span> › <span>Co-ord Sets</span>
      </div>

     <img src={cord} alt="Tops and Co-ord Sets" className="cs-banner" />

      <div className="cs-toolbar">
        <button className="cs-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="cs-count">{sorted.length} Products</span>
        <div className="cs-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="cs-body">

        {filterOpen && (
          <aside className="cs-sidebar">

            <div className="cs-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="cs-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="cs-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={5000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="cs-range"
              />
              <div className="cs-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

            <div className="cs-filter-group">
              <h4>COLOR</h4>
              <div className="cs-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`cs-color-dot ${selectedColor === c ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="cs-filter-group">
              <h4>SIZE</h4>
              <div className="cs-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`cs-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`cs-grid ${filterOpen ? "" : "cs-grid--full"}`}>
         {sorted.length === 0 ? (
  <div className="cs-no-products">
    <h2>No Co-Ord Sets Found</h2>
    <p>Try changing your filters.</p>
  </div>
) : 
  sorted.map(product => (
            <div
              className="cs-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="cs-img-wrap">
                <img src={product.image} alt={product.name} />
                {/* <span className="cs-badge">SALE</span> */}
              </div>
              <div className="cs-info">
                <div className="cs-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="cs-price">
                  <span className="cs-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="cs-current">₹{product.price.toLocaleString()}</span>
                  <span className="cs-off">({product.discount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}