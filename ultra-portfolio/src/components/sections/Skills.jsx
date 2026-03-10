import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import { skills, skillGroups } from "../../data/skills";

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("All");

  const visibleSkills =
    activeGroup === "All"
      ? skills
      : skills.filter((s) => s.group === activeGroup);

  return (
    <SectionWrapper
      id="skills"
      kicker="Skills"
      title="Tech Stack"
      subtitle="A mix of backend-focused skills with enough frontend to ship complete experiences."
    >
      {/* filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skillGroups.map((group) => (
          <button
            key={group}
            onClick={() => setActiveGroup(group)}
            className={`px-4 py-1.5 rounded-full text-xs border transition ${
              activeGroup === group
                ? "bg-gradient-to-r from-primary to-secondary border-transparent text-slate-900 font-semibold"
                : "border-slate-600 text-slate-200 hover:bg-slate-800/80"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* skill cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {visibleSkills.map((skill) => (
          <GlassCard key={skill.name} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-slate-100">
                  {skill.name}
                </p>
                <p className="text-[11px] text-slate-400">{skill.group}</p>
              </div>
              <p className="text-xs text-cyan-200">{skill.level}</p>
            </div>
            <div className="h-2.5 rounded-full bg-slate-900 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
