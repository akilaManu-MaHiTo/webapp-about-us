import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { scrollToSection } from "../lib/scroll.js";

export default function Header({ navItems, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => { scrollToSection(id); closeMenu(); }}>{label}</button>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <button className="header-cta" onClick={() => scrollToSection("contact")}>Let&apos;s talk <ArrowUpRight size={16} /></button>
      </div>
    </header>
  );
}
