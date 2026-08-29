import React from "react";

const SectionWrapper = ({ id, title, kicker, subtitle, children }) => {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="pb-16 reveal-on-scroll">
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
