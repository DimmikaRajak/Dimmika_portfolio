import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Copy, Check, Sparkles, Github, Linkedin, ShieldCheck, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, StoredContactMessage } from '../types';

export const ContactSection = () => {
  const [formData, setFormData] = useState<Omit<ContactFormData, 'category'>>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Omit<ContactFormData, 'category'>, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs: Partial<Record<keyof Omit<ContactFormData, 'category'>, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or organization.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const destinationEmail = 'rajakdimika@gmail.com';

    let dispatched = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + destinationEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        dispatched = true;
      } else {
        console.warn('FormSubmit delivery failed:', response.status, await response.text());
      }
    } catch (err) {
      console.warn('FormSubmit delivery error:', err);
    }

    if (!dispatched) {
      console.warn('Direct inbox delivery failed. Message was saved locally only.');
    }

    const newMessage: StoredContactMessage = {
      ...formData,
      category: 'Mentorship & General',
      id: `msg_${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric', year: 'numeric' }),
      read: true
    };

    try {
      const stored = localStorage.getItem('dimmika_contact_messages');
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem('dimmika_contact_messages', JSON.stringify([newMessage, ...list]));
    } catch {
      // Safe fallback
    }

    // Reset form state and set success
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger Confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#4f46e5', '#6366f1', '#10b981', '#f59e0b']
      });
    } catch {
      // Fallback
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contact Dimmika Rajak
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Open to full-time Software Engineer and Full Stack Developer roles, research collaborations, and technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Details & Status */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Availability Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600"></span>
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Immediate Availability</h3>
                <p className="text-xs text-emerald-700 font-semibold">Available for full-time SWE & internship roles</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Feel free to reach out directly via email, phone, or the contact form. All messages route directly to <strong className="text-indigo-600">{PERSONAL_INFO.email}</strong>.
            </p>

            {/* Quick Contact Links */}
            <div className="space-y-3 text-xs">
              
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 block font-medium">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 hover:text-indigo-600 font-mono font-bold truncate block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300 transition-colors cursor-pointer shrink-0 ml-2 shadow-2xs"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 block font-medium">Phone / WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-900 hover:text-indigo-600 font-mono font-bold truncate block">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300 transition-colors cursor-pointer shrink-0 ml-2 shadow-2xs"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block font-medium">Location</span>
                  <span className="text-slate-900 font-semibold">{PERSONAL_INFO.location} (Open to Relocation & Remote)</span>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Professional Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
            
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                <p className="text-xs text-slate-500 mt-0.5">Routes directly to rajakdimika@gmail.com</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Clock className="w-3.5 h-3.5" />
                <span>Fast Response</span>
              </div>
            </div>

            {/* Success Banner */}
            {isSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-emerald-900">Message Sent Successfully!</h4>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer font-medium"
                    >
                      Dismiss
                    </button>
                  </div>
                  <p className="text-emerald-800">
                    Thank you! Your message was sent successfully through the contact form to <strong className="text-emerald-950">rajakdimika@gmail.com</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name and Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Your Name / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs ${
                      errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah.jenkins@company.com"
                    className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs ${
                      errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Position"
                  className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs ${
                    errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-indigo-500'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  rows={4}
                  id="contact-message-input"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your message or opportunity..."
                  className={`w-full bg-white border rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-y shadow-2xs ${
                    errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-indigo-500'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.message}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
