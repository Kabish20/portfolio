import React from "react";

const MouseGlow = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 180}px, ${e.clientY - 80}px)`;
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 w-96 h-40 rounded-full blur-3xl
                 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 opacity-40
                 transition-transform duration-150"
    />
  );
};

export default MouseGlow;
