import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Icon from "../common/Icon";

const responsibilities = [
  "Develop full-stack applications with Python, Django REST Framework, React, JavaScript, Tailwind CSS, and PostgreSQL.",
  "Designed and maintained 15+ RESTful APIs for authentication, travel packages, destinations, booking workflows, and admin operations.",
  "Implemented JWT authentication and role-based access control to protect API endpoints and application access.",
  "Optimized PostgreSQL schemas and queries through indexing and relational design to improve response times.",
  "Built responsive interfaces and integrated them with backend services for consistent, reliable user flows.",
  "Collaborated through Git branching, pull requests, Agile/Scrum, testing, and production deployment practices.",
];

const capabilities = [
  { icon: "server", title: "Backend architecture", text: "APIs, auth, business logic, and data models designed to be used and maintained." },
  { icon: "code", title: "Product interfaces", text: "Responsive React experiences that make complicated workflows feel clear." },
  { icon: "terminal", title: "Delivery mindset", text: "Git, Docker, AWS, Linux, testing, and the details between local and live." },
];

const Experience = () => (
  <SectionWrapper id="experience" kicker="02 — experience" title="Building from the inside out." subtitle="My approach is backend-first, but the finish line is always a complete product experience.">
    <div className="experience-layout">
      <div className="timeline-wrap">
        <div className="timeline-line" />
        <div className="timeline-entry">
          <div className="timeline-marker"><span /></div>
          <div className="timeline-date">NOV 2025 — PRESENT <span>/</span> CHENNAI, INDIA</div>
          <div className="timeline-heading"><div><h3>Backend Developer</h3><p>DCX WORKS</p></div><span className="current-pill"><span /> Current role</span></div>
          <p className="timeline-summary">Owning the systems that power full-stack products — from the first data model to the final deployed flow.</p>
          <ul className="responsibility-list">
            {responsibilities.map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="capability-stack">
        <p className="mini-label">Where I add value</p>
        {capabilities.map((capability) => (
          <GlassCard className="capability-card" key={capability.title}>
            <span className="capability-icon"><Icon name={capability.icon} size={19} /></span>
            <div><h3>{capability.title}</h3><p>{capability.text}</p></div>
            <Icon name="arrowUpRight" size={15} className="capability-arrow" />
          </GlassCard>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
