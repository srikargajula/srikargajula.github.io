import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Build mailto URI to launch native email client with verified parameters
      const recipient = portfolioData.personalInfo.email;
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi Srikar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );

      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Trigger native client dispatch
      window.location.href = mailtoLink;

      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
      });

      setStatusMessage({
        type: 'success',
        text: 'Your email client has been opened with your pre-filled message ready to send directly to srikargajula18@gmail.com!',
      });

      // Clear fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'An error occurred preparing the message. You can also directly reach out at srikargajula18@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Interested in discussing AI engineering roles, technical collaboration, or scalable machine learning architectures? Reach out directly.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Communication Channels
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Feel free to reach out via email, phone, or connect with me on LinkedIn and GitHub. I reply promptly to recruiters and engineering peers.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors truncate block"
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with 1-Click Copy & Call */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-400 transition-colors truncate block"
                    >
                      {portfolioData.personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(portfolioData.personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {portfolioData.personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-indigo-600/20 border border-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-indigo-600/20 border border-white/[0.08] hover:border-indigo-500/40 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">
                  Send a Message
                </h3>
              </div>

              {statusMessage && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs flex items-start gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/15 border border-red-500/30 text-red-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="AI Engineer Inquiry / Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Hello Srikar, I came across your portfolio and wanted to discuss an AI engineering opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-indigo-500 focus:bg-white/[0.06]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs tracking-wide shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
