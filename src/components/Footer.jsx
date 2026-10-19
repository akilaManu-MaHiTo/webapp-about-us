import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo.jsx";
import { scrollToSection } from "../lib/scroll.js";

const socials = [
  ["https://github.com", "Github", Github],
  ["https://linkedin.com", "LinkedIn", Linkedin],
  ["https://instagram.com", "Instagram", Instagram],
];

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
        <div className="socials">
          {socials.map(([href, label, Icon]) => (
            <a href={href} aria-label={label} key={label}><Icon size={17} /></a>
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
