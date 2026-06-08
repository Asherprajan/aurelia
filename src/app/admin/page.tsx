"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check if user was previously authenticated in this session
  useEffect(() => {
    const authStatus = sessionStorage.getItem("aurelia_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLoginSuccess = () => {
    sessionStorage.setItem("aurelia_admin_auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("aurelia_admin_auth");
    setIsAuthenticated(false);
  };

  if (isChecking) {
    return <div className="min-h-screen bg-[#F7F4EF]" />; // Loading state
  }

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
