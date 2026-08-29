import React from "react";
import GlassCard from "../common/Glasscard";

const stats = [
  { label: "Professional experience", value: "1+ year" },
  { label: "RESTful APIs delivered", value: "15+" },
  { label: "Education", value: "B.E. · 8.30 CGPA" },
];

const StatsBar = () => (
  <div className="grid md:grid-cols-3 gap-4">
    {stats.map((stat, index) => (
      <GlassCard key={stat.label} className="p-5 stat-card" style={{ "--delay": `${index * 120}ms` }}>
        <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
        <p className="text-lg font-semibold text-slate-100">{stat.value}</p>
      </GlassCard>
    ))}
  </div>
);

export default StatsBar;
