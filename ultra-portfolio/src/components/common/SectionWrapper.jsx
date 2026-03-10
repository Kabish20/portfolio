import React from "react";

const SectionWrapper = ({ id, title, kicker, subtitle, children }) => {
  return (
    <section id={id} className="pb-16">
      <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          {kicker && <p className="section-kicker">{kicker}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
        {subtitle && (
          <p className="section-subtitle md:text-right">
            {subtitle}
          </p>
        )}
      </header>

      {children}
    </section>
  );
};

export default SectionWrapper;
