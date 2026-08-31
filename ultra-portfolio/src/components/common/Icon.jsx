import React from "react";

const iconPaths = {
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  arrowDown: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
  copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  external: <><path d="M14 5h5v5" /><path d="M19 5 11 13" /><path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" /></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 3.7 5.1 5.1 0 0 0 19.1 0S17.8-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.2-.4 4.9 0 4.9 0a5.1 5.1 0 0 0-.1 3.7A5.5 5.5 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  mapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 7h.01M7 18h.01" /></>,
  spark: <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />,
  terminal: <><path d="m5 7 4 5-4 5" /><path d="M12 17h7" /></>,
  twitter: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-8.8 17.3-18 11.5 2.2.1 4.4-.6 6-2C3 15.8 1.5 10.5 4 6.9c2.2 2.6 5.5 4.1 9 4-.9-4.2 4-6.6 6.4-3.7 1.2 0 2.6-.4 3.6-1.2Z" />,
};

const Icon = ({ name, size = 18, strokeWidth = 1.7, className = "" }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {iconPaths[name] || iconPaths.code}
  </svg>
);

export default Icon;
