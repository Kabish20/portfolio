import React from "react";
import GlassCard from "../common/Glasscard";
import Badge from "../common/Badge";

const Hero = () => (
  <div className="grid gap-10 md:grid-cols-[1.35fr_0.9fr] items-center">
    <div className="space-y-6 hero-copy">
      <div className="hero-kicker"><span className="pulse-dot" /> Backend developer - open to opportunities</div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-[0.98] tracking-tight">
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">KABISH M. ELANGOVAN</span>
        <span className="block mt-4 text-slate-200 text-xl md:text-2xl font-semibold tracking-normal">Python - Django - APIs - React</span>
      </h1>
      <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">Backend Developer with <span className="text-cyan-200">1+ year of professional experience</span> building scalable web applications with Python, Django REST Framework, React.js, and PostgreSQL. I design secure APIs, improve database performance, and ship responsive products with Git, Docker, AWS, and CI/CD.</p>
      <div className="flex flex-wrap gap-3">
        <a href="https://drive.google.com/file/d/1pnjX6cxVcN-kqQiUxXKK--Fb9cZDIN3A/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="primary-button">View Resume <span aria-hidden="true">-&gt;</span></a>
        <a href="https://www.linkedin.com/in/kabish-fullstack" target="_blank" rel="noopener noreferrer" className="secondary-button">LinkedIn</a>
        <a href="https://github.com/Kabish20" target="_blank" rel="noopener noreferrer" className="secondary-button">GitHub</a>
        <a href="#contact" className="text-sm text-cyan-200 hover:text-white self-center transition">Contact <span aria-hidden="true">-&gt;</span></a>
      </div>
      <div className="flex flex-wrap gap-3 text-[11px] text-slate-300"><Badge>Chennai - India</Badge><Badge color="orange">B.E. - 8.30 CGPA</Badge></div>
    </div>
    <GlassCard className="p-6 md:p-7 hero-card">
      <div className="hero-orbit" aria-hidden="true"><span>PY</span><span>DJ</span><span>DB</span></div>
      <div className="relative z-10 space-y-5">
        <div><p className="project-eyebrow">PROFILE SNAPSHOT</p><h2 className="text-2xl font-semibold text-white">Building systems people can rely on.</h2></div>
        <p className="text-sm leading-relaxed text-slate-300">From authentication and RBAC to booking workflows and production deployment, I enjoy making the invisible parts of a product feel solid.</p>
        <div className="grid grid-cols-2 gap-3 text-xs"><div className="mini-metric"><strong>15+</strong><span>APIs built</span></div><div className="mini-metric"><strong>1+ yr</strong><span>Industry experience</span></div></div>
      </div>
    </GlassCard>
  </div>
);

export default Hero;
