import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      kicker="About"
      title="Who I am"
      subtitle="A backend-leaning full-stack developer who loves building real products, not just demo apps."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 md:p-7">
          <h3 className="text-lg font-semibold mb-3 text-cyan-100">
            Engineer with a product mindset
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            I&apos;m <span className="font-semibold text-cyan-200">KABISH M E</span>, a developer
            with a strong foundation in Python, Django REST Framework, SQL, and modern frontend
            using React and Tailwind CSS. I enjoy turning problem statements into clean,
            maintainable code.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            Full Stack Developer with hands-on experience in building scalable web applications using Python, Django, REST APIs, and PostgreSQL, with a strong focus on backend development and system performance. Over the course of my projects and internship experience, I have designed and implemented 15+ RESTful APIs supporting core functionalities such as authentication, order processing, user management, and real-time notifications.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            I played a key role in developing an e-commerce cake delivery platform, where I built database models, API endpoints, and business logic that handled 1,000+ simulated transactions during testing. By optimizing database queries and restructuring API workflows, I improved response time by approximately 25–30%, ensuring smoother user experience and faster data processing.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            Additionally, I worked on a Voice-to-Text web application using Flask, HTML, CSS, and JavaScript, integrating speech recognition features that achieved over 90% accuracy in controlled testing environments. I have also contributed to frontend interfaces using Streamlit and basic React components to ensure seamless interaction between users and backend systems.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            My technical skill set includes Python, Django REST Framework, PostgreSQL, API integration, authentication systems, and full-stack application workflows. I have a strong understanding of software development lifecycle and enjoy solving real-world problems through clean and efficient code.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mt-3">
            I am currently seeking entry-level or junior developer opportunities where I can contribute to impactful projects, continue improving my technical expertise, and grow as a full stack engineer.
          </p>
        </GlassCard>

        <GlassCard className="p-6 md:p-7">
          <h3 className="text-lg font-semibold mb-3 text-cyan-100">
            How I like to work
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Start with clear data models and API design.</li>
            <li>• Focus on readability, validation, and error-handling first.</li>
            <li>• Use SQL and profiling to understand performance.</li>
            <li>• Add polish with subtle UI motion and modern layouts.</li>
            <li>• Iterate: ship something working, then refine.</li>
          </ul>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};

export default About;
