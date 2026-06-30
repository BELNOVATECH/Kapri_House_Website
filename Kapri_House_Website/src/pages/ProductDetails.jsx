import "../styles/ProductDetails.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ZoomImage from "./ZoomImage";

export default function ProductDetails() {
  const { state } = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const [formTab, setFormTab] = useState("enter"); // 'enter' | 'saved'
  const [guideTab, setGuideTab] = useState("measure"); // 'measure' | 'tips'
  const [measureMode, setMeasureMode] = useState("standard"); // 'standard' | 'detailed'

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
  });

  if (!state) return <h2>No Product Found</h2>;

  const images = [state.image, state.image, state.image, state.image];

  const handleMeasurementChange = (field, value) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
  };

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
  };

  const measureSteps = [
    { n: 1, label: "Shoulder", desc: "Measure from one shoulder end to the other" },
    { n: 2, label: "Bust", desc: "Measure around the fullest part of your bust" },
    { n: 3, label: "Waist", desc: "Measure around the narrowest part" },
    { n: 4, label: "Hip", desc: "Measure around the fullest part of your hips" },
    { n: 5, label: "Sleeve Length", desc: "Measure from shoulder point to wrist" },
    { n: 6, label: "Armhole", desc: "Measure around the armhole" },
    { n: 7, label: "Top Length", desc: "Measure from highest shoulder point to required length" },
    { n: 8, label: "Neck Size", desc: "Measure around the base of your neck" },
  ];

  const measurementTips = [
    "Measure over light, fitted clothing for accuracy.",
    "Keep the measuring tape snug but not tight.",
    "Stand naturally — don't pull in your stomach or puff your chest.",
    "Ask someone to help you measure your back and shoulders.",
    "If you fall between two sizes, choose the larger one.",
    "Re-measure if it's been a while since your last measurement.",
  ];

  return (
    <div className="product-page">
      <div className="mtm-banner">
        <h1>Made-to-Measure (Custom Stitching)</h1>
        <p>Your Measurements, Your Perfect Fit — Stitched Just for You</p>
        <div className="mtm-badges">
          <span>Perfect Fit</span>
          <span>•</span>
          <span>Personalized</span>
          <span>•</span>
          <span>Exclusively Yours</span>
        </div>
      </div>

      <div className="mtm-grid">
        {/* ===== Column 1: Gallery + product info ===== */}
        <div className="mtm-col mtm-product-col">
          <div className="product-gallery">
            <div className="thumb-grid">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(i)}
                  className={selectedImage === i ? "active-thumb" : ""}
                />
              ))}
            </div>
            <div className="gallery-main">
              <ZoomImage
                key={selectedImage}
                src={images[selectedImage]}
                alt={state.title}
                className="main-image"
              />
            </div>
          </div>

          <h2 className="mtm-product-title">{state.title}</h2>
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
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
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

          <div className="mtm-why-mini">
            <h4>Why Custom Size?</h4>
            <ul>
              <li>✔ Perfect fit for your body</li>
              <li>✔ Stitched just for you</li>
              <li>✔ No alteration needed</li>
              <li>✔ Lower return rate</li>
            </ul>
          </div>

          <div className="qty-box">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <div className="cart-row">
            <button className="cart-btn" disabled>ADD TO CART</button>
            <span className="coming-soon">Stay Tuned | Coming Soon</span>
          </div>
        </div>

        {/* ===== Column 2: Enter Measurements ===== */}
        <div className="mtm-col mtm-form-col">
          <div className="mtm-tabs">
            <button
              className={formTab === "enter" ? "active" : ""}
              onClick={() => setFormTab("enter")}
            >
              Enter Measurements
            </button>
            <button
              className={formTab === "saved" ? "active" : ""}
              onClick={() => setFormTab("saved")}
            >
              Use Saved Profile
            </button>
          </div>

          {formTab === "enter" ? (
            <>
              <div className="mtm-radio-row">
                <label>
                  <input
                    type="radio"
                    checked={measureMode === "standard"}
                    onChange={() => setMeasureMode("standard")}
                  />
                  Standard Measurements
                </label>
                <label>
                  <input
                    type="radio"
                    checked={measureMode === "detailed"}
                    onChange={() => setMeasureMode("detailed")}
                  />
                  Detailed Measurements (Recommended)
                </label>
              </div>

              <h4 className="mtm-section-title">Standard Measurements</h4>
              <p className="custom-size-subtitle">Enter your body measurements in inches</p>

              <div className="custom-size-grid">
                <label>
                  Bust *
                  <input type="number" value={measurements.bust} placeholder="36"
                    onChange={(e) => handleMeasurementChange("bust", e.target.value)} />
                </label>
                <label>
                  Waist *
                  <input type="number" value={measurements.waist} placeholder="30"
                    onChange={(e) => handleMeasurementChange("waist", e.target.value)} />
                </label>
                <label>
                  Hip *
                  <input type="number" value={measurements.hip} placeholder="38"
                    onChange={(e) => handleMeasurementChange("hip", e.target.value)} />
                </label>
                <label>
                  Shoulder *
                  <input type="number" value={measurements.shoulder} placeholder="14"
                    onChange={(e) => handleMeasurementChange("shoulder", e.target.value)} />
                </label>
                <label>
                  Armhole
                  <input type="number" value={measurements.armhole} placeholder="16"
                    onChange={(e) => handleMeasurementChange("armhole", e.target.value)} />
                </label>
                <label>
                  Sleeve Length *
                  <input type="number" value={measurements.sleeveLength} placeholder="22"
                    onChange={(e) => handleMeasurementChange("sleeveLength", e.target.value)} />
                </label>
                <label>
                  Neck Size
                  <input type="number" value={measurements.neck} placeholder="14"
                    onChange={(e) => handleMeasurementChange("neck", e.target.value)} />
                </label>
                <label>
                  Top Length
                  <input type="number" value={measurements.topLength} placeholder="56"
                    onChange={(e) => handleMeasurementChange("topLength", e.target.value)} />
                </label>
                <label>
                  Height *
                  <input type="text" value={measurements.height} placeholder={`5'5"`}
                    onChange={(e) => handleMeasurementChange("height", e.target.value)} />
                </label>
                <label>
                  Weight (Optional)
                  <input type="number" value={measurements.weight} placeholder="60 kg"
                    onChange={(e) => handleMeasurementChange("weight", e.target.value)} />
                </label>
              </div>

              <button type="button" className="custom-size-save-btn" onClick={handleSaveMeasurements}>
                SAVE &amp; CONTINUE
              </button>
            </>
          ) : (
            <p className="mtm-empty-state">
              No saved measurement profile yet. Switch to “Enter Measurements” and save one.
            </p>
          )}
        </div>

        {/* ===== Column 3: How to Measure ===== */}
        <div className="mtm-col mtm-guide-col">
          <div className="mtm-tabs">
            <button
              className={guideTab === "measure" ? "active" : ""}
              onClick={() => setGuideTab("measure")}
            >
              How to Measure
            </button>
            <button
              className={guideTab === "tips" ? "active" : ""}
              onClick={() => setGuideTab("tips")}
            >
              Measurement Tips
            </button>
          </div>

          {guideTab === "measure" ? (
            <>
              <div className="mtm-guide-image">
                <img src={state.image} alt={`${state.title} measurement guide`} />
              </div>
              <ul className="custom-size-guide-list">
                {measureSteps.map((s) => (
                  <li key={s.n}>
                    <strong>{s.n}. {s.label}</strong> — {s.desc}
                  </li>
                ))}
              </ul>
              <button type="button" className="mtm-video-btn">▶ WATCH VIDEO GUIDE</button>
            </>
          ) : (
            <ul className="custom-size-guide-list">
              {measurementTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}
        </div>

        {/* ===== Column 4: Sidebar ===== */}
        <div className="mtm-col mtm-sidebar-col">
          <div className="mtm-sidebar-box">
            <h4>Why Made-to-Measure?</h4>
            <ul className="mtm-why-list">
              <li><strong>100% Perfect Fit</strong><span>Outfit stitched according to your unique body measurements</span></li>
              <li><strong>No Alterations Needed</strong><span>Wear it straight out of the package</span></li>
              <li><strong>Lower Return Rate</strong><span>Better fit means happy you</span></li>
              <li><strong>Personalized Experience</strong><span>Your measurements are saved for faster checkout next time</span></li>
              <li><strong>Exclusive for You</strong><span>Every stitch is made just for you</span></li>
            </ul>
          </div>

          <div className="mtm-sidebar-box">
            <div className="mtm-summary-header">
              <h4>Your Measurement Summary</h4>
            </div>
            <div className="mtm-summary-grid">
              <span>Bust</span><span>{measurements.bust || "—"}"</span>
              <span>Waist</span><span>{measurements.waist || "—"}"</span>
              <span>Hip</span><span>{measurements.hip || "—"}"</span>
              <span>Shoulder</span><span>{measurements.shoulder || "—"}"</span>
              <span>Top Length</span><span>{measurements.topLength || "—"}"</span>
              <span>Sleeve Length</span><span>{measurements.sleeveLength || "—"}"</span>
            </div>
          </div>

          <div className="mtm-sidebar-box mtm-order-preview">
            <h4>Order Preview</h4>
            <div className="mtm-order-row">
              <img src={state.image} alt={state.title} />
              <div>
                <p className="mtm-order-title">{state.title}</p>
                <p className="mtm-order-sub">Custom Size</p>
                <p className="mtm-order-price">₹{state.price}</p>
              </div>
            </div>
            <button type="button" className="custom-size-save-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <div className="mtm-how-it-works">
        <div><span>1</span>Enter Measurements</div>
        <div><span>2</span>We Stitch</div>
        <div><span>3</span>Quality Check</div>
        <div><span>4</span>Dispatched</div>
        <div><span>5</span>Perfect Fit</div>
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
  );
}