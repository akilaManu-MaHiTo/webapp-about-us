import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { aboutCards } from "../data/content.js";
import { scrollToSection } from "../lib/scroll.js";

export default function About() {
  return (
    <section id="about" className="section section-anchor about-section">
      <div className="container about-layout">
        <SectionHeading
          eyebrow="01 / About"
          title="Assessment should reveal potential, not just produce a score."
          text="Gradex AI is a research project focused on transforming the way higher education evaluates student learning. We bring multiple assessment formats into one intelligent, transparent system."
        />
        <div className="about-side">
          <div className="big-number">01<span>project vision</span></div>
          <p>We are exploring how AI can support lecturers while giving students richer, fairer feedback on the work they create.</p>
          <button className="circle-link" onClick={() => scrollToSection("scope")} aria-label="Explore project scope"><ArrowUpRight size={20} /></button>
        </div>
      </div>
      <div className="container about-cards">
        {aboutCards.map(([number, title, text]) => (
          <article className="info-card" key={number}>
            <span className="card-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
