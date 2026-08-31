import React, { useState } from "react";
import Icon from "../common/Icon";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#hero" onClick={closeMenu} aria-label="Kabish M. Elangovan home">
          <span className="brand-mark">K<span>.</span></span>
          <span className="brand-copy"><strong>KABISH</strong><small>BACKEND ENGINEER</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="nav-cta" href="#contact">Let&apos;s talk <Icon name="arrowUpRight" size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
          <Icon name={isOpen ? "close" : "menu"} size={20} />
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <Icon name="arrowUpRight" size={15} /></a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
