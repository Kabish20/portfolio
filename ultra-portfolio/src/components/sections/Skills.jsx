import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import SkillIcon from "../common/SkillIcon";
import Icon from "../common/Icon";
import { skills, skillGroups } from "../../data/skills";

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("All");
  const visibleSkills = activeGroup === "All" ? skills : skills.filter((skill) => skill.group === activeGroup);

  return (
    <SectionWrapper id="skills" kicker="03 — the stack" title="Tools are only useful when they disappear." subtitle="A focused toolkit for turning a product idea into a stable, observable, and enjoyable experience.">
      <div className="skills-toolbar">
        <div className="filter-tabs" role="tablist" aria-label="Filter skills">
          {skillGroups.map((group) => <button key={group} role="tab" aria-selected={activeGroup === group} onClick={() => setActiveGroup(group)} className={activeGroup === group ? "active" : ""}>{group}</button>)}
        </div>
        <span className="skills-count"><span /> {visibleSkills.length.toString().padStart(2, "0")} tools in rotation</span>
      </div>
      <div className="skills-layout">
        <GlassCard className="skills-visual-card">
          <div className="skills-visual-wrap">
            <img src="/tech-stack.png" alt="Abstract illustration of connected servers, databases, APIs, and cloud infrastructure" className="skills-visual" />
            <div className="skills-visual-overlay" />
            <div className="skills-visual-caption"><span className="pulse-dot" /><span>Systems, APIs &amp; cloud</span><small>01 / 04</small></div>
          </div>
          <div className="skills-card-note"><Icon name="terminal" size={15} /><span>Always learning. Always shipping.</span><span className="note-dash" /></div>
        </GlassCard>
        <div className="skills-grid">
          {visibleSkills.map((skill, index) => (
            <GlassCard key={skill.name} className="skill-card" style={{ "--delay": `${index * 45}ms` }}>
              <div className="skill-card-top"><SkillIcon name={skill.icon} /><span className="skill-level">{skill.level}</span></div>
              <h3>{skill.name}</h3>
              <p>{skill.group}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
