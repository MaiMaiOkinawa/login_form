import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <Link className="logo" to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="menu" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" onClick={closeMenu}>
                home
              </Link>
            </li>
            <li>
              <Link to="/speak" onClick={closeMenu}>
                speak
              </Link>
            </li>
            <li>
              <Link to="/read" onClick={closeMenu}>
                read
              </Link>
            </li>
            <li>
              <Link to="/quiz" onClick={closeMenu}>
                quiz
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
