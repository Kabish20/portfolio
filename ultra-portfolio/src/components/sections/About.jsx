import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";

const About = () => (
  <SectionWrapper id="about" kicker="About" title="Backend systems with product thinking" subtitle="I build dependable backend systems and the interfaces that make them useful.">
    <div className="grid md:grid-cols-2 gap-6">
      <GlassCard className="p-6 md:p-7">
        <p className="text-sm text-slate-300 leading-relaxed">At DCX WORKS, I develop and maintain full-stack applications with Python, Django REST Framework, React.js, JavaScript, Tailwind CSS, and PostgreSQL. My work spans API design, authentication, business logic, frontend integration, testing, and deployment.</p>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">I have designed and implemented 15+ RESTful APIs for authentication, travel packages, booking workflows, destinations, and admin operations. I care about clean relational data models, predictable response formats, validation, and performance.</p>
        <p className="text-sm text-slate-300 leading-relaxed mt-4">My technical focus is secure API development, JWT authentication, role-based access control, PostgreSQL query optimization, and production-minded delivery with Docker, AWS, Linux, and CI/CD.</p>
      </GlassCard>
      <GlassCard className="p-6 md:p-7">
        <h3 className="text-lg font-semibold mb-4 text-cyan-100">How I like to work</h3>
        <ul className="space-y-3 text-sm text-slate-300"><li><span className="list-index">01</span> Start with clear data models and API contracts.</li><li><span className="list-index">02</span> Design for validation, permissions, and useful errors.</li><li><span className="list-index">03</span> Use SQL, indexes, and profiling to improve performance.</li><li><span className="list-index">04</span> Keep frontend components reusable and accessible.</li><li><span className="list-index">05</span> Ship, measure, and refine in small iterations.</li></ul>
        <div className="mt-7 pt-5 border-t border-white/10"><p className="project-eyebrow">CERTIFICATIONS</p><p className="text-sm text-slate-300 mt-2">Meta Back-End Developer · IBM SQL & Relational Databases 101 · Building with the Claude API</p></div>
      </GlassCard>
    </div>
  </SectionWrapper>
);

export default About;
