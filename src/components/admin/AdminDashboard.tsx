"use client";

import { useEffect, useState } from "react";
import { LogOut, Users, MapPin, Calendar, Smartphone, RefreshCw } from "lucide-react";

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

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      
      if (data.success) {
        setLeads(data.leads);
      } else {
        setError(data.error || "Failed to fetch leads");
      }
    } catch (err) {
      setError("An error occurred while fetching leads.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

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
            <h1 className="text-3xl font-serif text-[#2B2B2B]">Leads Dashboard</h1>
            <p className="text-[#595959] mt-1 text-sm">You have {leads.length} total inquiries.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchLeads}
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

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E5E0D8] overflow-hidden">
          <div className="overflow-x-auto">
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
                    <td colSpan={5} className="p-8 text-center text-[#8c8c8c]">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-[#8c8c8c]">
                      No leads found yet.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#FCFBF8] transition-colors">
                      {/* Date */}
                      <td className="p-4 text-sm text-[#595959] whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                      </td>
                      
                      {/* Client Info */}
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

                      {/* Style & Venue */}
                      <td className="p-4">
                        <div className="text-sm text-[#2B2B2B] font-medium capitalize mb-1">{lead.weddingStyle}</div>
                        <div className="flex items-center gap-1 text-xs text-[#8c8c8c] capitalize">
                          <MapPin size={12} />
                          {lead.location} • {lead.venueType}
                        </div>
                      </td>

                      {/* Guests / Functions */}
                      <td className="p-4">
                        <div className="text-sm text-[#595959] mb-1">
                          <Users size={14} className="inline mr-1 text-[#C2A572]"/>
                          {lead.guestCount}
                        </div>
                        <div className="text-xs text-[#8c8c8c] bg-[#F7F4EF] px-2 py-1 rounded inline-block">
                          {lead.functionsCount}
                        </div>
                      </td>

                      {/* Services */}
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
          </div>
        </div>

      </div>
    </div>
  );
}
