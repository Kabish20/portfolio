import React from "react";
import "./index.css";

import Navbar from "./components/layout/Navbar";
import MouseGlow from "./components/layout/MouseGlow";

import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen bg-night text-white overflow-hidden">
      {/* subtle bg gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-primary/30 blur-3xl" />
        <div className="absolute top-40 right-[-120px] w-[520px] h-[520px] bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 w-[420px] h-[420px] bg-accent/20 blur-3xl" />
      </div>

      <MouseGlow />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <section id="hero" className="pt-28 md:pt-32 pb-12">
          <Hero />
        </section>

        <section id="stats" className="pb-16">
          <StatsBar />
        </section>

        <section id="about" className="pb-16">
          <About />
        </section>

        <section id="skills" className="pb-16">
          <Skills />
        </section>

        <section id="projects" className="pb-20">
          <Projects />
        </section>

        <section id="contact" className="pb-24">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
