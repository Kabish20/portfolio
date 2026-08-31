import React from "react";

const Badge = ({ children, color = "primary" }) => {
  const base = "badge";
  const styles =
    color === "green"
      ? "badge-green"
      : color === "orange"
      ? "badge-orange"
      : "badge-primary";
  return <span className={`${base} ${styles}`}>{children}</span>;
};

export default Badge;
