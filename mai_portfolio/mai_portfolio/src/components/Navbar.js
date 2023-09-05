import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <Link className="logo" to="/">
            Maï <br />
            Uchida
          </Link>
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <a href="#about">Who I am</a>
            </li>
            <li>
              <a href="#skill">What I do</a>
            </li>
            <li>
              <a href="#project">My work</a>
            </li>
            <li>
              <a id="contactBtn" href="#contact">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
