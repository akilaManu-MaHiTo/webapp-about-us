import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileText,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Network,
  Phone,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const docs = [
  { label: "TAF Submission", file: "TAF_R26-SE-025.pdf", type: "PDF" },
  { label: "Proposal Presentation", file: "R26-SE-025-proposal presentation.pptx", type: "PPTX" },
  { label: "Progress Presentation 01", file: "R26-SE-025-progress presentation 1.pptx", type: "PPTX" },
  { label: "Progress Presentation 02", file: "R26-SE-025-progress presentation 2.pptx", type: "PPTX" },
];

const memberDocs = [
  { label: "A.M. Senarathna · Proposal", file: "IT22262554-proposal.pdf", type: "PDF" },
  { label: "A.M. Senarathna · Research paper", file: "IT22262554-research paper.pdf", type: "PDF" },
  { label: "B.K.H.M.B.L. Herath · Proposal", file: "IT22557056-proposal.pdf", type: "PDF" },
  { label: "H.I.B. Wickramarathne · Proposal", file: "IT22239198-proposal.pdf", type: "PDF" },
  { label: "L.S.B. Hemarathne · Proposal", file: "IT22134776-Proposal.pdf", type: "PDF" },
];

const milestoneDownloads = {
  "TAF Submission": [docs[0]],
  "Project Proposals": [
    ...memberDocs.filter((doc) => doc.label.includes("Proposal")),
    docs[1],
  ],
  "Progress Presentation 01": [docs[2]],
  "Progress Presentation 02": [docs[3]],
  "Final Research Papers": [memberDocs[1]],
};

const team = [
  ["A.M. Senarathna", "IT22262554", "it22262554@my.sliit.lk", "075 638 2579", "AS"],
  ["B.K.H.M.B.L. Herath", "IT22557056", "it22557056@my.sliit.lk", "070 456 1240", "BH"],
  ["H.I.B. Wickramarathne", "IT22239198", "it22239198@my.sliit.lk", "074 005 6156", "HW"],
  ["L.S.B. Hemarathne", "IT22134776", "it22134776@my.sliit.lk", "076 474 8263", "LH"],
];

