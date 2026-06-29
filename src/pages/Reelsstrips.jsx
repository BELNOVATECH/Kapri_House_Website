import { useState, useEffect } from "react";
import "../styles/Reelsstrips.css";

// Local video imports — same mechanism as image imports, just for .mp4 files.
// Place these files at src/assets/videos/ (create the folder if needed).
import cottonAnarkaliVideo from "../assets/videos/v1.mp4";
import shararaSalwarVideo from "../assets/videos/Farshii.mp4";
import heavySharara from "../assets/videos/shararaa.mp4";
import organzaAnarkaliVideo from "../assets/videos/last.mp4";
import lehengaVideo from "../assets/videos/lehanga.mp4";
import shimmerSetVideo from "../assets/videos/vedio1.mp4";

const FALLBACK_IMG = "https://via.placeholder.com/400x600?text=Image+Not+Found";

const reels = [
  {
    id: 1,
    label: "Shimmer set",
    productName: "organza shimmer suit set",
    price: "₹2,499",
    oldPrice: "₹4,500",
    thumbnail: shimmerSetVideo,
    isVideoThumb: true,
    video: shimmerSetVideo,
  },
  {
    id: 2,
    label: "Farshi Sets",
    productName: "Muslin Farshi Salwar Set",
    price: "₹3,300",
    oldPrice: "₹4,500",
    thumbnail: cottonAnarkaliVideo,
    isVideoThumb: true,
    video: cottonAnarkaliVideo,
  },
  {
    id: 3,
    label: "Dresses",
    productName: "Heavy Embroidered Sharara",
    price: "₹7,000",
    oldPrice: null,
    thumbnail: heavySharara,
    isVideoThumb: true,
    video: heavySharara,
  },
  {
    id: 4,
    label: "Lehengas",
    productName: "Bridal Lehenga Set",
    price: "₹8,500",
    oldPrice: "₹12,000",
    thumbnail: lehengaVideo,
    isVideoThumb: true,
    video: lehengaVideo,
  },
  {
    id: 5,
    label: "suit Set",
    productName: " Cotton Sharara Salwar Set",
    price: "₹2,650",
    oldPrice: "₹3,800",
    thumbnail: shararaSalwarVideo,
    isVideoThumb: true,
    video: shararaSalwarVideo,
  },
  {
    id: 6,
    label: "Anarkali Set",
    productName: "Organza Anarkali Suit Set",
    price: "₹7,000",
    oldPrice: null,
    thumbnail: organzaAnarkaliVideo,
    isVideoThumb: true,
    video: organzaAnarkaliVideo,
  },
];

export default function ReelsStrip() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const openViewer = (index) => setActiveIndex(index);
  const closeViewer = () => setActiveIndex(null);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % reels.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length);

  // Shared handler: logs the failing src to console so you can see
  // exactly which path/file is broken, then swaps in a visible placeholder
  // instead of silently hiding the image (opacity: 0 was masking the bug).
  const handleImgError = (e) => {
    console.warn("Image failed to load:", e.target.src);
    if (e.target.src !== FALLBACK_IMG) {
      e.target.src = FALLBACK_IMG;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <>
      {/* ---------- Card strip ---------- */}
      <div className="reels-strip">
        {reels.map((reel, index) => (
          <button
            key={reel.id}
            className="reel-bubble"
            onClick={() => openViewer(index)}
            aria-label={`Watch ${reel.label} reel`}
          >
            {/* Full image / video thumbnail */}
            <span className="reel-bubble-ring">
              {reel.isVideoThumb ? (
                <video
                  src={reel.thumbnail}
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <img
                  src={reel.thumbnail}
                  alt={reel.label}
                  onError={handleImgError}
                />
              )}
            </span>

            {/* Bottom label — Idaho-o style */}
            <span className="reel-bubble-label">
              {reel.isVideoThumb ? (
                <video
                  className="reel-label-thumb"
                  src={reel.thumbnail}
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <img
                  className="reel-label-thumb"
                  src={reel.thumbnail}
                  alt=""
                  onError={handleImgError}
                />
              )}
              <span className="reel-label-info">
                <span className="reel-label-name">{reel.productName}</span>
                <span className="reel-label-price">
                  {reel.price}
                  {reel.oldPrice && (
                    <span className="reel-label-old-price">{reel.oldPrice}</span>
                  )}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* ---------- Full reel viewer ---------- */}
      {isOpen && (
        <div className="reel-viewer-overlay" onClick={closeViewer}>
          <div
            className="reel-viewer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="reel-viewer-close" onClick={closeViewer}>
              ✕
            </button>

            <button
              className="reel-viewer-nav reel-viewer-nav--prev"
              onClick={goPrev}
            >
              ‹
            </button>

            <video
              key={reels[activeIndex].id}
              className="reel-viewer-video"
              src={reels[activeIndex].video}
              autoPlay
              controls
              loop
              playsInline
            />

            <button
              className="reel-viewer-nav reel-viewer-nav--next"
              onClick={goNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}