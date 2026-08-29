import React from "react";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  delay: `${(index % 6) * 0.8}s`,
  duration: `${8 + (index % 5) * 2}s`,
}));

const AmbientParticles = () => (
  <div className="ambient-particles" aria-hidden="true">
    {particles.map((particle) => (
      <span key={particle.id} style={{ left: particle.left, top: particle.top, "--delay": particle.delay, "--duration": particle.duration }} />
    ))}
  </div>
);

export default AmbientParticles;
