"use client";

import { useState } from "react";
import { Lock, Loader2 } from "lucide-react";

interface AdminLoginProps {
  onSuccess: (password: string) => void;
}

export default function AdminLogin({ onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();
      if (data.success) {
        onSuccess(password);
      } else {
        setError(data.error || "Incorrect password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl max-w-md w-full border border-[#E5E0D8]">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#F7F4EF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C2A572]">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif text-[#2B2B2B]">Admin Dashboard</h1>
          <p className="text-[#595959] text-sm mt-2">Enter your password to view leads</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#FCFBF8] border border-[#E5E0D8] rounded-lg focus:outline-none focus:border-[#C2A572] transition-colors"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 bg-[#2B2B2B] text-white rounded-lg hover:bg-black transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Unlock Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
