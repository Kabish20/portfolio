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
      className="mouse-glow"
    />
  );
};

export default MouseGlow;
