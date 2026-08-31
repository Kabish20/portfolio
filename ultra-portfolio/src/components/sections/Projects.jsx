import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Icon from "../common/Icon";
import { projects } from "../../data/projects";

const ProjectVisual = ({ project, index }) => (
  <div className={`project-visual project-visual-${project.accent}`}>
    <img src={project.image} alt={`${project.title} project visual`} loading={index < 2 ? "eager" : "lazy"} />
    <div className="project-visual-overlay" />
    <div className="project-visual-meta"><span>Case study / 0{index + 1}</span><span>{project.type}</span></div>
    <span className="visual-corner">0{index + 1}</span>
  </div>
);

const Projects = () => (
  <SectionWrapper id="projects" kicker="04 — selected work" title="A few things I&apos;ve shipped." subtitle="A small selection of products where the hard parts mattered — and the details made the difference.">
    <div className="projects-list">
      {projects.map((project, index) => (
        <GlassCard key={project.title} className={`project-card project-card-${index}`}>
          <ProjectVisual project={project} index={index} />
          <div className="project-content">
            <div className="project-heading-row"><div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3></div><span className="project-year">{project.year}</span></div>
            <span className="project-type">{project.type}</span>
            <p className="project-description">{project.description}</p>
            <p className="project-outcome"><span>Outcome</span>{project.outcome}</p>
            <div className="project-highlights">{project.highlights.map((highlight) => <span key={highlight}><Icon name="check" size={13} />{highlight}</span>)}</div>
            <div className="project-footer"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><Icon name="arrowUpRight" size={18} /></a></div>
          </div>
        </GlassCard>
      ))}
    </div>
    <div className="projects-footer"><span>More experiments and source code</span><a href="https://github.com/Kabish20" target="_blank" rel="noopener noreferrer" className="text-link">Visit GitHub <Icon name="arrowUpRight" size={15} /></a></div>
  </SectionWrapper>
);

export default Projects;
