import React from "react";

const GlassCard = ({ className = "", children, style }) => {
  return (
    <div
      className={`panel rounded-2xl ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
