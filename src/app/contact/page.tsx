"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Instagram, CheckCircle2 } from "lucide-react";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent
    }
  };

  const inputClass =
    "w-full px-3.5 py-2.5 text-sm rounded-lg bg-white/[0.03] border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 transition-colors";

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's build something together"
        description="Have a project in mind? Fill out the form or DM us on Instagram."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-16 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold font-[var(--font-heading)]">Message sent</h3>
                  <p className="text-sm text-muted mt-1">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted mb-1.5">Name</label>
                      <input className={inputClass} placeholder="Your name" {...register("name")} />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted mb-1.5">Email</label>
                      <input className={inputClass} type="email" placeholder="you@company.com" {...register("email")} />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted mb-1.5">Company (optional)</label>
                    <input className={inputClass} placeholder="Your company" {...register("company")} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted mb-1.5">Service</label>
                    <select className={inputClass} {...register("service")}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted mb-1.5">Budget (optional)</label>
                    <input className={inputClass} placeholder="e.g., $5,000 - $20,000" {...register("budget")} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted mb-1.5">Message</label>
                    <textarea
                      className={`${inputClass} min-h-[120px] resize-y`}
                      placeholder="Tell us about your project..."
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-accent3" />
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <p className="text-xs text-muted">@syntrixagency</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm font-medium mb-1">Quick response</p>
                <p className="text-xs text-muted leading-relaxed">
                  DM us on Instagram for the fastest response. We typically reply within a few hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
