import { useRef, useState } from "react";
import "../styles/ZoomImage.css";

/**
 * ZoomImage
 * Drop-in replacement for the plain <img className="main-image" />.
 * Shows a circular magnifier lens that follows the cursor on hover.
 *
 * Usage:
 *   <ZoomImage src={state.image} alt={state.title} className="main-image" />
 *
 * Props:
 *   src       - image url (required)
 *   alt       - alt text (required)
 *   className - pass through your existing class (e.g. "main-image") so all
 *               your current sizing/border/radius CSS keeps working as-is
 *   zoom      - magnification strength, default 2.5
 *   lensSize  - diameter of the circular lens in px, default 150
 */
export default function ZoomImage({
  src,
  alt,
  className = "",
  zoom = 2.5,
  lensSize = 250,
}) {
  const containerRef = useRef(null);
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const half = lensSize / 2;
    const clampedX = Math.min(Math.max(x, half), rect.width - half);
    const clampedY = Math.min(Math.max(y, half), rect.height - half);

    setLensPos({ x: clampedX, y: clampedY });
    setContainerSize({ width: rect.width, height: rect.height });

    const bgX = -(clampedX * zoom - half);
    const bgY = -(clampedY * zoom - half);
    setBgPos({ x: bgX, y: bgY });
  };

  return (
    <div
      ref={containerRef}
      className="zoom-image-container"
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt={alt} className={className} draggable={false} />

      {showLens && (
        <div
          className="zoom-image-lens"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${lensPos.x}px`,
            top: `${lensPos.y}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${containerSize.width * zoom}px ${
              containerSize.height * zoom
            }px`,
            backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
          }}
        />
      )}
    </div>
  );
}