const milestones = [
  ["01", "TAF Submission", "Project registration and initial assessment framework submission."],
  ["02", "Project Proposals", "Individual proposals from each research team member."],
  ["03", "Progress Presentation 01", "Sharing the first stage of findings, scope, and direction."],
  ["04", "Progress Presentation 02", "Demonstrating progress and validating the research approach."],
  ["05", "Demonstration", "Showcasing the working Gradex AI assessment experience."],
  ["06", "Final Presentation", "Presenting the complete solution and research outcomes."],
  ["07", "Final Research Papers", "Documenting the contribution, evaluation, and conclusions."],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <button className="logo" onClick={() => scrollTo("home")} aria-label="Go to home">
      <img src="/docs/gradex-logo.png" alt="Gradex AI" />
    </button>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["scope", "Scope"],
    ["milestones", "Milestones"],
    ["presentations", "Presentations"],
    ["team", "Our team"],
    ["contact", "Contact"],
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => { scrollTo(id); closeMenu(); }}>{label}</button>
            ))}
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <button className="header-cta" onClick={() => scrollTo("contact")}>Let&apos;s talk <ArrowUpRight size={16} /></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-anchor">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill"><span className="pulse-dot" /> Research project · R26-SE-025</div>
              <h1>Welcome to <em>Gradex AI.</em></h1>
              <p className="hero-lede">Smarter grading. Deeper insight. Better outcomes.</p>
              <p className="hero-description">An AI-powered assessment platform built to make higher education more consistent, insightful, and human-centered.</p>
              <div className="hero-actions">
                <button className="button button-dark" onClick={() => scrollTo("scope")}>Explore our research <ArrowUpRight size={17} /></button>
                <button className="text-button" onClick={() => scrollTo("about")}>Learn about the project <ChevronDown size={16} /></button>
              </div>
              <div className="hero-proof"><div className="proof-avatars"><span>AS</span><span>BH</span><span>HW</span><span>LH</span></div><span>Built by a student research team<br /><b>at SLIIT</b></span></div>
            </div>
            <div className="hero-art">
              <div className="hero-image-frame"><img src="/docs/gradex-banner.webp" alt="Gradex AI assessment dashboard and grading modules" /></div>
              <div className="floating-note note-one"><Check size={15} /> Human-centered AI</div>
              <div className="floating-note note-two"><Sparkles size={15} /> Intelligent evaluation</div>
            </div>
          </div>
          <div className="container feature-strip">
            {[
              ["01", "Diagram Grading", Network, "Identifies and extracts diagrams from handwritten examination papers using computer vision. It compares diagram structures, entities, relationships, and relevant elements against reference diagrams and marking rubrics to assign marks and provide feedback."],
              ["02", "Handwritten Grading", ScanLine, "Evaluates handwritten essay answers by extracting text using OCR and handwriting recognition. It analyzes semantic meaning, key concepts, reasoning, and answer relevance against marking schemes to generate marks and constructive feedback."],
              ["03", "Question Making", BrainCircuit, "Analyzes student performance at question and topic levels to identify weaknesses and learning gaps. It generates personalized practice questions and dashboards for performance trends, difficult questions, topic progress, and future examination patterns."],
              ["04", "Viva Evaluation", Mic2, "Evaluates online viva responses by analyzing spoken answers, speech characteristics, and relevant visual features. It assesses accuracy, conceptual understanding, clarity, and reasoning, generating suggested scores, explanations, and feedback to assist examiners."],
            ].map(([number, label, Icon, text]) => <article className="feature-chip" key={label}><div className="feature-chip-top"><span>{number}</span><Icon size={19} /></div><h3>{label}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="about" className="section section-anchor about-section">
          <div className="container about-layout">
            <SectionHeading eyebrow="01 / About" title="Assessment should reveal potential, not just produce a score." text="Gradex AI is a research project focused on transforming the way higher education evaluates student learning. We bring multiple assessment formats into one intelligent, transparent system." />
            <div className="about-side"><div className="big-number">01<span>project vision</span></div><p>We are exploring how AI can support lecturers while giving students richer, fairer feedback on the work they create.</p><button className="circle-link" onClick={() => scrollTo("scope")} aria-label="Explore project scope"><ArrowUpRight size={20} /></button></div>
          </div>
          <div className="container about-cards">
            {[
              ["01", "One connected system", "A unified experience for written answers, diagrams, generated questions, and viva responses."],
              ["02", "Human-led intelligence", "Technology that supports academic judgment with evidence, consistency, and explainable results."],
              ["03", "Built for better learning", "Actionable insights that help students understand their strengths and focus their effort."],
            ].map(([number, title, text]) => <article className="info-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="scope" className="section section-anchor dark-section">
          <div className="container"><SectionHeading eyebrow="02 / Research scope" title="A closer look at the problem we are solving." text="Our study examines the opportunities and limits of AI-assisted assessment across the full learning journey." />
            <div className="scope-grid">
              {[
                ["Literature Survey", "Existing systems such as Moodle, Blackboard, and Canvas mainly support objective questions and basic automated grading. Research on NLP, deep learning, and diagram evaluation has improved automated assessment, but evaluating handwritten answers, diagrams, mathematical expressions, and viva responses together remains challenging."],
                ["Research Gap", "Existing assessment systems lack a unified framework for evaluating multiple academic response formats. They also have limitations in grading consistency, explainability, personalized learning insights, and predictive analytics."],
                ["Research Problem", "Traditional academic assessment is time-consuming, costly, and prone to inconsistent grading. Existing automated systems struggle to evaluate diverse student responses and identify learning gaps effectively, creating a need for an integrated AI-based assessment system."],
                ["Objectives", "The main objective is to develop an AI-powered multimodal academic evaluation system. Individual objectives are to analyze question-level performance, identify students’ weak areas, generate personalized practice questions, and predict potential future examination question patterns."],
                ["Methodology", "The methodology involves reviewing existing research, collecting and preprocessing academic data, developing AI-based evaluation and analytics models, and integrating them into the system. Finally, the system will be tested to evaluate its accuracy, effectiveness, and reliability."],
                ["Tools & Technologies", "The proposed technologies include TensorFlow, PyTorch, OpenCV, NLP libraries, transformer models, OCR, and machine-learning techniques. Python, predictive analytics, NLP-based question generation, and data visualization may be used depending on the final implementation."],
              ].map(([title, text], index) => <article className="scope-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
            {false && <div className="component-grid">
              {[
                ["01", "Handwritten Essay Answer Grading", "Evaluates handwritten essay answers by extracting text using OCR and handwriting recognition. It analyzes semantic meaning, key concepts, reasoning, and answer relevance against marking schemes to generate marks and constructive feedback."],
                ["02", "Handwritten Diagram Grading", "Identifies and extracts diagrams from handwritten examination papers using computer vision. It compares diagram structures, entities, relationships, and other relevant elements against reference diagrams and marking rubrics to assign marks and provide feedback."],
                ["03", "Question Generation and Dashboard", "Analyzes student performance at question and topic levels to identify weaknesses and learning gaps. It generates personalized practice questions and provides dashboards for performance trends, difficult questions, topic progress, and potential future examination patterns."],
                ["04", "Viva Assessment", "Evaluates online viva responses by analyzing spoken answers, speech characteristics, and relevant visual features. It assesses accuracy, conceptual understanding, clarity, and reasoning, generating suggested scores, explanations, and feedback to assist examiners."],
              ].map(([number, title, text]) => <article className="component-card" key={title}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>}
          </div>
        </section>

        <section id="milestones" className="section section-anchor milestones-section">
          <div className="container milestones-layout"><SectionHeading eyebrow="03 / Milestones" title="From first question to final paper." text="Follow the research journey as Gradex AI moves from a question on paper to a validated assessment experience." />
            <div className="timeline">{milestones.map(([number, title, text], index) => <div className="timeline-item" key={title}><div className="timeline-index">{number}</div><div className="timeline-line">{index < milestones.length - 1 && <span />}</div><div className={index === 4 ? "timeline-content active" : "timeline-content"}><div><h3>{title}</h3><p>{text}</p>{milestoneDownloads[title] && <div className="stepper-downloads">{milestoneDownloads[title].map(doc => <a href={`/docs/${encodeURIComponent(doc.file)}`} download key={doc.file}><Download size={12} /> {doc.label}</a>)}</div>}</div>{index === 4 && <span className="current-tag">Current focus</span>}</div></div>)}</div>
          </div>
        </section>

        <section id="presentations" className="section section-anchor presentations-section">
          <div className="container"><SectionHeading eyebrow="04 / Presentations & papers" title="Explore the work behind the interface." text="Download our key submissions and presentation materials to follow the evolution of the research." />
            <div className="document-grid">{docs.slice(1).map((doc, index) => <a className="document-card" href={`/docs/${encodeURIComponent(doc.file)}`} download key={doc.file}><div className="doc-icon"><FileText size={21} /></div><div><span className="doc-type">{doc.type} · 0{index + 1}</span><h3>{doc.label}</h3><span className="download-label">Download file <Download size={14} /></span></div><ArrowUpRight className="doc-arrow" size={18} /></a>)}</div>
          </div>
        </section>

        <section className="banner-section section-anchor" id="banner"><div className="container"><img src="/docs/gradex-banner.webp" alt="Gradex AI campaign banner" /></div></section>

        <section id="team" className="section section-anchor team-section">
          <div className="container"><SectionHeading eyebrow="05 / Our team" title="The people behind the research." text="A collaborative team investigating what assessment can become when technology and academic care work together." />
            <div className="supervisor-card"><div className="person-avatar supervisor-avatar">SC</div><div><span className="eyebrow">Research supervisor</span><h3>Ms. Sanjeevi Chandrasiri</h3><p>Guiding the team from first hypothesis to final validation.</p></div><GraduationCap size={34} /></div>
            <div className="team-grid">{team.map(([name, id, email, phone, initials]) => <article className="person-card" key={id}><div className="person-avatar">{initials}</div><div className="person-details"><h3>{name}</h3><span className="student-id">{id}</span><a href={`mailto:${email}`}><Mail size={14} /> {email}</a><a href={`tel:${phone.replaceAll(" ", "")}`}><Phone size={14} /> {phone}</a></div></article>)}</div>
          </div>
        </section>

        <section id="contact" className="section section-anchor contact-section">
          <div className="container contact-grid"><div><SectionHeading eyebrow="06 / Contact" title="Let&apos;s make assessment more meaningful." text="Have a question about our research, the team, or the Gradex AI project? We would love to hear from you." /><a href="mailto:akilamanujith@gmail.com" className="contact-email">akilamanujith@gmail.com <ArrowUpRight size={18} /></a></div><div className="map-card"><div className="map-grid" /><div className="map-pin"><MapPin size={23} /></div><div className="map-label"><b>SLIIT Malabe Campus</b><span>New Kandy Road, Malabe</span></div><a className="map-link" href="https://maps.google.com/?q=SLIIT+Malabe+Campus" target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={14} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><Logo /><div className="footer-nav">{navItems.slice(1).map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</div><div className="socials"><a href="https://github.com" aria-label="Github"><Github size={17} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a></div></div><div className="container footer-bottom"><span>© 2025 Gradex AI · R26-SE-025</span><span>Built for better learning.</span><button onClick={() => scrollTo("home")}>Back to top ↑</button></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
