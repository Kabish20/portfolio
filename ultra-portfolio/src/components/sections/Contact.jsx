import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import SectionWrapper from "../common/SectionWrapper";
import GlassCard from "../common/Glasscard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  emailjs.init("rDIDnZjeT8onyO__V");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await emailjs.send(
        'service_wpzto5g', // Your EmailJS service ID
        'template_vrpdrh8', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kabishme@gmail.com' // Replace with your email
        }
      );

      if (response.status === 200) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SectionWrapper
      id="contact"
      kicker="Contact"
      title="Let’s Bulid Something Awesome Together"
      subtitle= "Actively seeking full-time roles where I can contribute and grow. Let’s connect!"
    >
      {/* neon line + icons */}
      <div className="flex flex-col items-center mb-7">
        <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-4" />
        <div className="flex gap-4 text-xs text-slate-200">
         
        </div>
      </div>

      <GlassCard className="max-w-3xl mx-auto p-6 md:p-7">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/40 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/40 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-black/40 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              placeholder="Subject (optional)"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/40 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
              placeholder="Tell me about your project, role, or idea..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2.5 rounded-xl text-sm font-semibold
                       bg-gradient-to-r from-primary via-secondary to-accent
                       hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus && (
            <div className={`text-center text-sm mt-2 ${
              submitStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'
            }`}>
              {submitStatus}
            </div>
          )}
        </form>
      </GlassCard>
    </SectionWrapper>
  );
};

export default Contact;
