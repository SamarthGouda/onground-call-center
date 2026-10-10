import React, { useEffect } from 'react';
import { X, CheckCircle2, XCircle, Award, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SOP_CRITERIA } from '../../data/calls';

export const CallSopReviewModal = () => {
  const { reviewedCall, setReviewedCall } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && reviewedCall) {
        setReviewedCall(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reviewedCall, setReviewedCall]);

  if (!reviewedCall) return null;

  const scoreColor =
    reviewedCall.sopScore >= 80 ? '#0f6e56' : reviewedCall.sopScore >= 50 ? '#c8860a' : '#e24b4a';

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
        if (e.target === e.currentTarget) setReviewedCall(null);
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '88vh',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-modal)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.22s ease-out'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0
          }}
        >
          <div>
            <div style={{ fontSize: '16px', fontWeight: 800 }}>Call Review vs SOP</div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              {reviewedCall.name} · {reviewedCall.time} ({reviewedCall.duration})
            </div>
          </div>

          <button
            onClick={() => setReviewedCall(null)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Score Hero */}
        <div
          style={{
            padding: '16px 20px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>
              Overall Script Adherence
            </div>
            <div style={{ fontSize: '26px', fontWeight: 800, color: scoreColor }}>
              {reviewedCall.sopScore}%
            </div>
          </div>

          {reviewedCall.outcome && (
            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: '#0f6e56',
                backgroundColor: '#e1f5ee',
                padding: '4px 10px',
                borderRadius: '8px'
              }}
            >
              Outcome: {reviewedCall.outcome}
            </span>
          )}
        </div>

        {/* Criteria Checklist & Evidence */}
        <div style={{ padding: '16px 20px', overflowY: 'auto', flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#1e293b', marginBottom: '12px' }}>
            SOP Checkpoints & Speech Evidence
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {SOP_CRITERIA.map((criterion, idx) => {
              const passed = reviewedCall.sopChecks ? reviewedCall.sopChecks[idx] : false;
              const evidenceLine = reviewedCall.evidence ? reviewedCall.evidence[idx] : null;

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: passed ? '#f0fdf4' : '#fef2f2',
                    border: `1px solid ${passed ? '#bbf7d0' : '#fecaca'}`,
                    borderRadius: '10px',
                    padding: '10px 12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>
                      {criterion}
                    </span>
                    {passed ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontSize: '12px', fontWeight: 700 }}>
                        <CheckCircle2 size={15} /> Passed
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#dc2626', fontSize: '12px', fontWeight: 700 }}>
                        <XCircle size={15} /> Missed
                      </span>
                    )}
                  </div>

                  {evidenceLine && (
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#475569',
                        fontStyle: 'italic',
                        marginTop: '4px',
                        lineHeight: 1.35
                      }}
                    >
                      {evidenceLine}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
