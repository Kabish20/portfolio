import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Badge from "../common/Badge";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      kicker="Projects"
      title="Work that represents me"
      subtitle="A mix of backend-heavy and full-stack projects that reflect how I design, code, and ship."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <GlassCard
            key={project.title}
            className="p-6 group hover:-translate-y-1.5 hover:shadow-neon-card transition-transform"
          >
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-1">
                  {project.title}
                </h3>
                <Badge color="green">{project.type}</Badge>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] bg-slate-900 border border-slate-700 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs text-cyan-200 group-hover:text-cyan-100 hover:underline cursor-pointer"
            >
              View details →
            </a>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
