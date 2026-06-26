import "../styles/ComingSoon.css";
import comingSoonImg from "../assets/coming-soon.jpg";

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <img
        src={comingSoonImg}
        alt="Coming Soon"
        className="coming-soon-image"
      />

      <div className="coming-soon-content">
        <h1>Menswear Coming Soon</h1>
        <p>
          We're working on something special for you.
          Stay tuned for our upcoming Menswear Collection.
        </p>
      </div>
    </div>
  );
}