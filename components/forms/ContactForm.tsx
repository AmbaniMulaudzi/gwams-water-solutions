// components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

const services = [
  "Borehole Pump Installation",
  "Pressure Pump Installation",
  "Water Tank Installation",
  "Borehole Pump Repair",
  "Other / General Inquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent! We'll contact you shortly.");
        setForm({ name: "", email: "", phone: "", service: "", location: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast.error("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field]
        ? "border-red-400 bg-red-50 dark:bg-red-950/20"
        : "border-[#dce6f5] dark:border-[#1e3558] bg-white dark:bg-[#0d1e3a]"
    } text-[#0d1b3e] dark:text-white placeholder:text-[#8ba3c7] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-body text-sm`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 066 364 4104"
            className={inputClass("phone")}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
            Your Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Nzhelele, Limpopo"
            className={inputClass("location")}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass("service")}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0d1b3e] dark:text-white mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your water needs or issue..."
          className={`${inputClass("message")} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0110 10" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-[#8ba3c7] text-center">
        Prefer WhatsApp?{" "}
        <a
          href="https://wa.me/27663644104"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-400 font-semibold hover:underline"
        >
          Message us directly →
        </a>
      </p>
    </form>
  );
}
