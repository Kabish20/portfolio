import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import { skills, skillGroups } from "../../data/projects";

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("All");
  const visibleSkills = activeGroup === "All" ? skills : skills.filter((skill) => skill.group === activeGroup);
  return (
    <SectionWrapper id="skills" kicker="Toolkit" title="The stack behind the work" subtitle="Focused on backend reliability, with enough frontend and infrastructure knowledge to ship end to end.">
      <div className="flex flex-wrap gap-2 mb-6">{skillGroups.map((group) => <button key={group} onClick={() => setActiveGroup(group)} className={`px-4 py-1.5 rounded-full text-xs border transition ${activeGroup === group ? "bg-gradient-to-r from-primary to-secondary border-transparent text-slate-900 font-semibold" : "border-slate-600 text-slate-200 hover:bg-slate-800/80"}`}>{group}</button>)}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{visibleSkills.map((skill) => <GlassCard key={skill.name} className="p-4 skill-card"><div className="flex items-center justify-between"><span className="text-sm text-slate-100">{skill.name}</span><span className="text-[10px] uppercase tracking-wider text-cyan-300">{skill.group}</span></div></GlassCard>)}</div>
    </SectionWrapper>
  );
};

export default Skills;
