import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";
import Icon from "../common/Icon";

const contactConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "rDIDnZjeT8onyO__V",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_wpzto5g",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_vrpdrh8",
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await emailjs.send(contactConfig.serviceId, contactConfig.templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Portfolio enquiry",
        message: formData.message,
        to_email: "kabishme@gmail.com",
      }, contactConfig.publicKey);
      if (response.status !== 200) throw new Error("Message could not be sent");
      setSubmitStatus({ type: "success", message: "Message sent — I will get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({ type: "error", message: "Something went wrong. Please email me directly at kabishme@gmail.com." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" kicker="05 — contact" title="Have a system in mind?" subtitle="Actively looking for backend and full-stack opportunities. If there&apos;s a thoughtful problem to solve, let&apos;s talk.">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="large-copy">Let&apos;s make the complicated parts feel simple.</p>
          <p>Whether you&apos;re building a new product, untangling an existing backend, or looking for someone who can own the path from API to interface, I&apos;d love to hear what you&apos;re working on.</p>
          <a className="email-link" href="mailto:kabishme@gmail.com"><span className="email-icon"><Icon name="mail" size={18} /></span><span><small>Write to me directly</small><strong>kabishme@gmail.com</strong></span><Icon name="arrowUpRight" size={16} /></a>
          <div className="social-links">
            <a href="https://github.com/Kabish20" target="_blank" rel="noopener noreferrer"><Icon name="github" size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/kabish-fullstack" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
          </div>
        </div>
        <GlassCard className="contact-card">
          <div className="form-header"><span>Start a conversation</span><span className="form-secure"><Icon name="check" size={13} /> secure form</span></div>
          <form onSubmit={handleSubmit}>
            <div className="form-row"><label><span>Name</span><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" autoComplete="name" required /></label><label><span>Email</span><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" autoComplete="email" required /></label></div>
            <label><span>Subject <em>optional</em></span><input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What are you working on?" /></label>
            <label><span>Message</span><textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me a little about the project, role, or idea..." required /></label>
            <button type="submit" className="button button-primary form-submit" disabled={isSubmitting}>{isSubmitting ? "Sending message..." : "Send message"}<Icon name="arrowUpRight" size={16} /></button>
            {submitStatus.message && <p className={`form-status ${submitStatus.type}`}>{submitStatus.message}</p>}
          </form>
        </GlassCard>
      </div>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Kabish M. Elangovan</span><span>Designed &amp; built with care <span className="footer-heart">♥</span></span><a href="#hero">Back to top <Icon name="arrowUpRight" size={14} /></a></footer>
    </SectionWrapper>
  );
};

export default Contact;
