import supunPhoto from "../assets/supun.png";
import harithaPhoto from "../assets/haritha.png";
import buddhilaPhoto from "../assets/buddhila.png";
import supervisorPhoto from "../assets/Sanjeevi-Chandrasiri.png";

export const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["scope", "Scope"],
  ["milestones", "Milestones"],
  ["thesis", "Thesis"],
  ["presentations", "Presentations"],
  ["team", "Our team"],
  ["contact", "Contact"],
];

export const supervisor = {
  initials: "SC",
  name: "Ms. Sanjeevi Chandrasiri",
  role: "Research supervisor",
  description: "Guiding the team from first hypothesis to final validation.",
  image: supervisorPhoto,
};

export const team = [
  { name: "A.M. Senarathna", id: "IT22262554", email: "it22262554@my.sliit.lk", phone: "075 638 2579", initials: "AS", image: null },
  { name: "B.K.H.M.B.L. Herath", id: "IT22557056", email: "it22557056@my.sliit.lk", phone: "070 456 1240", initials: "BH", image: harithaPhoto },
  { name: "H.I.B. Wickramarathne", id: "IT22239198", email: "it22239198@my.sliit.lk", phone: "074 005 6156", initials: "HW", image: buddhilaPhoto },
  { name: "L.S.B. Hemarathne", id: "IT22134776", email: "it22134776@my.sliit.lk", phone: "076 474 8263", initials: "LH", image: supunPhoto },
];

export const milestones = [
  ["01", "TAF Submission", "Project registration and initial assessment framework submission."],
  ["02", "Project Proposals", "Individual proposals from each research team member."],
  ["03", "Progress Presentation 01", "Sharing the first stage of findings, scope, and direction."],
  ["04", "Progress Presentation 02", "Demonstrating progress and validating the research approach."],
  ["05", "Final Presentation", "Presenting the complete solution and research outcomes."],
  ["06", "Final Reports", "Individual final reports from each research team member."],
  ["07", "Final Research Papers", "Documenting the contribution, evaluation, and conclusions."],
];

export const aboutCards = [
  ["01", "One connected system", "A unified experience for written answers, diagrams, generated questions, and viva responses."],
  ["02", "Human-led intelligence", "Technology that supports academic judgment with evidence, consistency, and explainable results."],
  ["03", "Built for better learning", "Actionable insights that help students understand their strengths and focus their effort."],
];

export const scopeItems = [
  ["Literature Survey", "Existing systems such as Moodle, Blackboard, and Canvas mainly support objective questions and basic automated grading. Research on NLP, deep learning, and diagram evaluation has improved automated assessment, but evaluating handwritten answers, diagrams, mathematical expressions, and viva responses together remains challenging."],
  ["Research Gap", "Existing assessment systems lack a unified framework for evaluating multiple academic response formats. They also have limitations in grading consistency, explainability, personalized learning insights, and predictive analytics."],
  ["Research Problem", "Traditional academic assessment is time-consuming, costly, and prone to inconsistent grading. Existing automated systems struggle to evaluate diverse student responses and identify learning gaps effectively, creating a need for an integrated AI-based assessment system."],
  ["Objectives", "The main objective is to develop an AI-powered multimodal academic evaluation system. Individual objectives are to analyze question-level performance, identify students’ weak areas, generate personalized practice questions, and predict potential future examination question patterns."],
  ["Methodology", "The methodology involves reviewing existing research, collecting and preprocessing academic data, developing AI-based evaluation and analytics models, and integrating them into the system. Finally, the system will be tested to evaluate its accuracy, effectiveness, and reliability."],
  ["Tools & Technologies", "The proposed technologies include TensorFlow, PyTorch, OpenCV, NLP libraries, transformer models, OCR, and machine-learning techniques. Python, predictive analytics, NLP-based question generation, and data visualization may be used depending on the final implementation."],
];
