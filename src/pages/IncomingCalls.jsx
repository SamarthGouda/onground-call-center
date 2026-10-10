import React from 'react';
import { PhoneMissed, PhoneCall, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const IncomingCalls = () => {
  const { calls, leads, handleCallback } = useApp();

  // Filter missed calls and map to their lead expected values
  const missedCalls = calls
    .filter(c => c.dir === 'missed')
    .map(c => {
      const matchedLead = leads.find(l => c.name && c.name.startsWith(l.name.split(' ')[0]));
      const value = matchedLead ? matchedLead.expectedValue : 0;
      return {
        ...c,
        lead: matchedLead,
        expectedValue: value
      };
    })
    .sort((a, b) => b.expectedValue - a.expectedValue);

  const totalValueAtStake = missedCalls.reduce((acc, curr) => acc + curr.expectedValue, 0);

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
            Missed calls
          </div>
          <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '2px' }}>
            Ranked by expected value — call the highest-value leads back first
          </div>
        </div>

        {/* Summary Metric Box */}
        {missedCalls.length > 0 && (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid var(--border-card)',
              marginBottom: '16px'
            }}
          >
            <div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1 }}>
                {missedCalls.length}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px' }}>
                Missed Today
              </div>
            </div>

            <div style={{ width: '1px', height: '32px', backgroundColor: '#e2e8f0' }} />

            <div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#0f6e56', lineHeight: 1 }}>
                ₹{totalValueAtStake.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginTop: '4px' }}>
                Expected Value at Stake
              </div>
            </div>
          </div>
        )}

        {/* Missed Calls List */}
        {missedCalls.length === 0 ? (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '40px 20px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '8px' }}>✅</div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a' }}>
              All missed calls returned!
            </div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
              Your queue is clear. Great job keeping response latency low.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {missedCalls.map(item => {
              const signalTag = item.lead
                ? item.lead.icp >= 80
                  ? 'Visited store / in CRM'
                  : item.lead.icp >= 55
                  ? 'Warm lead'
                  : 'Cold lead'
                : 'No prior record';

              const valueTag = item.lead
                ? `₹${item.expectedValue.toLocaleString('en-IN')} expected`
                : 'New contact';

              return (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Missed Call Icon */}
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#fdecec',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <PhoneMissed size={16} color="#e24b4a" />
                  </div>

                  {/* Caller Details */}
                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1a1a1a' }}>
                      {item.name || 'Unknown'}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '1px' }}>
                      Missed {item.time} · {signalTag}
                    </div>
                  </div>

                  {/* Value and Call back action */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: item.lead ? '#0f6e56' : '#64748b' }}>
                      {valueTag}
                    </div>

                    <button
                      onClick={() => handleCallback(item.id, item.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#0f6e56',
                        color: '#ffffff',
                        padding: '7px 14px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'opacity var(--transition-fast)'
                      }}
                      title={`Call back ${item.name}`}
                    >
                      <PhoneCall size={14} /> Call back
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
