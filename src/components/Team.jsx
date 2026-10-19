import React from "react";
import { GraduationCap, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { supervisor, team } from "../data/content.js";

function Avatar({ person, className = "" }) {
  return (
    <div className={`person-avatar ${className}`.trim()}>
      {person.image ? <img src={person.image} alt={person.name} /> : person.initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section section-anchor team-section">
      <div className="container">
        <SectionHeading
          eyebrow="06 / Our team"
          title="The people behind the research."
          text="A collaborative team investigating what assessment can become when technology and academic care work together."
        />
        <div className="supervisor-card">
          <Avatar person={supervisor} className="supervisor-avatar" />
          <div>
            <span className="eyebrow">{supervisor.role}</span>
            <h3>{supervisor.name}</h3>
            <p>{supervisor.description}</p>
          </div>
          <GraduationCap size={34} />
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="person-card" key={member.id}>
              <Avatar person={member} />
              <div className="person-details">
                <h3>{member.name}</h3>
                <span className="student-id">{member.id}</span>
                <a href={`mailto:${member.email}`}><Mail size={14} /> {member.email}</a>
                <a href={`tel:${member.phone.replaceAll(" ", "")}`}><Phone size={14} /> {member.phone}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
