import React from 'react';
import { useApp } from '../../context/AppContext';

export const ProgressCard = () => {
  const { progress } = useApp();

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #134e40, #1d9e75)',
        borderRadius: '16px',
        padding: '16px',
        color: '#ffffff',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '12px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4fd8ac' }} />
        <span>My Progress · Today</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {/* Leads Created */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.22)',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.1 }}>
            {progress.leadsCreated.value}
          </div>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fde047', marginTop: '2px' }}>
            ▲ {progress.leadsCreated.delta}
          </div>
          <div style={{ fontSize: '12px', color: '#e2e8f0', marginTop: '4px', fontWeight: 600 }}>
            Leads Created
          </div>
        </div>

        {/* Leads Called */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.22)',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.1 }}>
            {progress.leadsCalled.value}
          </div>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#fde047', marginTop: '2px' }}>
            ▲ {progress.leadsCalled.delta}
          </div>
          <div style={{ fontSize: '12px', color: '#e2e8f0', marginTop: '4px', fontWeight: 600 }}>
            Leads Called
          </div>
        </div>
      </div>
    </div>
  );
};
