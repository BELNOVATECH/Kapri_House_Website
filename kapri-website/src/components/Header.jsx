import { useState } from "react";
import "../styles/Header.css";

import logo from "../assets/header-logo.jpg";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [showSearch, setShowSearch] =
    useState(false);

  return (
    <header className="header">

      {/* LEFT LOGO + NAME */}

      <div className="brand-section">

        <img
          src={logo}
          alt="Kapri"
          className="header-logo"
        />

      <h2 className="brand-name">
  Kap<span>ri</span>
</h2>

      </div>

      {/* RIGHT ICONS */}

      <div className="header-icons">

        <button
          className="icon-btn"
          onClick={() =>
            setShowSearch(!showSearch)
          }
        >
          <FiSearch />
        </button>

        <button className="icon-btn">
          <FiHeart />
        </button>

        <button className="icon-btn cart-btn">
          <FiShoppingCart />

          <span className="cart-count">
            3
          </span>

        </button>

      </div>

      {/* SEARCH */}

      {showSearch && (
        <div className="search-popup">

          <input
            type="text"
            placeholder="Search products..."
            autoFocus
          />

          <button
            className="close-search"
            onClick={() =>
              setShowSearch(false)
            }
          >
            <FiX />
          </button>

        </div>
      )}

    </header>
  );
}