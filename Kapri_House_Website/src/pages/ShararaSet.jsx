import "../styles/ShararaSet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sw1  from "../assets/shr1.webp";
import sw2  from "../assets/sw2.webp";
import sw3  from "../assets/sw3.webp";
import sw4  from "../assets/sw4.webp";
import sw5  from "../assets/sw5.webp";
import sw6  from "../assets/sw6.webp";
import sw7  from "../assets/sw7.jpg";
import sw8  from "../assets/sw8.webp";
import sw9  from "../assets/sw9.webp";
import sw10 from "../assets/sw10.webp";
import sw11 from "../assets/sw11.webp";
import sw12 from "../assets/sw12.webp";
import shararaBanner from "../assets/shrban.webp";

const products = [
  { id: 1,  name: "Embroidered Sharara Set",       mrp: 5999, price: 3999, discount: "33% OFF", image: sw1  },
  { id: 2,  name: "Printed Cotton Sharara Set",     mrp: 3999, price: 2499, discount: "37% OFF", image: sw2  },
  { id: 3,  name: "Net Sharara Set",                 mrp: 4999, price: 3299, discount: "34% OFF", image: sw3  },
  { id: 4,  name: "Silk Sharara Set",                mrp: 6999, price: 4799, discount: "31% OFF", image: sw4  },
  { id: 5,  name: "Floral Print Sharara Set",       mrp: 4200, price: 2799, discount: "33% OFF", image: sw5  },
  { id: 6,  name: "Georgette Sharara Set",           mrp: 5500, price: 3699, discount: "33% OFF", image: sw6  },
  { id: 7,  name: "Zari Work Sharara Set",            mrp: 6500, price: 4499, discount: "31% OFF", image: sw7  },
  { id: 8,  name: "Pastel Sharara Set",              mrp: 4500, price: 2999, discount: "33% OFF", image: sw8  },
  { id: 9,  name: "Chiffon Sharara Set",              mrp: 4800, price: 3199, discount: "33% OFF", image: sw9  },
  { id: 10, name: "Organza Sharara Set",              mrp: 5800, price: 3899, discount: "33% OFF", image: sw10 },
  { id: 11, name: "Bridal Sharara Set",               mrp: 8999, price: 5999, discount: "33% OFF", image: sw11 },
  { id: 12, name: "Ivory Sharara Set",                mrp: 5200, price: 3499, discount: "33% OFF", image: sw12 },
];

const categories = ["New Arrivals", "Sharara Sets", "Embroidered", "Printed Sets", "Bridal"];
const colors     = ["#fff","#000","#e8c9a0","#d97882","#6b8e6b","#b8860b","#4a6fa5","#c49a6c"];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function ShararaSet() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange,       setPriceRange]       = useState(9000);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price-asc")  return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "discount")   return parseInt(b.discount) - parseInt(a.discount);
    return a.id - b.id;
  }).filter(p => p.price <= priceRange);

  return (
    <div className="sw-page">

      <div className="sw-breadcrumb">
        <span>Home</span> › <span>Sharara Sets</span>
      </div>

      <img src={shararaBanner} alt="Sharara Sets" className="sw-banner" />

      <div className="sw-toolbar">
        <button className="sw-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="sw-count">{sorted.length} Products</span>
        <div className="sw-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="sw-body">

        {filterOpen && (
          <aside className="sw-sidebar">

            <div className="sw-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="sw-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="sw-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={9000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="sw-range"
              />
              <div className="sw-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

            <div className="sw-filter-group">
              <h4>COLOR</h4>
              <div className="sw-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`sw-color-dot ${selectedColor === c ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="sw-filter-group">
              <h4>SIZE</h4>
              <div className="sw-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`sw-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`sw-grid ${filterOpen ? "" : "sw-grid--full"}`}>
          {sorted.map(product => (
            <div
              className="sw-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="sw-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="sw-info">
                <div className="sw-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="sw-price">
                  <span className="sw-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="sw-current">₹{product.price.toLocaleString()}</span>
                  <span className="sw-off">({product.discount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}