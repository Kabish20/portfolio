import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Badge from "../common/Badge";
import { projects } from "../../data/projects";

const Projects = () => (
  <SectionWrapper id="projects" kicker="Selected work" title="Products I have shipped" subtitle="Resume-backed projects that show how I move from API design to a polished, deployable experience.">
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <GlassCard key={project.title} className="p-6 project-card" style={{ "--delay": `${index * 140}ms` }}>
          <div className="flex justify-between items-start gap-3">
            <div>
              <p className="project-eyebrow">0{index + 1} / {project.eyebrow}</p>
              <h3 className="text-xl font-semibold text-slate-50 mb-2">{project.title}</h3>
              <Badge color="green">{project.type}</Badge>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </div>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">{project.description}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {project.highlights.map((highlight) => <div key={highlight} className="project-highlight">{highlight}</div>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="px-3 py-1 rounded-full text-[11px] bg-slate-900 border border-slate-700 text-slate-200">{tag}</span>)}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-xs text-cyan-200 hover:text-white hover:underline">View project <span aria-hidden="true">→</span></a>
        </GlassCard>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
