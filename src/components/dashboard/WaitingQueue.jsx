import React from 'react';
import { Headphones, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WaitingQueue = () => {
  const { waitingQueue, navigateTo, startPracticeCall } = useApp();

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748b' }}>
          Who's Waiting
        </span>
        <button
          onClick={() => navigateTo('calls', 'incoming')}
          style={{ fontSize: '12px', fontWeight: 700, color: '#0f6e56', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          Open planner →
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {waitingQueue.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => startPracticeCall(item.name)}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
              cursor: 'pointer',
              border: '1px solid var(--border-card)',
              transition: 'transform var(--transition-fast)'
            }}
            title={`Click to connect call with ${item.name}`}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569'
                }}
              >
                <Headphones size={15} />
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1a1a1a' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {item.issue}
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: idx === 0 ? '#b91c1c' : '#b45309',
                backgroundColor: idx === 0 ? '#fef2f2' : '#fffbeb',
                padding: '3px 8px',
                borderRadius: '8px'
              }}
            >
              {item.waitTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
