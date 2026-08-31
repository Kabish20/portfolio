import React from "react";
import "./index.css";

import Navbar from "./components/layout/Navbar";
import MouseGlow from "./components/layout/MouseGlow";
import ScrollProgress from "./components/layout/ScrollProgress";
import AmbientParticles from "./components/layout/AmbientParticles";

import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <div className="ambient-grid absolute inset-0" />
        <div className="ambient-noise absolute inset-0" />
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />
        <div className="background-orb orb-three" />
      </div>

      <MouseGlow />
      <ScrollProgress />
      <AmbientParticles />
      <Navbar />

      <main className="main-content">
        <section id="hero" className="hero-section">
          <Hero />
        </section>

        <section id="stats" className="stats-section">
          <StatsBar />
        </section>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
