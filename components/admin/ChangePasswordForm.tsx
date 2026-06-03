"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function ChangePasswordForm() {
  const [current,  setCurrent]  = useState("");
  const [next,     setNext]     = useState("");
  const [confirm,  setConfirm]  = useState("");
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");
  const [success,  setSuccess]  = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (next.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }
    if (next !== confirm) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ currentPassword: current, newPassword: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed");
      setSuccess(true);
      setCurrent(""); setNext(""); setConfirm("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}
      {success && (
        <div className="px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Password changed successfully.
        </div>
      )}

      {[
        { label: "Current password", value: current, set: setCurrent },
        { label: "New password",     value: next,    set: setNext    },
        { label: "Confirm new password", value: confirm, set: setConfirm },
      ].map((field) => (
        <div key={field.label}>
          <label className="block text-sm font-medium text-slate-400 mb-2">{field.label}</label>
          <input
            type="password"
            value={field.value}
            onChange={(e) => field.set(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-600"
            placeholder="••••••••"
          />
        </div>
      ))}

      <Button type="submit" variant="primary" size="md" disabled={loading}>
        {loading ? "Saving..." : "Update password"}
      </Button>
    </form>
  );
}
