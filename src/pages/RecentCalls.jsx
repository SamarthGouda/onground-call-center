import React from 'react';
import { PhoneIncoming, PhoneOutgoing, PhoneMissed, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RecentCalls = () => {
  const { calls, setReviewedCall } = useApp();

  const getCallIcon = (dir) => {
    switch (dir) {
      case 'in':
        return {
          icon: <PhoneIncoming size={16} color="#0f6e56" />,
          bg: '#e1f5ee'
        };
      case 'out':
        return {
          icon: <PhoneOutgoing size={16} color="#185fa5" />,
          bg: '#e8f0fe'
        };
      case 'missed':
      default:
        return {
          icon: <PhoneMissed size={16} color="#e24b4a" />,
          bg: '#fdecec'
        };
    }
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
            Recent calls
          </div>
          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
            Tap a call to review it against SOP
          </div>
        </div>

        {/* Calls List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {calls.map(call => {
            const iconConfig = getCallIcon(call.dir);

            return (
              <div
                key={call.id}
                onClick={() => setReviewedCall(call)}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  cursor: 'pointer',
                  transition: 'transform var(--transition-fast)'
                }}
                title={`Click to review call with ${call.name} against SOP`}
              >
                {/* Call Direction Icon */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: iconConfig.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {iconConfig.icon}
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#1a1a1a' }}>
                      {call.name}
                    </span>
                    {call.outcome && (
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: '#0f6e56',
                          backgroundColor: '#e1f5ee',
                          padding: '1px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        {call.outcome}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
                    {call.time} · {call.duration}
                  </div>
                </div>

                <ChevronRight size={18} color="#94a3b8" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
