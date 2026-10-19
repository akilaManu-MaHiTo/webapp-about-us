import React from "react";
import gradexLogo from "../assets/gradex-logo.png";
import { scrollToSection } from "../lib/scroll.js";

export default function Logo() {
  return (
    <button className="logo" onClick={() => scrollToSection("home")} aria-label="Go to home">
      <img src={gradexLogo} alt="Gradex AI" />
    </button>
  );
}
