import React from "react";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { docs } from "../data/documents.js";

export default function Presentations() {
  return (
    <section id="presentations" className="section section-anchor presentations-section">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Presentations"
          title="Explore the work behind the interface."
          text="Download our key submissions and presentation materials to follow the evolution of the research."
        />
        <div className="document-grid">
          {docs.slice(1).map((doc, index) => (
            <a className="document-card" href={doc.url} download={doc.file} key={doc.file}>
              <div className="doc-icon"><FileText size={21} /></div>
              <div>
                <span className="doc-type">{doc.type} · 0{index + 1}</span>
                <h3>{doc.label}</h3>
                <span className="download-label">Download file <Download size={14} /></span>
              </div>
              <ArrowUpRight className="doc-arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
