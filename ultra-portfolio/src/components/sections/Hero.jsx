import React from "react";
import GlassCard from "../common/Glasscard";
import Badge from "../common/Badge";

const Hero = () => {
  return (
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
      {/* Left content */}
      <div className="space-y-6">
        

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            KABISH&nbsp;M&nbsp;E
          </span>
          <span className="block mt-2 text-slate-200 text-xl md:text-2xl font-semibold">
           Backend-Focused Full-Stack Developer
          </span>
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-xl">
         Motivated Full Stack Developer with experience in designing and developing web applications using <span className="text-primary">Django, 
         React, REST APIs, Python, and PostgreSQL</span>. Skilled in creating scalable backend services, responsive front-end 
         interfaces, and efficient database structures. Strong in debugging, problem-solving, and software testing using 
         Postman, Git, and browser developer tools. Proven ability to deliver end-to-end solutions including API 
         development, UI implementation, database design, and application deployment on cloud platforms.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/1HFHoqeXpaxjTl1CIyzGYY2Sw-8RapUqG/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-sm font-semibold shadow-neon-card hover:brightness-110 transition"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kabish-m-e-b194aa261"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-slate-600 text-sm text-slate-100 hover:bg-slate-800/70 transition">
            LinkedIn
          </a>
          <a
            href="https://github.com/Kabish20"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-slate-600 text-sm text-slate-100 hover:bg-slate-800/70 transition"
          >
            GitHub
          </a>
          <button
            className="px-4 py-2.5 rounded-xl text-sm text-primary hover:text-cyan-100 hover:bg-cyan-400/10 transition"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact →
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
          <Badge>Python Full-Stack Developer</Badge>
          <Badge color="orange">Django Backend Developer</Badge>
        </div>
      </div>

      {/* Right glass profile card */}
      <GlassCard className="p-6 md:p-7">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary to-secondary opacity-60 blur-xl" />
            
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm text-slate-300">
              B.E. Electronics & Communication Engineering – Saranathan College of Engineering
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-3 text-xs text-slate-200">
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Hero;
