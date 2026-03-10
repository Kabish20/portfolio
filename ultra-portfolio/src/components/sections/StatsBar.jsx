import React from "react";
import GlassCard from "../common/Glasscard";

const stats = [
  { label: "Production-style projects", value: "10+", accent: "cyan" },
  { label: "Tech stack focus", value: "Python · Django · React", accent: "purple" },
  { label: "Currently learning", value: "Advanced REST · Optimization", accent: "orange" },
];

const StatsBar = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {stats.map((s) => (
        <GlassCard key={s.label} className="p-4 md:p-5">
          <p className="text-xs text-slate-400 mb-1">{s.label}</p>
          <p className="text-sm md:text-base font-semibold text-slate-100">
            {s.value}
          </p>
        </GlassCard>
      ))}
    </div>
  );
};

export default StatsBar;
