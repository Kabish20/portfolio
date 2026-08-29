import React from "react";

const paths = {
  python: <><path d="M12 3H8a3 3 0 0 0-3 3v3h7v2H6a3 3 0 0 0-3 3v1h6" /><path d="M12 21h4a3 3 0 0 0 3-3v-3h-7v-2h6a3 3 0 0 0 3-3V9h-6" /><circle cx="8" cy="6" r=".7" fill="currentColor" /><circle cx="16" cy="18" r=".7" fill="currentColor" /></>,
  django: <><path d="M6 4v11a5 5 0 0 0 10 0V8" /><path d="M10 4h6" /></>,
  api: <><path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18" /></>,
  security: <><path d="M12 3 20 6v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  javascript: <><path d="M4 4h16v16H4z" /><path d="M8 16c.5 1 1.3 1.5 2.3 1.5 1 0 1.7-.5 1.7-1.3 0-2-4-1-4-3.6 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.2.4 2.8 1.3M16 10v5c0 1-.5 1.5-1.3 1.5-.5 0-.9-.2-1.2-.5" /></>,
  react: <><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="9" ry="4" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" /></>,
  tailwind: <><path d="M3 15c3-6 6-6 9-3s6 3 9-3c-3 6-6 6-9 3s-6-3-9 3Z" /></>,
  web: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h2M14 14h2M8 17h5" /></>,
  database: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  git: <><circle cx="7" cy="7" r="2" /><circle cx="17" cy="17" r="2" /><circle cx="17" cy="7" r="2" /><path d="M9 7h6M7 9v6c0 1.1.9 2 2 2h6" /></>,
  docker: <><path d="M3 14h18M6 14V8h3v6M10 14V6h3v8M14 14V9h3v5M3 14c.5 4 3 5 7 5h3c3 0 5-2 6-5" /></>,
  cloud: <><path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.3 9.5 4.3 4.3 0 0 0 7 18Z" /></>,
  pipeline: <><path d="M4 6h6v4H4zM14 14h6v4h-6zM10 8h4v8h-4" /><path d="M10 16H7v-6M14 8h3v6" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
};

const SkillIcon = ({ name }) => <span className="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.terminal}</svg></span>;

export default SkillIcon;
