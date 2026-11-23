import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim() || formData.message.length < 8) {
      errs.message = 'Please write at least 8 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#ec4899', '#3b82f6'],
    });

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Shweta,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-universe">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>📫 Let's Build Something Together</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="gradient-text-hero">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            I am actively exploring entry-level Software Developer and Data Analyst opportunities. I'd love to discuss how I can add value to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-panel rounded-3xl p-8 border border-purple-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-pink-600/15 to-purple-600/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-black text-white mb-2">Connect Directly</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Have an open role, project question, or wish to review my resume? Reach out anytime!
                </p>
              </div>

              {/* Direct Details Stack */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/25 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email Address</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-purple-300 truncate block transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-purple-500/20 hover:bg-purple-600 text-purple-200 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/25 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-300 group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-pink-300 truncate block transition-colors">
                        +91 9209153212
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919209153212"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-bold transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/25 flex items-center gap-3.5 group">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Current Location</p>
                    <p className="text-sm font-semibold text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn ↗</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl glass-panel text-white hover:border-purple-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <GithubIcon size={15} />
                  <span>GitHub ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-purple-500/30 shadow-2xl relative">
              <h3 className="text-2xl font-black text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8">
                Drop your details and message below to initiate an email directly to Shweta.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <Sparkles size={22} className="shrink-0 text-emerald-400" />
                  <div>
                    <p className="font-bold">Opening your email application...</p>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Your message has been pre-formatted and addressed to dhanawadeshweta6@gmail.com.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiters / Team Lead"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border ${
                        errors.name ? 'border-red-500' : 'border-purple-500/30 focus:border-purple-400'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/25 transition-all`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hiring@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border ${
                        errors.email ? 'border-red-500' : 'border-purple-500/30 focus:border-purple-400'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/25 transition-all`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Interview Invitation"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border ${
                      errors.subject ? 'border-red-500' : 'border-purple-500/30 focus:border-purple-400'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/25 transition-all`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share role details, questions, or invite to chat..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border ${
                      errors.message ? 'border-red-500' : 'border-purple-500/30 focus:border-purple-400'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/25 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-bold text-sm tracking-wider uppercase btn-glow-primary flex items-center justify-center gap-2 group transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
