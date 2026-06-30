import "../styles/ProductDetails.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ZoomImage from "./ZoomImage";

export default function ProductDetails() {
  const { state } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [selectedSize, setSelectedSize] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0); // ← NEW
  const [showSizeChart, setShowSizeChart] = useState(false); // ← NEW: size chart modal toggle
  const [showViewModal, setShowViewModal] = useState(false); // ← NEW: multi-angle view modal toggle
  const [activeAngle, setActiveAngle] = useState(0); // ← NEW: selected angle in view modal
  const [showCustomSize, setShowCustomSize] = useState(false); // ← NEW: custom size modal toggle
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hip: "",
    shoulder: "",
    armhole: "",
    sleeveLength: "",
    neck: "",
    topLength: "",
    height: "",
    weight: "",
  }); // ← NEW: custom measurement form values

  if (!state) return <h2>No Product Found</h2>;

  // Build the 4-image array from state (all same image since only one provided)
  const images = [state.image, state.image, state.image, state.image]; // ← NEW

  // ← NEW: angle labels for the View Photos modal (same image reused for each, since only 1 photo exists)
  const angleViews = [
    { label: "Front", img: state.image },
    { label: "Left Side", img: state.image },
    { label: "Right Side", img: state.image },
    { label: "Back", img: state.image },
    { label: "Close Up", img: state.image },
  ];

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    const cartItem = { ...state, size: selectedSize, quantity };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  // ← NEW: update a single measurement field
  const handleMeasurementChange = (field, value) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
  };

  // ← NEW: save custom measurements to localStorage, keyed by product title
  const handleSaveMeasurements = () => {
    const required = ["bust", "waist", "hip", "shoulder", "sleeveLength", "height"];
    const missing = required.filter((field) => !measurements[field]);
    if (missing.length > 0) {
      alert("Please fill all required measurement fields");
      return;
    }
    const customSizeData = JSON.parse(localStorage.getItem("customSizes")) || {};
    customSizeData[state.title] = { ...measurements, savedAt: new Date().toISOString() };
    localStorage.setItem("customSizes", JSON.stringify(customSizeData));
    alert("Your measurements have been saved!");
    setShowCustomSize(false);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-gallery">

          <div className="thumb-grid">
            {images.map((img, i) => (        // ← CHANGED
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setSelectedImage(i)}
                className={selectedImage === i ? "active-thumb" : ""}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div className="gallery-main">
            {/* key trick forces re-mount → triggers CSS fade-in on change */}
            <ZoomImage
              key={selectedImage}            // ← NEW
              src={images[selectedImage]}    // ← CHANGED
              alt={state.title}
              className="main-image"
            />
          </div>

        </div>

        <div className="product-info">
          <h1>{state.title}</h1>
          <div className="price-row">
            <span className="sale-price">₹{state.price}</span>
            <span className="mrp">₹{state.mrp}</span>
            <span className="discount">{state.discount}</span>
          </div>
          <p className="stock">Only 10 pieces left</p>
          <div className="size-section">
            <h4>Select Size</h4>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map((size) => {
                const isAvailable = state.sizes?.includes(size);
                return (
                  <button
                    key={size}
                    disabled
                    className={`
                      ${selectedSize === size ? "active-size" : ""}
                      ${!isAvailable ? "disabled-size" : ""}
                    `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ▼ NEW: Size Chart link */}
          <button
            type="button"
            className="size-chart-link"
            onClick={() => setShowSizeChart(true)}
          >
            📏 Size Chart
          </button>

          {/* ▼ NEW: View All Angles link */}
          <button
            type="button"
            className="size-chart-link"
            onClick={() => {
              setActiveAngle(0);
              setShowViewModal(true);
            }}
            style={{ marginLeft: "16px" }}
          >
            🔄 View All Angles
          </button>

          {/* ▼ NEW: Custom Size link */}
          <button
            type="button"
            className="size-chart-link"
            onClick={() => setShowCustomSize(true)}
            style={{ marginLeft: "16px" }}
          >
            📐 Custom Size
          </button>

          {/* ▼ NEW: Size Chart modal (only renders when opened) */}
          {showSizeChart && (
            <div
              className="size-chart-overlay"
              onClick={() => setShowSizeChart(false)}
            >
              <div
                className="size-chart-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="size-chart-header">
                  <h3>Size Chart</h3>
                  <button
                    type="button"
                    className="size-chart-close"
                    onClick={() => setShowSizeChart(false)}
                  >
                    ✕
                  </button>
                </div>
                <p className="size-chart-subtitle">
                  All measurements are in inches
                </p>
                <table className="size-chart-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Hip</th>
                      <th>Shoulder</th>
                      <th>Sleeve Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>32</td>
                      <td>26</td>
                      <td>34</td>
                      <td>13</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>34</td>
                      <td>28</td>
                      <td>36</td>
                      <td>13.5</td>
                      <td>21.5</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>36</td>
                      <td>30</td>
                      <td>38</td>
                      <td>14</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>38</td>
                      <td>32</td>
                      <td>40</td>
                      <td>14.5</td>
                      <td>22.5</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>40</td>
                      <td>34</td>
                      <td>42</td>
                      <td>15</td>
                      <td>23</td>
                    </tr>
                  </tbody>
                </table>
                <p className="size-chart-note">
                  Tip: For the best fit, measure yourself over light clothing
                  and compare with the chart above. If you fall between two
                  sizes, we recommend choosing the larger size.
                </p>
              </div>
            </div>
          )}
          {/* ▲ NEW: end Size Chart block */}

          {/* ▼ NEW: View All Angles modal (large view + thumbnail list, image-2 style) */}
          {showViewModal && (
            <div
              className="view-modal-overlay"
              onClick={() => setShowViewModal(false)}
            >
              <div
                className="view-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="view-modal-header">
                  <h3>{state.title}</h3>
                  <button
                    type="button"
                    className="size-chart-close"
                    onClick={() => setShowViewModal(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="view-modal-body">
                  <div className="view-modal-large">
                    <img
                      src={angleViews[activeAngle].img}
                      alt={`${state.title} - ${angleViews[activeAngle].label}`}
                    />
                    <span className="view-modal-angle-tag">
                      {angleViews[activeAngle].label}
                    </span>
                  </div>

                  <div className="view-modal-thumbs">
                    {angleViews.map((angle, i) => (
                      <div
                        key={angle.label}
                        className={`view-modal-thumb ${
                          activeAngle === i ? "active-view-thumb" : ""
                        }`}
                        onClick={() => setActiveAngle(i)}
                      >
                        <img src={angle.img} alt={angle.label} />
                        <span>{angle.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* ▲ NEW: end View All Angles block */}

          {/* ▼ NEW: Custom Size modal (Made-to-Measure form, image-2 style) */}
          {showCustomSize && (
            <div
              className="custom-size-overlay"
              onClick={() => setShowCustomSize(false)}
            >
              <div
                className="custom-size-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="custom-size-header">
                  <div>
                    <h3>Made-to-Measure (Custom Stitching)</h3>
                    <p>Your Measurements, Your Perfect Fit — Stitched Just for You</p>
                  </div>
                  <button
                    type="button"
                    className="size-chart-close"
                    onClick={() => setShowCustomSize(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="custom-size-body">
                  {/* LEFT: measurement form */}
                  <div className="custom-size-form">
                    <h4>Enter Measurements</h4>
                    <p className="custom-size-subtitle">
                      Enter your body measurements in inches
                    </p>

                    <div className="custom-size-grid">
                      <label>
                        Bust *
                        <input
                          type="number"
                          value={measurements.bust}
                          onChange={(e) =>
                            handleMeasurementChange("bust", e.target.value)
                          }
                          placeholder="36"
                        />
                      </label>
                      <label>
                        Waist *
                        <input
                          type="number"
                          value={measurements.waist}
                          onChange={(e) =>
                            handleMeasurementChange("waist", e.target.value)
                          }
                          placeholder="30"
                        />
                      </label>
                      <label>
                        Hip *
                        <input
                          type="number"
                          value={measurements.hip}
                          onChange={(e) =>
                            handleMeasurementChange("hip", e.target.value)
                          }
                          placeholder="38"
                        />
                      </label>
                      <label>
                        Shoulder *
                        <input
                          type="number"
                          value={measurements.shoulder}
                          onChange={(e) =>
                            handleMeasurementChange("shoulder", e.target.value)
                          }
                          placeholder="14"
                        />
                      </label>
                      <label>
                        Armhole
                        <input
                          type="number"
                          value={measurements.armhole}
                          onChange={(e) =>
                            handleMeasurementChange("armhole", e.target.value)
                          }
                          placeholder="16"
                        />
                      </label>
                      <label>
                        Sleeve Length *
                        <input
                          type="number"
                          value={measurements.sleeveLength}
                          onChange={(e) =>
                            handleMeasurementChange("sleeveLength", e.target.value)
                          }
                          placeholder="22"
                        />
                      </label>
                      <label>
                        Neck Size
                        <input
                          type="number"
                          value={measurements.neck}
                          onChange={(e) =>
                            handleMeasurementChange("neck", e.target.value)
                          }
                          placeholder="14"
                        />
                      </label>
                      <label>
                        Top Length
                        <input
                          type="number"
                          value={measurements.topLength}
                          onChange={(e) =>
                            handleMeasurementChange("topLength", e.target.value)
                          }
                          placeholder="56"
                        />
                      </label>
                      <label>
                        Height *
                        <input
                          type="text"
                          value={measurements.height}
                          onChange={(e) =>
                            handleMeasurementChange("height", e.target.value)
                          }
                          placeholder={`5'5"`}
                        />
                      </label>
                      <label>
                        Weight (Optional)
                        <input
                          type="number"
                          value={measurements.weight}
                          onChange={(e) =>
                            handleMeasurementChange("weight", e.target.value)
                          }
                          placeholder="60 kg"
                        />
                      </label>
                    </div>

                    <button
                      type="button"
                      className="custom-size-save-btn"
                      onClick={handleSaveMeasurements}
                    >
                      SAVE &amp; CONTINUE
                    </button>
                  </div>

                  {/* RIGHT: how to measure guide */}
                  <div className="custom-size-guide">
                    <h4>How to Measure</h4>
                    <ul className="custom-size-guide-list">
                      <li>
                        <strong>1. Bust</strong> — Measure around the fullest part of your bust
                      </li>
                      <li>
                        <strong>2. Waist</strong> — Measure around the narrowest part
                      </li>
                      <li>
                        <strong>3. Hip</strong> — Measure around the fullest part of your hips
                      </li>
                      <li>
                        <strong>4. Shoulder</strong> — Measure from one shoulder end to the other
                      </li>
                      <li>
                        <strong>5. Sleeve Length</strong> — Measure from shoulder point to wrist
                      </li>
                      <li>
                        <strong>6. Armhole</strong> — Measure around the armhole
                      </li>
                      <li>
                        <strong>7. Top Length</strong> — Measure from highest shoulder point to required length
                      </li>
                      <li>
                        <strong>8. Neck Size</strong> — Measure around the base of your neck
                      </li>
                    </ul>

                    <div className="custom-size-why">
                      <h4>Why Custom Size?</h4>
                      <ul>
                        <li>✔ 100% Perfect Fit</li>
                        <li>✔ No Alterations Needed</li>
                        <li>✔ Lower Return Rate</li>
                        <li>✔ Exclusive for You</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* ▲ NEW: end Custom Size block */}

          <div className="qty-box">
            <button disabled>-</button>
            <span>{quantity}</span>
            <button disabled>+</button>
          </div>
          <div className="cart-row">
            <button className="cart-btn" disabled>ADD TO CART</button>
            <span className="coming-soon">Stay Tuned | Coming Soon</span>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>
              Radiate festive charm with the Orange Myra Suit Set. Crafted in rich cotton silk,
              this A-line silhouette features a round neck with a notch, three-quarter sleeves,
              and delicate lace detailing on the yoke and sleeve hems. Paired with matching pants
              and a soft dupatta, this vibrant ensemble is perfect for daytime celebrations and
              intimate festive gatherings.
              {"\n\n"}Model height: 5.6ft{"\n"}Fabric: Georgette{"\n"}Handcrafted in India{"\n"}
              Size: Refer to size chart. Model is wearing size Small.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}