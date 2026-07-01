import "../styles/Lehengas.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import lh1  from "../assets/lh1.webp";
import lh2  from "../assets/lh2.webp";
import lh3  from "../assets/lh3.webp";
import lh4  from "../assets/lh4.webp";
import lh5  from "../assets/lh5.webp";
import lh6  from "../assets/lh6.webp";
import lh7  from "../assets/lh7.webp";
import lh8  from "../assets/lh8.webp";
import lh9  from "../assets/lh9.webp";
import lh10 from "../assets/lh10.webp";
import lh11 from "../assets/lh11.webp";
import lh12 from "../assets/thumbnails/lehanga.webp";
import lehengaBanner from "../assets/lehangaban.webp";

const products = [
  {
    id: 1,
    name: "Embroidered Silk Lehenga",
    category: "Embroidered",
    color: "#e8c9a0", // Cream / Beige
    sizes: ["M", "L", "XL"],
    mrp: 8999,
    price: 5999,
    discount: "33% OFF",
    image: lh1,
  },
  {
    id: 2,
    name: "Bridal Velvet Lehenga",
    category: "Bridal Lehengas",
    color: "#6b8e23", // Green
    sizes: ["L", "XL", "XXL"],
    mrp: 12999,
    price: 8999,
    discount: "31% OFF",
    image: lh2,
  },
  {
    id: 3,
    name: "Floral Print Lehenga Set",
    category: "Bridal Lehengas",
    color: "#1e90ff", // Royal Blue
    sizes: ["S", "M", "L"],
    mrp: 6999,
    price: 4499,
    discount: "36% OFF",
    image: lh3,
  },
  {
    id: 4,
    name: "Mirror Work Lehenga",
    category: "Party Wear",
    color: "#000", // Black
    sizes: ["M", "L", "XL"],
    mrp: 9999,
    price: 6999,
    discount: "30% OFF",
    image: lh4,
  },
  {
    id: 5,
    name: "Georgette Flared Lehenga",
    category: "New Arrivals",
    color: "#fff", // White / Cream
    sizes: ["S", "M", "L"],
    mrp: 7999,
    price: 5499,
    discount: "31% OFF",
    image: lh5,
  },
  {
    id: 6,
    name: "Sequin Designer Lehenga",
    category: "Embroidered",
    color: "#00bcd4", // Sky Blue
    sizes: ["M", "L", "XL"],
    mrp: 10999,
    price: 7499,
    discount: "32% OFF",
    image: lh6,
  },
  {
    id: 7,
    name: "Banarasi Silk Lehenga",
    category: "Bridal Lehengas",
    color: "#808080", // Grey
    sizes: ["L", "XL", "XXL"],
    mrp: 11999,
    price: 8499,
    discount: "29% OFF",
    image: lh7,
  },
  {
    id: 8,
    name: "Pastel Net Lehenga",
    category: "Net Lehengas",
    color: "#90ee90", // Light Green
    sizes: ["S", "M", "L"],
    mrp: 6499,
    price: 4299,
    discount: "34% OFF",
    image: lh8,
  },
  {
    id: 9,
    name: "Zari Work Festive Lehenga",
    category: "Party Wear",
    color: "#800080", // Purple
    sizes: ["M", "L", "XL"],
    mrp: 9499,
    price: 6499,
    discount: "32% OFF",
    image: lh9,
  },
  {
    id: 10,
    name: "Organza Layered Lehenga",
    category: "Embroidered",
    color: "#ff1744", // Red / Pink
    sizes: ["S", "M", "L"],
    mrp: 8499,
    price: 5799,
    discount: "32% OFF",
    image: lh10,
  },
  {
    id: 11,
    name: "Maroon Embroidered Lehenga",
    category: "New Arrivals",
    color: "#556b2f", // Olive Green
    sizes: ["M", "L", "XL"],
    mrp: 9999,
    price: 6999,
    discount: "30% OFF",
    image: lh11,
  },
  {
    id: 12,
    name: "Ivory Bridal Lehenga",
    category: "Bridal Lehengas",
    color: "#b8860b", // Mustard Gold
    sizes: ["L", "XL", "XXL"],
    mrp: 13999,
    price: 9999,
    discount: "29% OFF",
    image: lh12,
  },
];
const categories = ["New Arrivals", "Bridal Lehengas", "Party Wear", "Embroidered", "Net Lehengas"];
const colors = [
  { id: 1, name: "White", hex: "#fff" },
  { id: 2, name: "Black", hex: "#000" },
  { id: 3, name: "Cream", hex: "#e8c9a0" },
  { id: 4, name: "Green", hex: "#6b8e23" },
  { id: 5, name: "Light Green", hex: "#90ee90" },
  { id: 6, name: "Blue", hex: "#1e90ff" },
  { id: 7, name: "Sky Blue", hex: "#00bcd4" },
  { id: 8, name: "Grey", hex: "#808080" },
  { id: 9, name: "Purple", hex: "#800080" },
  { id: 10, name: "Red", hex: "#ff1744" },
  { id: 11, name: "Gold", hex: "#b8860b" },
  { id: 12, name: "Olive", hex: "#556b2f" },
];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function Lehengas() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange,       setPriceRange]       = useState(15000);
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
  if (sortBy === "price-asc")
    return a.price - b.price;

  if (sortBy === "price-desc")
    return b.price - a.price;

  if (sortBy === "discount")
    return parseInt(b.discount) - parseInt(a.discount);

  return a.id - b.id;
});

  return (
    <div className="lh-page">

      <div className="lh-breadcrumb">
        <span>Home</span> › <span>Lehengas</span>
      </div>

      <img src={lehengaBanner} alt="Lehengas" className="lh-banner" />

      <div className="lh-toolbar">
        <button className="lh-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="lh-count">{sorted.length} Products</span>
        <div className="lh-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="lh-body">

        {filterOpen && (
          <aside className="lh-sidebar">

            <div className="lh-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="lh-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="lh-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={15000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="lh-range"
              />
              <div className="lh-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

           <div className="lh-filter-group">
  <h4>COLOR</h4>

  <div className="lh-colors">
    {colors.map((color) => (
      <button
        key={color.id}
        type="button"
        title={color.name}
        className={`lh-color-dot ${
          selectedColor === color.hex ? "active" : ""
        }`}
        style={{
          backgroundColor: color.hex,
          border:
            color.hex === "#fff"
              ? "1px solid #ccc"
              : "none",
        }}
        onClick={() =>
          setSelectedColor(
            selectedColor === color.hex
              ? null
              : color.hex
          )
        }
      />
    ))}
  </div>
</div>

            <div className="lh-filter-group">
              <h4>SIZE</h4>
              <div className="lh-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`lh-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

<div className={`lh-grid ${filterOpen ? "" : "lh-grid--full"}`}>
  {sorted.length === 0 ? (
    <div className="lh-no-products">
      <h2>No Lehengas Found</h2>
      <p>Try changing your filters.</p>
    </div>
  ) : (
    sorted.map(product => (
      <div
        className="lh-card"
        key={product.id}
        onClick={() =>
          navigate("/product-details", {
            state: product,
          })
        }
      >
        <div className="lh-img-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="lh-info">
          <div className="lh-stars">★★★★★</div>

          <h4>{product.name}</h4>

          <div className="lh-price">
            <span className="lh-mrp">
              ₹{product.mrp.toLocaleString()}
            </span>

            <span className="lh-current">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="lh-off">
              ({product.discount})
            </span>
          </div>
        </div>
      </div>
    ))
  )}
</div>

      </div>
    </div>
  );
}