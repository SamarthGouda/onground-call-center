import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, PhoneCall, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CallsToMake = () => {
  const { leads, startPracticeCall, openLeadsModal } = useApp();
  const [expandedLeadId, setExpandedLeadId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 2; // Matches mock pagination

  // Sort leads by attractiveness score descending
  const sortedLeads = [...leads].sort((a, b) => b.attractivenessScore - a.attractivenessScore);
  const totalPages = Math.ceil(sortedLeads.length / perPage);
  const visibleLeads = sortedLeads.slice(currentPage * perPage, (currentPage + 1) * perPage);

  const toggleExpand = (id) => {
    setExpandedLeadId(prev => (prev === id ? null : id));
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#0f6e56';
    if (score >= 55) return '#c8860a';
    return '#e24b4a';
  };

  return (
    <div style={{ paddingBottom: '32px' }}>
      {/* Planner Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e, #2d2d5f)',
          padding: '24px 28px 20px',
          color: '#ffffff',
          borderRadius: '0 0 20px 20px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>
              Today's calling plan
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800 }}>
              Planner
            </div>
          </div>

          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.12)',
              padding: '6px 14px',
              borderRadius: '10px'
            }}
          >
            Sat, 10 Oct
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div style={{ padding: '24px 28px 0' }}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>
            Planned outgoing calls
          </div>
          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
            Ranked by lead attractiveness score — tap a lead for the full picture
          </div>
        </div>

        {/* Lead Rows List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {visibleLeads.map(lead => {
            const isExpanded = expandedLeadId === lead.id;
            const scoreColor = getScoreColor(lead.attractivenessScore);

            return (
              <div
                key={lead.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-card)',
                  overflow: 'hidden',
                  transition: 'box-shadow var(--transition-fast)'
                }}
              >
                {/* Row Header */}
                <div
                  onClick={() => toggleExpand(lead.id)}
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: lead.avatarBg,
                      color: lead.avatarColor,
                      fontSize: '15px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {lead.initials}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1a1a1a' }}>
                      {lead.name}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {lead.interest}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: scoreColor }}>
                      {lead.attractivenessScore}
                    </div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                      score
                    </div>
                  </div>

                  <div style={{ color: '#94a3b8', marginLeft: '4px' }}>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div
                    style={{
                      padding: '14px 18px 18px',
                      borderTop: '1px solid #f0f0f4',
                      backgroundColor: '#fafafc'
                    }}
                  >
                    <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                      Story so far
                    </div>
                    <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, marginBottom: '14px' }}>
                      {lead.journey.map(j => j.text).join(' → ')}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ background: '#ffffff', borderRadius: '10px', padding: '10px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                          Preferred Product
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '2px' }}>
                          {lead.product}
                        </div>
                      </div>

                      <div style={{ background: '#ffffff', borderRadius: '10px', padding: '10px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                          Cross-sell Opportunity
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f6e56', marginTop: '2px' }}>
                          {lead.crossSell}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <button
                        onClick={() => startPracticeCall(lead.name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#0f6e56',
                          color: '#ffffff',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        <PhoneCall size={14} /> Call {lead.name}
                      </button>

                      <button
                        onClick={() => openLeadsModal(leads.findIndex(l => l.id === lead.id))}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#ffffff',
                          color: '#6b2fa0',
                          border: '1px solid #d8b4fe',
                          padding: '8px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        <Sparkles size={14} /> View Buying Signals
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pager */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.4 : 1,
              boxShadow: 'var(--shadow-sm)'
            }}
            title="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages - 1 ? 0.4 : 1,
              boxShadow: 'var(--shadow-sm)'
            }}
            title="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
