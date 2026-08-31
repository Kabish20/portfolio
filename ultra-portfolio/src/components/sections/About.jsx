import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Icon from "../common/Icon";

const principles = [
  { number: "01", title: "Understand the system", text: "I map the user journey, data model, and edge cases before I write the first endpoint." },
  { number: "02", title: "Make the core reliable", text: "Validation, auth, predictable responses, and thoughtful queries are part of the product." },
  { number: "03", title: "Ship the whole thing", text: "I care about the handoff between backend, frontend, tests, and the deployed experience." },
];

const About = () => (
  <SectionWrapper id="about" kicker="01 — about me" title="The work is invisible. The impact isn&apos;t." subtitle="A backend-first engineer with a product mindset and a bias toward simple, dependable systems.">
    <div className="about-grid">
      <div className="about-story">
        <p className="large-copy">I like the part of software that makes everything else feel easy.</p>
        <p>At DCX WORKS, I develop and maintain full-stack applications across Python, Django REST Framework, React, JavaScript, Tailwind CSS, and PostgreSQL. My work sits between product intent and production reality: turning requirements into API contracts, business logic, interfaces, and deployable releases.</p>
        <p>I&apos;m especially interested in authentication, role-based access, relational data, booking workflows, and performance. Good code is important; good decisions that keep a system understandable six months later are even better.</p>
        <a href="#experience" className="text-link">See how I work <Icon name="arrowRight" size={15} /></a>
      </div>
      <GlassCard className="principles-card">
        <div className="card-topline"><span>working principles</span><Icon name="spark" size={15} /></div>
        <div className="principles-list">
          {principles.map((principle) => (
            <div className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
    <div className="certification-row">
      <span className="cert-label">Continually learning</span>
      <span>Meta Back-End Developer</span><span className="cert-separator">/</span>
      <span>IBM SQL &amp; Relational Databases</span><span className="cert-separator">/</span>
      <span>Building with the Claude API</span>
    </div>
  </SectionWrapper>
);

export default About;
