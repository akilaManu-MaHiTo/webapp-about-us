import akilaPhoto from "../assets/akila-manu.jpeg";
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
  { name: "A.M. Senarathna", id: "IT22262554", email: "it22262554@my.sliit.lk", phone: "075 638 2579", initials: "AS", image: akilaPhoto },
  { name: "B.K.H.M.B.L. Herath", id: "IT22557056", email: "it22557056@my.sliit.lk", phone: "070 456 1240", initials: "BH", image: buddhilaPhoto },
  { name: "H.I.B. Wickramarathne", id: "IT22239198", email: "it22239198@my.sliit.lk", phone: "074 005 6156", initials: "HW", image: harithaPhoto },
  { name: "L.S.B. Hemarathne", id: "IT22134776", email: "it22134776@my.sliit.lk", phone: "076 474 8263", initials: "LH", image: supunPhoto },
];

export const milestones = [
  ["01", "TAF Submission", "Project registration and initial assessment framework submission."],
  ["02", "Project Proposals", "Individual proposals from each research team member."],
  ["03", "Progress Presentation 01", "Sharing the first stage of findings, scope, and direction."],
  ["04", "Progress Presentation 02", "Demonstrating progress and validating the research approach."],
  ["05", "Final Presentation", "Presenting the complete solution and research outcomes."],
  ["06", "Final Reports (Thesis)", "Individual final reports from each research team member."],
  ["07", "Final Research Papers", "Documenting the contribution, evaluation, and conclusions."],
];

export const aboutCards = [
  ["01", "One connected system", "A unified experience for written answers, diagrams, generated questions, and viva responses."],
  ["02", "Human-led intelligence", "Technology that supports academic judgment with evidence, consistency, and explainable results."],
  ["03", "Built for better learning", "Actionable insights that help students understand their strengths and focus their effort."],
];

export const scopeItems = [
  ["Literature Survey", "Existing systems such as Moodle, Blackboard, and Canvas mainly support objective questions and basic automated grading. Research on NLP, deep learning, and diagram evaluation has improved automated assessment, but evaluating handwritten answers, diagrams, mathematical expressions, and viva responses together remains challenging."],
  ["Research Gap", "Research examines automated essay scoring [1], multimodal learning analytics [2], explainable educational AI [3], automatic question generation [4], and student-performance prediction [5]. Drawing on these strands, our study investigates how to integrate multiple academic response formats with consistent grading, understandable feedback, and personalized learning insights in one assessment workflow."],
  ["Research Problem", "Traditional academic assessment is time-consuming, costly, and prone to inconsistent grading. Existing automated systems struggle to evaluate diverse student responses and identify learning gaps effectively, creating a need for an integrated AI-based assessment system."],
  ["Objectives", "The main objective is to develop an AI-powered multimodal academic evaluation system. Individual objectives are to analyze question-level performance, identify students’ weak areas, generate personalized practice questions, and predict potential future examination question patterns."],
  ["Methodology", "The methodology involves reviewing existing research, collecting and preprocessing academic data, developing AI-based evaluation and analytics models, and integrating them into the system. Finally, the system will be tested to evaluate its accuracy, effectiveness, and reliability."],
  ["Tools & Technologies", "The proposed technologies include TensorFlow, PyTorch, OpenCV, NLP libraries, transformer models, OCR, and machine-learning techniques. Python, predictive analytics, NLP-based question generation, and data visualization may be used depending on the final implementation."],
];

export const researchGapReferences = [
  ["An automated essay scoring systems: a systematic literature review", "Artificial Intelligence Review, 2022", "https://doi.org/10.1007/s10462-021-10068-2"],
  ["Artificial intelligence in multimodal learning analytics: A systematic literature review", "Computers and Education: Artificial Intelligence, 2025", "https://doi.org/10.1016/j.caeai.2025.100426"],
  ["Explainable Artificial Intelligence in education", "Computers and Education: Artificial Intelligence, 2022", "https://doi.org/10.1016/j.caeai.2022.100074"],
  ["A Systematic Review of Automatic Question Generation for Educational Purposes", "International Journal of Artificial Intelligence in Education, 2020", "https://doi.org/10.1007/s40593-019-00186-y"],
  ["Predicting Student Performance Using Data Mining and Learning Analytics Techniques: A Systematic Literature Review", "Applied Sciences, 2021", "https://doi.org/10.3390/app11010237"],
];
