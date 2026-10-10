import React from 'react';
import { useApp } from '../../context/AppContext';

export const EarningsCard = () => {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--border-card)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>
          <span>💰</span>
          <span>My earnings this month</span>
        </div>
        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
          ₹800 to ₹6,000 slab
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
        <span style={{ fontSize: '28px', fontWeight: 800, color: '#0f6e56' }}>
          ₹5,200
        </span>
        <span style={{ fontSize: '12px', color: '#64748b' }}>
          ₹1,700 from coached moves
        </span>
      </div>

      {/* Slab Progress Bar */}
      <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: '86.6%', height: '100%', backgroundColor: '#1d9e75', borderRadius: '4px' }} />
      </div>
    </div>
  );
};
