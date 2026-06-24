import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dresses.css";

import dress1 from "../assets/dreeses1.jpg";
import dress2 from "../assets/dreeses2.jpg";
import dress3 from "../assets/dreeses3.jpg";
import dress4 from "../assets/dreeses4.jpg";
import dress5 from "../assets/dreeses5.jpg";
import dress6 from "../assets/dreeses6.jpg";
import dress7 from "../assets/dreeses7.jpg";
import dress8 from "../assets/dreeses8.jpg";
import dress9 from "../assets/dreeses9.jpg";
import dress10 from "../assets/dreeses10.jpg";
import dress11 from "../assets/dreeses11.jpg";
import dress12 from "../assets/dreeses12.jpg";

const productsData = [
  {
    id: 1,
    image: dress1,
    title: "Elegant White Dress",
    category: "New Arrivals",
    price: 1499,
    oldPrice: 2499,
    discount: "40% OFF",
  },
  {
    id: 2,
    image: dress2,
    title: "Green Cotton Dress",
    category: "Dresses",
    price: 1899,
    oldPrice: 2799,
    discount: "32% OFF",
  },
  {
    id: 3,
    image: dress3,
    title: "Black Designer Dress",
    category: "Handblock Dresses",
    price: 2499,
    oldPrice: 3499,
    discount: "28% OFF",
  },
  {
    id: 4,
    image: dress4,
    title: "Premium Party Wear",
    category: "Solid Dresses",
    price: 2999,
    oldPrice: 4299,
    discount: "30% OFF",
  },
  {
    id: 5,
    image: dress5,
    title: "Yellow Maxi Dress",
    category: "Vacation Dresses",
    price: 1799,
    oldPrice: 2499,
    discount: "25% OFF",
  },
  {
    id: 6,
    image: dress6,
    title: "Purple Casual Dress",
    category: "Dresses",
    price: 1599,
    oldPrice: 2199,
    discount: "27% OFF",
  },
  {
    id: 7,
    image: dress7,
    title: "Red Vacation Dress",
    category: "Vacation Dresses",
    price: 2299,
    oldPrice: 3099,
    discount: "26% OFF",
  },
  {
    id: 8,
    image: dress8,
    title: "Luxury Cotton Dress",
    category: "Dresses",
    price: 2699,
    oldPrice: 3799,
    discount: "29% OFF",
  },
  {
    id: 9,
    image: dress9,
    title: "Printed Summer Dress",
    category: "Solid Dresses",
    price: 1299,
    oldPrice: 1999,
    discount: "35% OFF",
  },
  {
    id: 10,
    image: dress10,
    title: "Premium Ethnic Dress",
    category: "Handblock Dresses",
    price: 2999,
    oldPrice: 4299,
    discount: "30% OFF",
  },
  {
    id: 11,
    image: dress11,
    title: "Modern Designer Dress",
    category: "New Arrivals",
    price: 2199,
    oldPrice: 3099,
    discount: "29% OFF",
  },
  {
    id: 12,
    image: dress12,
    title: "Women's Trendy Dress",
    category: "Vacation Dresses",
    price: 1899,
    oldPrice: 2699,
    discount: "30% OFF",
  },
];

