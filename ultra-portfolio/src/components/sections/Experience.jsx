import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";

const Experience = () => (
  <SectionWrapper id="experience" kicker="Experience" title="Where I create value" subtitle="A backend-first approach, grounded in real delivery work.">
    <GlassCard className="p-6 md:p-8 experience-card">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <p className="project-eyebrow">NOV 2025 — PRESENT · CHENNAI, INDIA</p>
          <h3 className="text-xl font-semibold text-white">Backend Developer · DCX WORKS</h3>
        </div>
        <span className="status-chip">Current role</span>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-4 text-sm text-slate-300">
        <p>Develop full-stack applications using Python, Django REST Framework, React.js, JavaScript, Tailwind CSS, and PostgreSQL.</p>
        <p>Designed and maintained 15+ RESTful APIs across authentication, travel packages, booking workflows, destinations, and admin operations.</p>
        <p>Implemented JWT authentication and role-based access control to protect API endpoints and application access.</p>
        <p>Optimized PostgreSQL schemas and queries through indexing and relational design to improve response times.</p>
        <p>Built responsive interfaces and integrated them with backend services for consistent user flows.</p>
        <p>Collaborated through Git branching, pull requests, Agile/Scrum, testing, and production deployment practices.</p>
      </div>
    </GlassCard>
  </SectionWrapper>
);

export default Experience;
