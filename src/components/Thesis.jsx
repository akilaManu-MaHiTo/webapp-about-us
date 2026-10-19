import React from "react";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { finalReports, groupReport } from "../data/documents.js";

function ReportCard({ report, index }) {
  return (
    <a className="document-card" href={report.url} download={report.file} key={report.file}>
      <div className="doc-icon"><FileText size={21} /></div>
      <div>
        <span className="doc-type">{report.type} · 0{index + 1} · {report.id}</span>
        <h3>{report.name}</h3>
        <span className="download-label">Download file <Download size={14} /></span>
      </div>
      <ArrowUpRight className="doc-arrow" size={18} />
    </a>
  );
}

export default function Thesis() {
  return (
    <section id="thesis" className="section section-anchor thesis-section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Thesis"
          title="Final reports from every member."
          text="Each research team member documented their individual contribution, evaluation, and conclusions in a final report."
        />
        <div className="document-grid">
          <ReportCard report={groupReport} index={0} />
          {finalReports.map((report, index) => (
            <ReportCard report={report} index={index + 1} key={report.file} />
          ))}
        </div>
      </div>
    </section>
  );
}
