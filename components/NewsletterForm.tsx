"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Button from "./Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Mock subscription - in production, call your email service API
      // Example: await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email.includes("@")) {
        setStatus("error");
        setMessage("Please enter a valid email address");
        return;
      }

      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <div className="flex-1 relative">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg focus:outline-none focus:border-electric-blue text-white placeholder-gray-500 disabled:opacity-50"
          required
        />
        {status === "success" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-green-400 text-sm">✓</span>
          </div>
        )}
      </div>
      <Button
        variant="primary"
        disabled={status === "loading"}
        type="submit"
        className="whitespace-nowrap"
      >
        {status === "loading" ? (
          "Subscribing..."
        ) : status === "success" ? (
          <>
            <Mail className="w-4 h-4 mr-2" />
            Subscribed
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
      {message && (
        <div
          className={`text-sm mt-2 ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
