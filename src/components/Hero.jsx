import React from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Mic2,
  Network,
  ScanLine,
  Sparkles,
} from "lucide-react";
import gradexBanner from "../assets/gradex-banner.webp";
import { scrollToSection } from "../lib/scroll.js";

const features = [
  ["01", "Diagram Grading", Network, "Identifies and extracts diagrams from handwritten examination papers using computer vision. It compares diagram structures, entities, relationships, and relevant elements against reference diagrams and marking rubrics to assign marks and provide feedback."],
  ["02", "Handwritten Grading", ScanLine, "Evaluates handwritten essay answers by extracting text using OCR and handwriting recognition. It analyzes semantic meaning, key concepts, reasoning, and answer relevance against marking schemes to generate marks and constructive feedback."],
  ["03", "Question Making", BrainCircuit, "Analyzes student performance at question and topic levels to identify weaknesses and learning gaps. It generates personalized practice questions and dashboards for performance trends, difficult questions, topic progress, and future examination patterns."],
  ["04", "Viva Evaluation", Mic2, "Evaluates online viva responses by analyzing spoken answers, speech characteristics, and relevant visual features. It assesses accuracy, conceptual understanding, clarity, and reasoning, generating suggested scores, explanations, and feedback to assist examiners."],
];

export default function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill"><span className="pulse-dot" /> Research project · R26-SE-025</div>
          <h1>Welcome to <em>Gradex AI.</em></h1>
          <p className="hero-lede">Smarter grading. Deeper insight. Better outcomes.</p>
          <p className="hero-description">An AI-powered assessment platform built to make higher education more consistent, insightful, and human-centered.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollToSection("scope")}>Explore our research <ArrowUpRight size={17} /></button>
            <button className="text-button" onClick={() => scrollToSection("about")}>Learn about the project <ChevronDown size={16} /></button>
          </div>
          <div className="hero-proof"><div className="proof-avatars"><span>AS</span><span>BH</span><span>HW</span><span>LH</span></div><span>Built by a student research team<br /><b>at SLIIT</b></span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame"><img src={gradexBanner} alt="Gradex AI assessment dashboard and grading modules" /></div>
          <div className="floating-note note-one"><Check size={15} /> Human-centered AI</div>
          <div className="floating-note note-two"><Sparkles size={15} /> Intelligent evaluation</div>
        </div>
      </div>
      <div className="container feature-strip">
        {features.map(([number, label, Icon, text]) => (
          <article className="feature-chip" key={label}>
            <div className="feature-chip-top"><span>{number}</span><Icon size={19} /></div>
            <h3>{label}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