export default function Dresses() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("featured");

  let filteredProducts = [...productsData];

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === selectedCategory
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="dresses-page">

      <section className="dress-banner">
 
      </section>

      <div className="breadcrumb">
        Home &gt; Dresses
      </div>

      <div className="dress-layout">

       <aside className="filter-sidebar">

  <button className="filter-btn">
    <span>⌕</span> FILTER
  </button>

  {/* CATEGORY */}

  <div className="filter-section">
    <h4>CATEGORY</h4>

    <label>
      <input type="radio" name="category" />
      <span>New Arrivals</span>
      <small>(13)</small>
    </label>

    <label>
      <input type="radio" name="category" />
      <span>Dresses</span>
      <small>(50)</small>
    </label>

    <label>
      <input type="radio" name="category" />
      <span>Handblock Dresses</span>
      <small>(2)</small>
    </label>

    <label>
      <input type="radio" name="category" />
      <span>Solid Dresses</span>
      <small>(34)</small>
    </label>

    <label>
      <input type="radio" name="category" />
      <span>Vacation Dresses</span>
      <small>(43)</small>
    </label>

    <div className="show-more">
      + Show More
    </div>
  </div>

  {/* PRICE */}

  <div className="filter-section">
    <h4>PRICE</h4>

    <input
      type="range"
      min="0"
      max="5000"
      defaultValue="0"
      className="price-slider"
    />

    <div className="price-boxes">

      <div>
        <p>FROM</p>
        <input
          type="text"
          value="₹ 0"
          readOnly
        />
      </div>

      <div>
        <p>TO</p>
        <input
          type="text"
          value="₹ 5000.00"
          readOnly
        />
      </div>

    </div>
  </div>

  {/* COLOR */}

  <div className="filter-section">
    <h4>COLOR</h4>

    <div className="color-grid">

      <span style={{background:"#1a1aff"}}></span>
      <span style={{background:"#1515b8"}}></span>
      <span style={{background:"#1dcbe3"}}></span>
      <span style={{background:"#bfe7f3"}}></span>
      <span style={{background:"#ffc0cb"}}></span>
      <span style={{background:"#ffd5d5"}}></span>

      <span style={{background:"#ff5cb3"}}></span>
      <span style={{background:"#ff7b45"}}></span>
      <span style={{background:"#ffe0a3"}}></span>
      <span style={{background:"#8e0f9c"}}></span>
      <span style={{background:"#ff1010"}}></span>
      <span style={{background:"#ffa000"}}></span>

      <span style={{background:"#ffd34d"}}></span>
      <span style={{background:"#ffff00"}}></span>
      <span style={{background:"#000"}}></span>
      <span style={{background:"#fff",border:"1px solid #ddd"}}></span>
      <span style={{background:"#888"}}></span>
      <span style={{background:"#b52c2c"}}></span>

      <span style={{background:"#654321"}}></span>
      <span style={{background:"#014421"}}></span>
      <span style={{background:"#32cd32"}}></span>
      <span style={{background:"#008000"}}></span>
      <span style={{background:"#e6e6fa"}}></span>
      <span style={{background:"#f5f5f5",border:"1px solid #ddd"}}></span>

      <span style={{background:"#000"}}></span>
      <span style={{background:"#0f8b8d"}}></span>

    </div>
  </div>

  {/* PATTERN */}

  <div className="filter-section">
    <h4>PATTERN</h4>

    <label>
      <input type="radio" name="pattern" />
      <span>Angrakha</span>
      <small>(1)</small>
    </label>

    <label>
      <input type="radio" name="pattern" />
      <span>Gathers</span>
      <small>(3)</small>
    </label>

    <label>
      <input type="radio" name="pattern" />
      <span>Kalidaar</span>
      <small>(2)</small>
    </label>

    <label>
      <input type="radio" name="pattern" />
      <span>Tiered</span>
      <small>(19)</small>
    </label>

    <label>
      <input type="radio" name="pattern" />
      <span>Umbrella</span>
      <small>(4)</small>
    </label>

    <div className="show-more">
      + Show More
    </div>
  </div>

  {/* SLEEVE */}

  <div className="filter-section">
    <h4>SLEEVE</h4>

    <label>
      <input type="radio" name="sleeve" />
      <span>3/4 Th Sleeves</span>
      <small>(10)</small>
    </label>

    <label>
      <input type="radio" name="sleeve" />
      <span>Elbow Sleeves</span>
      <small>(5)</small>
    </label>

    <label>
      <input type="radio" name="sleeve" />
      <span>Full Sleeves</span>
      <small>(6)</small>
    </label>

    <label>
      <input type="radio" name="sleeve" />
      <span>Sleeveless</span>
      <small>(16)</small>
    </label>

    <label>
      <input type="radio" name="sleeve" />
      <span>Bell Sleeves</span>
      <small>(2)</small>
    </label>

    <div className="show-more">
      + Show More
    </div>
  </div>

  {/* FABRIC */}

  <div className="filter-section">
    <h4>FABRIC</h4>

    <label>
      <input type="radio" name="fabric" />
      <span>60*60</span>
      <small>(2)</small>
    </label>

    <label>
      <input type="radio" name="fabric" />
      <span>Georgette</span>
      <small>(2)</small>
    </label>

    <label>
      <input type="radio" name="fabric" />
      <span>Cotton Slub</span>
      <small>(1)</small>
    </label>

    <label>
      <input type="radio" name="fabric" />
      <span>Cotton Flex</span>
      <small>(1)</small>
    </label>

    <label>
      <input type="radio" name="fabric" />
      <span>Cotton</span>
      <small>(45)</small>
    </label>

    <div className="show-more">
      + Show More
    </div>
  </div>

