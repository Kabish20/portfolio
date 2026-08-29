import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";

const About = () => (
  <SectionWrapper id="about" kicker="About" title="Backend systems with product thinking" subtitle="I build dependable backend systems and the interfaces that make them useful.">
    <div className="max-w-3xl">
      <GlassCard className="p-6 md:p-7">
        <p className="text-sm text-slate-300 leading-relaxed">At DCX WORKS, I develop and maintain full-stack applications with Python, Django REST Framework, React.js, JavaScript, Tailwind CSS, and PostgreSQL. My work spans API design, authentication, business logic, frontend integration, testing, and deployment.</p>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">I have designed and implemented 15+ RESTful APIs for authentication, travel packages, booking workflows, destinations, and admin operations. I care about clean relational data models, predictable response formats, validation, and performance.</p>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">My technical focus is secure API development, JWT authentication, role-based access control, PostgreSQL query optimization, and production-minded delivery with Docker, AWS, Linux, and CI/CD.</p>
        <div className="mt-7 pt-5 border-t border-white/10">
          <p className="project-eyebrow">Certifications</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
            <li>Meta Back-End Developer Professional Certificate - Meta (Coursera)</li>
            <li>IBM SQL and Relational Databases 101 - IBM Cognitive Class</li>
            <li>Building with the Claude API - Anthropic</li>
          </ul>
        </div>
      </GlassCard>
    </div>
  </SectionWrapper>
);

export default About;
