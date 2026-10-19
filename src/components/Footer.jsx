import React from "react";
import Logo from "./Logo.jsx";
import { scrollToSection } from "../lib/scroll.js";

export default function Footer({ navItems }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Logo />
        <div className="footer-nav">
          {navItems.slice(1).map(([id, label]) => (
            <button key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 Gradex AI · R26-SE-025</span>
        <span>Built for better learning.</span>
        <button onClick={() => scrollToSection("home")}>Back to top ↑</button>
      </div>
    </footer>
  );
}
