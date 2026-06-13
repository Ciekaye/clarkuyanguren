"use client";

import { useState } from "react";
import { ContactTrigger } from "./ContactModal";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Clark Kent Uyanguren</div>
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <a href="/#services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/#about">About</a>
        <a href="/#faq">FAQ</a>
        <ContactTrigger className="nav-cta">
          Work with me
        </ContactTrigger>
      </div>
      <button
        className={`mobile-toggle${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
