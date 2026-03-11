"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Instagram, Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { siteConfig } from "@/lib/constants";

const serviceOptions = [
  "AI Agency",
  "Digital Marketing",
  "Software Tools",
  "Multiple Services",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8d8ca2da-d766-4f1b-8697-b648059506a4",
          subject: `New inquiry from ${data.name} — ${data.service}`,
          from_name: "Syntrix Contact Form",
          ...data,
        }),
      });
      const result = await res.json();
      if (result.success) setSubmitted(true);
    } catch {
      // silent
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-sm rounded-xl bg-white/[0.03] border border-border text-foreground placeholder:text-muted/50 transition-all duration-300";

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's build something together"
        description="Have a project in mind? Fill out the form or DM us on Instagram."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 animate-fade-up delay-1">
              {submitted ? (
                <div className="text-center py-20 rounded-2xl border border-border bg-card">
                  <div className="w-14 h-14 rounded-2xl bg-accent2/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-accent2" />
                  </div>
                  <h3 className="text-xl font-bold font-[var(--font-heading)] tracking-tight">Message sent</h3>
                  <p className="text-sm text-muted mt-2">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Name</label>
                      <input className={inputClass} placeholder="Your name" {...register("name")} />
                      {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Email</label>
                      <input className={inputClass} type="email" placeholder="you@company.com" {...register("email")} />
                      {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Company (optional)</label>
                    <input className={inputClass} placeholder="Your company" {...register("company")} />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Service</label>
                    <select className={inputClass} {...register("service")}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-400 mt-1.5">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Budget (optional)</label>
                    <input className={inputClass} placeholder="e.g., $5,000 - $20,000" {...register("budget")} />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted tracking-widest uppercase mb-2">Message</label>
                    <textarea
                      className={`${inputClass} min-h-[140px] resize-y`}
                      placeholder="Tell us about your project..."
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-accent text-background rounded-full hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5 animate-fade-up delay-2">
              <a
                href="mailto:syntrixagency01@gmail.com"
                className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card card-glow"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-[var(--font-heading)] tracking-tight">Email</p>
                  <p className="font-mono text-[11px] text-muted tracking-wide mt-0.5">syntrixagency01@gmail.com</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card card-glow"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center group-hover:border-accent3/30 transition-colors duration-300 flex-shrink-0">
                  <Instagram className="w-5 h-5 text-accent3" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-[var(--font-heading)] tracking-tight">Instagram</p>
                  <p className="font-mono text-[11px] text-muted tracking-wide mt-0.5">@syntrixagency</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <div className="p-6 rounded-2xl border border-border bg-card relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
                <div className="relative">
                  <p className="text-sm font-semibold font-[var(--font-heading)] tracking-tight mb-2">Quick response</p>
                  <p className="text-sm text-muted leading-relaxed">
                    DM us on Instagram or email us. We typically reply within a few hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
