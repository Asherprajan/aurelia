"use client";

import { useEffect, useState } from "react";
import { LogOut, Users, MapPin, Calendar, Smartphone, RefreshCw, Mail, MessageSquare } from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Lead {
  id: string;
  createdAt: string;
  status: string;
  location: string;
  guestCount: string;
  venueType: string;
  weddingStyle: string;
  functionsCount: string;
  services: string[];
  lead: {
    name: string;
    whatsapp: string;
    email: string;
    date: string;
  };
}

interface Consultation {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  message: string;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"calculator" | "consultations">("calculator");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      if (activeTab === "calculator") {
        const res = await fetch("/api/leads");
        const data = await res.json();
        if (data.success) {
          setLeads(data.leads);
        } else {
          setError(data.error || "Failed to fetch leads");
        }
      } else {
        const res = await fetch("/api/consultations");
        const data = await res.json();
        if (data.success) {
          setConsultations(data.consultations);
        } else {
          setError(data.error || "Failed to fetch consultations");
        }
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const formatDate = (isoString: string) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', hour12: true
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-[#2B2B2B]">Admin Dashboard</h1>
            <p className="text-[#595959] mt-1 text-sm">
              {activeTab === "calculator" ? `You have ${leads.length} calculator inquiries.` : `You have ${consultations.length} consultation requests.`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchData}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E0D8] text-[#2B2B2B] rounded-lg hover:bg-[#f0ede6] transition-colors text-sm"
            >
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-[#2B2B2B] text-white rounded-lg hover:bg-black transition-colors text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-[#E5E0D8]">
          <button
            onClick={() => setActiveTab("calculator")}
            className={`pb-3 px-4 font-poppins text-sm uppercase tracking-wider font-semibold transition-colors ${
              activeTab === "calculator" 
                ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" 
                : "text-[#8c8c8c] hover:text-[#2B2B2B]"
            }`}
          >
            Calculator Leads
          </button>
          <button
            onClick={() => setActiveTab("consultations")}
            className={`pb-3 px-4 font-poppins text-sm uppercase tracking-wider font-semibold transition-colors ${
              activeTab === "consultations" 
                ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" 
                : "text-[#8c8c8c] hover:text-[#2B2B2B]"
            }`}
          >
            Consultation Requests
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E0D8] overflow-hidden">
          <div className="overflow-x-auto">
            {activeTab === "calculator" ? (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FCFBF8] border-b border-[#E5E0D8] text-[#595959] text-xs uppercase tracking-wider">
                    <th className="p-4 font-medium">Date Received</th>
                    <th className="p-4 font-medium">Client Info</th>
                    <th className="p-4 font-medium">Wedding Style & Venue</th>
                    <th className="p-4 font-medium">Guests / Functions</th>
                    <th className="p-4 font-medium">Services</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[#8c8c8c]">Loading leads...</td>
                    </tr>
                  ) : leads.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[#8c8c8c]">No leads found yet.</td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-[#FCFBF8] transition-colors">
                        <td className="p-4 text-sm text-[#595959] whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                        <td className="p-4">
                          <div className="font-medium text-[#2B2B2B] mb-1">{lead.lead?.name || "Unknown"}</div>
                          <div className="flex flex-col gap-1 text-xs text-[#8c8c8c]">
                            <div className="flex items-center gap-1">
                              <Smartphone size={12} className="text-[#C2A572]" />
                              <a href={`https://wa.me/${lead.lead?.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-[#C2A572] transition">
                                {lead.lead?.whatsapp || "No WhatsApp"}
                              </a>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={12} className="text-[#C2A572]" />
                              <span>{lead.lead?.date || "No Date"}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-[#2B2B2B] font-medium capitalize mb-1">{lead.weddingStyle}</div>
                          <div className="flex items-center gap-1 text-xs text-[#8c8c8c] capitalize">
                            <MapPin size={12} />
                            {lead.location} • {lead.venueType}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-[#595959] mb-1">
                            <Users size={14} className="inline mr-1 text-[#C2A572]"/>
                            {lead.guestCount}
                          </div>
                          <div className="text-xs text-[#8c8c8c] bg-[#F7F4EF] px-2 py-1 rounded inline-block">
                            {lead.functionsCount}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1 max-w-[250px]">
                            {lead.services?.length ? (
                              lead.services.map((svc, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider bg-[#2B2B2B] text-white px-2 py-1 rounded-sm">
                                  {svc}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-[#8c8c8c]">None specified</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FCFBF8] border-b border-[#E5E0D8] text-[#595959] text-xs uppercase tracking-wider">
                    <th className="p-4 font-medium w-[15%]">Date Received</th>
                    <th className="p-4 font-medium w-[25%]">Client Info</th>
                    <th className="p-4 font-medium w-[15%]">Event Date</th>
                    <th className="p-4 font-medium w-[45%]">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  {isLoading ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-[#8c8c8c]">Loading consultations...</td>
                    </tr>
                  ) : consultations.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-[#8c8c8c]">No consultation requests yet.</td>
                    </tr>
                  ) : (
                    consultations.map((consultation) => (
                      <tr key={consultation.id} className="hover:bg-[#FCFBF8] transition-colors">
                        <td className="p-4 text-sm text-[#595959] whitespace-nowrap align-top">{formatDate(consultation.createdAt)}</td>
                        <td className="p-4 align-top">
                          <div className="font-medium text-[#2B2B2B] mb-1">{consultation.name}</div>
                          <div className="flex flex-col gap-1 text-xs text-[#8c8c8c]">
                            <div className="flex items-center gap-1">
                              <Smartphone size={12} className="text-[#C2A572]" />
                              <a href={`https://wa.me/${consultation.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-[#C2A572] transition">
                                {consultation.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-1">
                              <Mail size={12} className="text-[#C2A572]" />
                              <a href={`mailto:${consultation.email}`} className="hover:text-[#C2A572] transition">
                                {consultation.email}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-top">
                          {consultation.eventDate ? (
                            <div className="flex items-center gap-1 text-sm text-[#2B2B2B]">
                              <Calendar size={14} className="text-[#C2A572]" />
                              {consultation.eventDate}
                            </div>
                          ) : (
                            <span className="text-sm text-[#8c8c8c]">Not specified</span>
                          )}
                        </td>
                        <td className="p-4 align-top">
                          <div className="text-sm text-[#595959] bg-[#F7F4EF] p-3 rounded-md italic">
                            "{consultation.message}"
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
