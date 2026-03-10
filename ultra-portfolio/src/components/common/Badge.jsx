import React from "react";

const Badge = ({ children, color = "primary" }) => {
  const base =
    "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border";
  const styles =
    color === "green"
      ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
      : color === "orange"
      ? "border-amber-400/40 bg-amber-500/10 text-amber-200"
      : "border-cyan-400/40 bg-cyan-500/10 text-cyan-100";
  return <span className={`${base} ${styles}`}>{children}</span>;
};

export default Badge;
