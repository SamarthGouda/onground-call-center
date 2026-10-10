import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, User, Target, Clock, ShieldCheck, CreditCard, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LeadsModal = () => {
  const {
    isLeadsModalOpen,
    selectedLeadIndex,
    closeLeadsModal,
    nextLead,
    prevLead,
    leads,
    openLeadsModal
  } = useApp();

  // Accordion states
  const [openSection, setOpenSection] = useState('signals'); // 'icp', 'journey', 'signals'

  // Keyboard accessibility: Escape to close, ArrowLeft/Right to paginate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLeadsModalOpen) return;
      if (e.key === 'Escape') {
        closeLeadsModal();
      } else if (e.key === 'ArrowRight') {
        nextLead();
      } else if (e.key === 'ArrowLeft') {
        prevLead();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLeadsModalOpen, nextLead, prevLead, closeLeadsModal]);

  if (!isLeadsModalOpen) return null;

  const currentLead = leads[selectedLeadIndex] || leads[0];

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        zIndex: 4000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(2px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLeadsModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="leads-modal-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.22s ease-out'
        }}
      >
        {/* Purple Modal Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6b2fa0, #4c1d95)',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <User size={18} />
            </div>
            <div>
              <div id="leads-modal-title" style={{ fontSize: '16px', fontWeight: 800 }}>Leads</div>
              <div style={{ fontSize: '12px', color: '#e9d5ff' }}>
                Lead {selectedLeadIndex + 1} of {leads.length} · SLA to close
              </div>
            </div>
          </div>

          <button
            onClick={closeLeadsModal}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
            title="Close (Esc)"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Pager Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderBottom: '1px solid #f0f0f4',
            backgroundColor: '#fafafa',
            flexShrink: 0
          }}
        >
          <button
            onClick={prevLead}
            disabled={selectedLeadIndex === 0}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              border: '1px solid #e5e5ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: selectedLeadIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: selectedLeadIndex === 0 ? 0.35 : 1,
              backgroundColor: '#ffffff'
            }}
            title="Previous lead (Left arrow)"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {leads.map((_, idx) => (
              <span
                key={idx}
                onClick={() => openLeadsModal(idx)}
                style={{
                  display: 'inline-block',
                  width: idx === selectedLeadIndex ? '18px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: idx === selectedLeadIndex ? '#6b2fa0' : '#e5e5ea',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextLead}
            disabled={selectedLeadIndex === leads.length - 1}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              border: '1px solid #e5e5ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: selectedLeadIndex === leads.length - 1 ? 'not-allowed' : 'pointer',
              opacity: selectedLeadIndex === leads.length - 1 ? 0.35 : 1,
              backgroundColor: '#ffffff'
            }}
            title="Next lead (Right arrow)"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ padding: '16px 20px', overflowY: 'auto', flex: 1 }}>
          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: currentLead.statusColor || '#1d9e75' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: currentLead.statusColor || '#1d9e75', letterSpacing: '0.4px' }}>
              {currentLead.statusLabel || 'OPEN'}
            </span>
          </div>

          {/* Customer Card Info */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: currentLead.avatarBg,
                  color: currentLead.avatarColor,
                  fontWeight: 800,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {currentLead.initials}
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a' }}>
                  {currentLead.name}
                </div>
                <div style={{ fontSize: '13px', color: '#4a4a52' }}>
                  {currentLead.interest}
                </div>
              </div>
            </div>

            {currentLead.badge && (
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '12px',
                  backgroundColor: currentLead.badgeBg,
                  color: currentLead.badgeColor,
                  fontSize: '12px',
                  fontWeight: 700
                }}
              >
                {currentLead.badge}
              </span>
            )}
          </div>

          {/* Action Prompt */}
          <div
            style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #fde68a',
              borderRadius: '10px',
              padding: '10px 14px',
              marginBottom: '14px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>📜</span>
            <span>Quote to be given to customer</span>
          </div>

          {/* ICP Progress Bar & Intent Score */}
          <div style={{ backgroundColor: '#f8f8fa', borderRadius: '12px', padding: '14px', marginBottom: '14px', border: '1px solid #f0f0f4' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>
                <Target size={15} color="#1d9e75" />
                <span>ICP</span>
              </div>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#1d9e75' }}>{currentLead.icp}%</span>
            </div>
            {/* Progress Track */}
            <div style={{ width: '100%', height: '7px', backgroundColor: '#e5e5ea', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
              <div style={{ width: `${currentLead.icp}%`, height: '100%', backgroundColor: '#1d9e75', borderRadius: '4px' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '6px', borderTop: '1px solid #eaeaea' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>
                <Target size={15} color="#7c3aed" />
                <span>Lead Intent Score</span>
              </div>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>{currentLead.intentScore}</span>
            </div>
          </div>

          {/* Accordion 1: ICP FIT BREAKDOWN */}
          <div style={{ border: '1px solid #e5e5ea', borderRadius: '10px', marginBottom: '8px', overflow: 'hidden' }}>
            <button
              onClick={() => toggleSection('icp')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                backgroundColor: openSection === 'icp' ? '#fafafa' : '#ffffff',
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#3a3a42',
                letterSpacing: '0.4px',
                textTransform: 'uppercase'
              }}
            >
              <span>ICP Fit Breakdown</span>
              {openSection === 'icp' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSection === 'icp' && (
              <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f4', backgroundColor: '#ffffff' }}>
                {currentLead.subscores.map((s, idx) => (
                  <div key={idx} style={{ marginBottom: idx < currentLead.subscores.length - 1 ? '10px' : '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: 600, marginBottom: '4px' }}>
                      <span style={{ color: '#4a4a52' }}>{s.label}</span>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.pct}%</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', backgroundColor: '#f0f0f4', borderRadius: '3px' }}>
                      <div style={{ width: `${s.pct}%`, height: '100%', backgroundColor: s.color, borderRadius: '3px' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accordion 2: HOW WE GOT HERE */}
          <div style={{ border: '1px solid #e5e5ea', borderRadius: '10px', marginBottom: '8px', overflow: 'hidden' }}>
            <button
              onClick={() => toggleSection('journey')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                backgroundColor: openSection === 'journey' ? '#fafafa' : '#ffffff',
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#3a3a42',
                letterSpacing: '0.4px',
                textTransform: 'uppercase'
              }}
            >
              <span>How We Got Here</span>
              {openSection === 'journey' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSection === 'journey' && (
              <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f4', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentLead.journey.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '16px' }}>{step.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: step.color }}>{step.channel}</span>
                          <span style={{ fontSize: '11px', color: '#8e8e93' }}>· {step.date}</span>
                        </div>
                        <div style={{ fontSize: '12.5px', color: '#1a1a1a', marginTop: '2px' }}>{step.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: WHERE WE PICKED UP SIGNALS */}
          <div style={{ border: '1px solid #e5e5ea', borderRadius: '10px', marginBottom: '14px', overflow: 'hidden' }}>
            <button
              onClick={() => toggleSection('signals')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                backgroundColor: openSection === 'signals' ? '#fafafa' : '#ffffff',
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#854f0b',
                letterSpacing: '0.4px',
                textTransform: 'uppercase'
              }}
            >
              <span>📋 Where We Picked Up Signals</span>
              {openSection === 'signals' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSection === 'signals' && (
              <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f4', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentLead.problemBuckets.map((bucket, idx) => (
                  <div key={idx} style={{ background: '#fcfcfc', border: '1px solid #f0f0f4', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#1a1a1a', marginBottom: '4px' }}>
                      ₹ {bucket.cat}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#4a4a52', fontStyle: 'italic', lineHeight: 1.4 }}>
                      "{bucket.text}"
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '12px 20px',
            backgroundColor: '#fffaf0',
            borderTop: '1px solid #fed7aa',
            fontSize: '12px',
            color: '#9a3412',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#e24b4a' }} />
            <span>CUMULATIVE MISSED: 2</span>
          </div>
          <span style={{ color: '#b45309' }}>· expired without close, visible to manager</span>
        </div>
      </div>
    </div>
  );
};
