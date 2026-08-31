import React from "react";
import Icon from "../common/Icon";

const stats = [
  { value: "Python", label: "primary language" },
  { value: "Django", label: "backend framework" },
  { value: "React", label: "interface layer" },
  { value: "Postgres", label: "data I trust" },
];

const StatsBar = () => (
  <div className="stack-strip" aria-label="Core technology stack">
    <div className="stack-strip-label"><Icon name="code" size={16} /> Core stack</div>
    {stats.map((stat) => (
      <div className="stack-item" key={stat.value}>
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    ))}
  </div>
);

export default StatsBar;