</aside>

        <section className="products-section">

          <div className="products-topbar">

            <div>
              <h2>DRESSES</h2>
              <span>
                {filteredProducts.length} Products
              </span>
            </div>

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="featured">
                Sort By
              </option>
              <option value="low">
                Price Low To High
              </option>
              <option value="high">
                Price High To Low
              </option>
            </select>

          </div>

          <div className="product-grid">

            {filteredProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product-details/${item.id}`}
                state={item}
                className="product-link"
              >
                <div className="product-card">

                  <div className="product-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <span className="sale-tag">
                      SALE
                    </span>
                  </div>

                  <div className="product-info">

                    <h4>{item.title}</h4>

                    <div className="rating">
                      ★★★★★
                    </div>

                    <div className="price-row">
                      <span className="old-price">
                        ₹{item.oldPrice}
                      </span>

                      <span className="price">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="discount">
                      ({item.discount})
                    </div>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </section>

      </div>

    <section className="seo-section">

  <h2>
    HOLIDAY DRESSES FOR WOMEN — BREEZY STYLES FOR EVERY GETAWAY
  </h2>

  <p>
    Your holiday deserves an outfit as memorable as the destination.
    Our holiday dresses for women are designed for the woman who wants
    to look effortlessly stylish whether she is lounging at a beach resort,
    exploring the lanes of a hill station town, or sitting down to a
    candlelit dinner on a rooftop. Our collection brings together the
    best of comfort dressing and ethnic-inspired fashion — giving you
    looks that work from morning sightseeing to evening plans without
    a single outfit change.
  </p>

  <p>
    From flowy maxi dresses in soft cotton to Indo-western fusion
    silhouettes that nod to Indian craft while feeling thoroughly
    contemporary, every piece in this collection is chosen for its
    wearability, packability, and visual impact. These are dresses
    that photograph beautifully, wear comfortably for hours, and
    launder easily — the three non-negotiable qualities of great
    travel clothing.
  </p>

  <h3>
    WHY COTTON DRESSES ARE THE ULTIMATE TRAVEL COMPANION
  </h3>

  <p>
    India's diverse travel landscape demands clothing that adapts.
    Whether you are in the humid coastal towns of Kerala, the dry
    desert landscapes of Rajasthan, or the cool mountain retreats
    of Himachal Pradesh, cotton holiday dresses keep you comfortable
    through it all. Cotton is naturally breathable, moisture-absorbent,
    and gentle on sensitive skin — qualities that become absolutely
    essential when you are on the move for hours at a stretch.
  </p>

  <p>
    Our cotton dresses are crafted from lightweight, fine-weave fabrics
    that minimize bulk in your suitcase and dry quickly after a wash —
    a real practical advantage for longer trips. Many of our styles are
    also wrinkle-resistant, so your dress looks just as good when you
    pull it out of a travel bag as it did when you packed it.
  </p>

  <h3>
    STYLES TO SUIT EVERY HOLIDAY PERSONALITY
  </h3>

  <p>
    No two holidays are the same, and neither are the women who take
    them. That is why our vacation dresses cover the full spectrum of
    holiday dressing — from understated elegance to bold statement looks.
  </p>

  <p>
    If you love a classic silhouette, our long maxi dresses in block
    prints, florals, and solid colors are timeless choices that work
    for everything from temple visits to beach walks. If you prefer
    something with more personality, our Indo-western styles feature
    asymmetric hems, tiered skirts, and contrast borders that add
    visual interest without looking overdressed.
  </p>

  <p>
    We also carry a growing selection of beach dresses for women —
    light, floaty styles in bright tropical prints and soft pastel
    shades that are practically made for coastal holidays. Pair
    them with sandals and minimal accessories and the look is complete.
  </p>

  <h3>
    INCLUSIVE SIZING & EASY RETURNS
  </h3>

  <p>
    Our holiday dresses are available in sizes XS to XXL, with fits
    designed to flatter different body types. A-line silhouettes and
    flared styles are particularly popular for their universally
    flattering cuts — they skim rather than cling, creating a graceful,
    feminine line that works for petite frames and plus sizes alike.
  </p>

  <p>
    Not sure if a style will work for you? Our easy return policy
    means you can order, try on at home, and return hassle-free if
    the fit is not right. We also offer fast shipping across India
    and Cash on Delivery so there are no barriers to discovering
    your new favorite holiday dress.
  </p>

  <h3>
    COMPLETE YOUR TRAVEL WARDROBE WITH US
  </h3>

  <p>
    A great holiday wardrobe is more than just dresses. Pair your
    holiday look with cotton suit sets for cooler evenings and formal
    occasions, or explore elegant sarees if you have a wedding or
    special event during your trip. Our new arrivals section is
    updated regularly so there is always something fresh to discover.
  </p>

  <p>
    Whether you're planning a beach vacation, a city escape, a mountain
    retreat, or a festive family gathering, our collection of holiday
    dresses helps you travel in comfort without compromising on style.
    Discover premium fabrics, beautiful craftsmanship, and timeless
    designs created for modern women who love fashion and freedom.
  </p>

</section>
    </div>
  );
}