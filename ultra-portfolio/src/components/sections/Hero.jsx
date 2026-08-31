import React from "react";
import Icon from "../common/Icon";

const Hero = () => (
  <div className="hero-layout">
    <div className="hero-copy">
      <div className="hero-kicker"><span className="pulse-dot" /> Available for new opportunities <span className="hero-kicker-index">/ 01</span></div>
      <h1>
        I build the <span className="accent-text">digital backbone</span> behind great products.
      </h1>
      <p className="hero-lede">I&apos;m Kabish — a backend-focused developer who turns complex workflows into reliable APIs, clean interfaces, and software that is ready for the real world.</p>
      <div className="hero-actions">
        <a href="#projects" className="button button-primary">See selected work <Icon name="arrowUpRight" size={17} /></a>
        <a href="https://drive.google.com/file/d/1pnjX6cxVcN-kqQiUxXKK--Fb9cZDIN3A/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="button button-ghost">View resume <Icon name="external" size={15} /></a>
      </div>
      <div className="hero-meta">
        <span><Icon name="mapPin" size={14} /> Chennai, India</span>
        <span className="meta-divider" />
        <span><span className="meta-dot" /> Open to backend &amp; full-stack roles</span>
      </div>
    </div>

    <div className="hero-console" aria-label="Developer profile snapshot">
      <div className="console-topbar">
        <div className="window-dots"><span /><span /><span /></div>
        <span className="console-path">~/kabish/profile.ts</span>
        <span className="console-status"><span /> online</span>
      </div>
      <div className="console-body">
        <div className="code-lines" aria-hidden="true">
          <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span>
        </div>
        <pre><code><span className="code-purple">const</span> <span className="code-green">developer</span> = {'{'}{`\n`}
  <span className="code-key">name</span>: <span className="code-orange">&quot;Kabish M. Elangovan&quot;</span>,{`\n`}
  <span className="code-key">role</span>: <span className="code-orange">&quot;Backend Developer&quot;</span>,{`\n`}
  <span className="code-key">focus</span>: [<span className="code-orange">&quot;APIs&quot;</span>, <span className="code-orange">&quot;systems&quot;</span>, <span className="code-orange">&quot;product&quot;</span>],{`\n`}
  <span className="code-key">stack</span>: {'{'}{`\n`}
    <span className="code-key">backend</span>: [<span className="code-orange">&quot;Python&quot;</span>, <span className="code-orange">&quot;Django&quot;</span>],{`\n`}
    <span className="code-key">frontend</span>: [<span className="code-orange">&quot;React&quot;</span>, <span className="code-orange">&quot;Tailwind&quot;</span>],{`\n`}
    <span className="code-key">data</span>: [<span className="code-orange">&quot;PostgreSQL&quot;</span>]{`\n`}
  {'}'},{`\n`}
  <span className="code-key">status</span>: <span className="code-green">&quot;shipping&quot;</span>{`\n`}
{'}'};</code></pre>
      </div>
      <div className="console-footer"><span><Icon name="terminal" size={14} /> build with intention</span><span>v1.0.0</span></div>
      <div className="console-float"><span className="float-icon"><Icon name="spark" size={16} /></span><span><strong>15+</strong><small>REST APIs shipped</small></span></div>
    </div>

    <div className="hero-proof">
      <div><strong>01<span>+</span></strong><small>Year building<br />for production</small></div>
      <div><strong>15<span>+</span></strong><small>RESTful APIs<br />designed &amp; shipped</small></div>
      <div><strong>8.30</strong><small>B.E. Computer<br />Science CGPA</small></div>
      <div className="hero-proof-note"><Icon name="arrowDown" size={16} /><span>Scroll to<br />explore</span></div>
    </div>
  </div>
);

export default Hero;
