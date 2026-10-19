import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section section-anchor contact-section">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="07 / Contact"
            title="Let&apos;s make assessment more meaningful."
            text="Have a question about our research, the team, or the Gradex AI project? We would love to hear from you."
          />
          <a href="mailto:akilamanujith@gmail.com" className="contact-email">akilamanujith@gmail.com <ArrowUpRight size={18} /></a>
        </div>
        <div className="map-card">
          <div className="map-grid" />
          <div className="map-pin"><MapPin size={23} /></div>
          <div className="map-label">
            <b>SLIIT Malabe Campus</b>
            <span>New Kandy Road, Malabe</span>
          </div>
          <a className="map-link" href="https://maps.google.com/?q=SLIIT+Malabe+Campus" target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}
