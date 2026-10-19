import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { scrollToSection } from "../lib/scroll.js";

const criteria = [
  ["Concept accuracy", 92],
  ["Diagram structure", 84],
  ["Reasoning depth", 88],
];

const modules = [
  ["01", "Diagram Grading", "Structure and labels checked against the marking scheme."],
  ["02", "Handwritten Grading", "OCR and semantic review of written responses."],
  ["03", "Question Making", "Practice sets generated from identified learning gaps."],
  ["04", "Viva Evaluation", "Speech and reasoning signals for oral examinations."],
];

export default function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <div className="hero-surface" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow hero-rise" style={{ "--delay": "40ms" }}>
            <span className="hero-rule" aria-hidden="true" />
            <span>Research project · R26-SE-025</span>
            <span className="hero-dot" aria-hidden="true" />
            <span>SLIIT</span>
          </div>

          <h1 className="hero-title hero-rise" style={{ "--delay": "100ms" }}>
            A consistent standard for <em>every submission.</em>
          </h1>

          <p className="hero-description hero-rise" style={{ "--delay": "170ms" }}>
            Gradex AI is a research-led assessment platform that reads handwritten answers, diagrams, and viva
            responses — then scores them against the rubric, with a human in the loop.
          </p>

          <div className="hero-actions hero-rise" style={{ "--delay": "230ms" }}>
            <button className="button button-dark" onClick={() => scrollToSection("scope")}>
              Explore the research <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <button className="text-button" onClick={() => scrollToSection("about")}>
              About the project <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>

          <div className="hero-proof hero-rise" style={{ "--delay": "290ms" }}>
            <div className="proof-avatars" aria-hidden="true">
              <span>AS</span><span>BH</span><span>HW</span><span>LH</span>
            </div>
            <span>
              Final-year research team · <b>SLIIT</b>
            </span>
          </div>
        </div>

        <div className="hero-figure hero-rise" style={{ "--delay": "160ms" }}>
          <figure className="eval-card">
            <div className="eval-head">
              <span className="eval-label">Evaluation record</span>
              <span className="eval-status"><i aria-hidden="true" /> Reviewed</span>
            </div>

            <div className="eval-body">
              <div className="eval-score">
                <span className="eval-score-label">Rubric match</span>
                <div className="eval-score-value">
                  <b>87</b><span>/ 100</span>
                </div>
                <span className="eval-score-note">IT22262554 · Answer 04</span>
              </div>

              <div className="eval-criteria">
                {criteria.map(([label, value], index) => (
                  <div className="eval-row" key={label}>
                    <span className="eval-row-label">{label}</span>
                    <span className="eval-row-value">{value}</span>
                    <span className="eval-bar">
                      <i style={{ "--val": `${value}%`, "--bar-delay": `${420 + index * 110}ms` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <figcaption className="eval-foot">
              <span>Rubric v2.1 · 4 criteria</span>
              <span className="eval-verified"><Check size={13} aria-hidden="true" /> Human verified</span>
            </figcaption>
          </figure>
          <p className="hero-figure-note">Illustrative output from the evaluation pipeline.</p>
        </div>
      </div>

      <div className="container hero-modules">
        {modules.map(([number, label, text], index) => (
          <article className="hero-module hero-rise" style={{ "--delay": `${340 + index * 60}ms` }} key={label}>
            <span className="hero-module-index">{number}</span>
            <h2>{label}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
