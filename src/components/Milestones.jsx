import React from "react";
import { Download } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { milestones } from "../data/content.js";
import { milestoneDownloads } from "../data/documents.js";

const CURRENT_MILESTONE_INDEX = 6;

export default function Milestones() {
  return (
    <section id="milestones" className="section section-anchor milestones-section">
      <div className="container milestones-layout">
        <SectionHeading
          eyebrow="03 / Milestones"
          title="From first question to final paper."
          text="Follow the research journey as Gradex AI moves from a question on paper to a validated assessment experience."
        />
        <div className="timeline">
          {milestones.map(([number, title, text], index) => (
            <div className="timeline-item" key={title}>
              <div className="timeline-index">{number}</div>
              <div className="timeline-line">{index < milestones.length - 1 && <span />}</div>
              <div className={index === CURRENT_MILESTONE_INDEX ? "timeline-content active" : "timeline-content"}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {milestoneDownloads[title] && (
                    <div className="stepper-downloads">
                      {milestoneDownloads[title].map((doc) => (
                        <a href={doc.url} download={doc.file} key={doc.file}><Download size={12} /> {doc.label}</a>
                      ))}
                    </div>
                  )}
                </div>
                {index === CURRENT_MILESTONE_INDEX && <span className="current-tag">Current focus</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
