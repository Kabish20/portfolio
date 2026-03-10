import React from "react";

const GlassCard = ({ className = "", children }) => {
  return (
    <div
      className={
        "bg-card-soft/80 border border-cyan-400/10 rounded-xl2 shadow-neon-soft backdrop-blur-xl " +
        "transition-transform duration-200 hover:-translate-y-1 hover:shadow-neon-card " +
        className
      }
    >
      {children}
    </div>
  );
};

export default GlassCard;
