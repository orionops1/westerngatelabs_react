"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, AlertCircle } from "lucide-react";
import Button from "./Button";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "ai",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call to your email service
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "ai",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-900/20 border border-green-500/50 rounded-lg text-green-400">
          Thank you! We'll get back to you soon.
        </div>
      )}

      {errors.message && !submitted && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 flex gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {errors.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-navy-700 border rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500 ${
              errors.name ? "border-red-500" : "border-navy-600"
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 flex gap-1">
              <span>⚠</span> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-navy-700 border rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500 ${
              errors.email ? "border-red-500" : "border-navy-600"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 flex gap-1">
              <span>⚠</span> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg focus:outline-none focus:border-electric-blue text-white"
        >
          <option value="ai">AI Solutions</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="web">Web Development</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 bg-navy-700 border rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500 resize-none ${
            errors.message ? "border-red-500" : "border-navy-600"
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1 flex gap-1">
            <span>⚠</span> {errors.message}
          </p>
        )}
      </div>

      <Button
        variant="primary"
        size="lg"
        disabled={loading}
        type="submit"
        className="w-full flex gap-2 justify-center"
      >
        <Send className="w-5 h-5" />
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
