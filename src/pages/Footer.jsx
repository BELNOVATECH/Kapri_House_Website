import "../styles/Footer.css";
import retailStore from "../assets/retailstore.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* ── Retail Store Banner ── */}
      <div className="retail-store-banner">
        <img src={retailStore} alt="Our Retail Store" />
      </div>

      <footer className="footer">

        <div className="footer-container">

<div className="footer-column">
  <h3>CATEGORIES</h3>

  <Link to="/new-arrivals">New Arrivals</Link>
  <Link to="/menswear">Men's Wear</Link>
  <Link to="/dresses">Dresses</Link>
  <Link to="/kurta-sets">Kurta & Suit Sets</Link>
  <Link to="/lehengas">Lehenga Sets</Link>
  <Link to="/sarees">Sarees</Link>
  <Link to="/sale">Sale</Link>
</div>

          <div className="footer-column">
            <h3>DISCOVER</h3>
            <a href="/">Blog</a>
            <a href="/">Celebrities In Bunaai</a>
            <a href="/">Women Of Bunaai</a>
            <a href="/">Sitemap</a>
            <a href="/">Refer & Earn</a>
            <a href="/">Become a Stockist</a>
          </div>

          <div className="footer-column">
            <h3>INFORMATION</h3>
            <a href="/">My Account</a>
            <a href="/">Track Order</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Delivery Information</a>
            <a href="/">Refund, Exchanges & Returns</a>
            <a href="/">Terms of Use</a>
            <a href="/">FAQ</a>
            <a href="/">Franchise Enquiry</a>
            <a href="/">Wholesale Enquiry</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>CUSTOMER SERVICE</h3>
            <p><FaClock /> MON-FRI - 9.00 AM TO 5.00 PM (IST)</p>
            <p><FaPhoneAlt /> +91 8800174972</p>
            <p><FaPhoneAlt /> +91 7599976000</p>
            <p>
              <FaMapMarkerAlt />
              BUNAI PRIVATE LIMITED, RIICO INDUSTRIAL AREA,
              SITAPURA, JAIPUR, RAJASTHAN – 302022
            </p>
            <p>CIN: U13921RJ2025PTC109683</p>
          </div>

          <div className="footer-column">
            <h3>STAY CONNECTED</h3>
            <div className="social-icons">
              <a href="/"><FaFacebookF /></a>
              <a href="/"><FaLinkedinIn /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaPinterestP /></a>
              <a href="/"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 BUNAI . ALL RIGHTS RESERVED.
        </div>

      </footer>
    </>
  );
}