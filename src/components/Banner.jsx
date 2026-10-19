import React from "react";
import gradexBanner from "../assets/gradex-banner.webp";

export default function Banner() {
  return (
    <section className="banner-section section-anchor" id="banner">
      <div className="container">
        <img src={gradexBanner} alt="Gradex AI campaign banner" />
      </div>
    </section>
  );
}
