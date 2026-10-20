import tafSubmission from "../assets/TAF_R26-SE-025.pdf";
import proposalPresentation from "../assets/R26-SE-025-proposal presentation.pptx";
import progressPresentation01 from "../assets/R26-SE-025-progress presentation 1.pptx";
import progressPresentation02 from "../assets/R26-SE-025-progress presentation 2.pptx";
import senarathnaProposal from "../assets/IT22262554-proposal.pdf";
import senarathnaResearchPaper from "../assets/IT22262554-research paper.pdf";
import senarathnaFinalReport from "../assets/IT22262554-FInal-Report.pdf";
import herathProposal from "../assets/IT22557056-proposal.pdf";
import herathFinalReport from "../assets/IT22557056-FInal-Report.pdf";
import wickramarathneProposal from "../assets/IT22239198-proposal.pdf";
import wickramarathneFinalReport from "../assets/IT22239198-FInal-Report.pdf";
import hemarthaneProposal from "../assets/IT22134776-Proposal.pdf";
import hemarathneResearchPaper from "../assets/IT22134776-research paper.pdf";
import hemarathneFinalReport from "../assets/IT22134776-FInal-Report.pdf";
import finalPresentation from "../assets/Final Presentation.pptx";
import groupFinalReport from "../assets/R26-SE-025-FInal-Report.pdf";
import herathResearchPaper from "../assets/IT22557056-Research Paper.pdf";
import wickramarathneResearchPaper from "../assets/IT22239198-research paper.pdf";

export const docs = [
  { label: "TAF Submission", file: "TAF_R26-SE-025.pdf", url: tafSubmission, type: "PDF" },
  { label: "Proposal Presentation", file: "R26-SE-025-proposal presentation.pptx", url: proposalPresentation, type: "PPTX" },
  { label: "Progress Presentation 01", file: "R26-SE-025-progress presentation 1.pptx", url: progressPresentation01, type: "PPTX" },
  { label: "Progress Presentation 02", file: "R26-SE-025-progress presentation 2.pptx", url: progressPresentation02, type: "PPTX" },
  { label: "Final Presentation", file: "Final Presentation.pptx", url: finalPresentation, type: "PPTX" },
];

export const memberDocs = [
  { label: "A.M. Senarathna · Proposal", file: "IT22262554-proposal.pdf", url: senarathnaProposal, type: "PDF" },
  { label: "A.M. Senarathna · Research paper", file: "IT22262554-research paper.pdf", url: senarathnaResearchPaper, type: "PDF" },
  { label: "B.K.H.M.B.L. Herath · Proposal", file: "IT22557056-proposal.pdf", url: herathProposal, type: "PDF" },
  { label: "B.K.H.M.B.L. Herath · Research paper", file: "IT22557056-Research Paper.pdf", url: herathResearchPaper, type: "PDF" },
  { label: "H.I.B. Wickramarathne · Proposal", file: "IT22239198-proposal.pdf", url: wickramarathneProposal, type: "PDF" },
  { label: "H.I.B. Wickramarathne · Research paper", file: "IT22239198-research paper.pdf", url: wickramarathneResearchPaper, type: "PDF" },
  { label: "L.S.B. Hemarathne · Proposal", file: "IT22134776-Proposal.pdf", url: hemarthaneProposal, type: "PDF" },
  { label: "L.S.B. Hemarathne · Research paper", file: "IT22134776-research paper.pdf", url: hemarathneResearchPaper, type: "PDF" },
];

// Individual research papers, shown alongside the presentations.
export const researchPapers = memberDocs.filter((doc) => doc.label.includes("Research paper"));

// Individual final reports (thesis), labelled with the member name from their proposal.
export const finalReports = [
  { label: "A.M. Senarathna · IT22262554", name: "A.M. Senarathna", id: "IT22262554", file: "IT22262554-FInal-Report.pdf", url: senarathnaFinalReport, type: "PDF" },
  { label: "B.K.H.M.B.L. Herath · IT22557056", name: "B.K.H.M.B.L. Herath", id: "IT22557056", file: "IT22557056-FInal-Report.pdf", url: herathFinalReport, type: "PDF" },
  { label: "H.I.B. Wickramarathne · IT22239198", name: "H.I.B. Wickramarathne", id: "IT22239198", file: "IT22239198-FInal-Report.pdf", url: wickramarathneFinalReport, type: "PDF" },
  { label: "L.S.B. Hemarathne · IT22134776", name: "L.S.B. Hemarathne", id: "IT22134776", file: "IT22134776-FInal-Report.pdf", url: hemarathneFinalReport, type: "PDF" },
];

// Group final report for the whole project.
export const groupReport = { label: "Group Final Report · R26-SE-025", name: "Group Final Report", id: "R26-SE-025", file: "R26-SE-025-FInal-Report.pdf", url: groupFinalReport, type: "PDF" };

export const milestoneDownloads = {
  "TAF Submission": [docs[0]],
  "Project Proposals": [
    ...memberDocs.filter((doc) => doc.label.includes("Proposal")),
    docs[1],
  ],
  "Progress Presentation 01": [docs[2]],
  "Progress Presentation 02": [docs[3]],
  "Final Presentation": [docs[4]],
  "Final Reports (Thesis)": [groupReport, ...finalReports],
  "Final Research Papers": researchPapers,
};
