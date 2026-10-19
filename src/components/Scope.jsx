import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { scopeItems } from "../data/content.js";

export default function Scope() {
  return (
    <section id="scope" className="section section-anchor dark-section">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Research scope"
          title="A closer look at the problem we are solving."
          text="Our study examines the opportunities and limits of AI-assisted assessment across the full learning journey."
        />
        <div className="scope-grid">
          {scopeItems.map(([title, text], index) => (
            <article className="scope-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
