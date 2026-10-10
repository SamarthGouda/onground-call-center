import React from 'react';
import { useApp } from '../../context/AppContext';

export const KpiCards = () => {
  const { kpis } = useApp();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px',
        marginTop: '16px'
      }}
    >
      {/* 1. OG Score */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
          {kpis.ogScore.value}
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
          OG Score™
        </div>
        <div style={{ marginTop: '6px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#4fd8ac', background: 'rgba(29, 158, 117, 0.25)', padding: '2px 8px', borderRadius: '10px' }}>
            ▲ {kpis.ogScore.delta}
          </span>
        </div>
      </div>

      {/* 2. Avg Handle Time */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
          {kpis.avgHandleTime.value}
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
          Avg Handle Time
        </div>
        <div style={{ marginTop: '6px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#4fd8ac', background: 'rgba(29, 158, 117, 0.25)', padding: '2px 8px', borderRadius: '10px' }}>
            ▼ {kpis.avgHandleTime.delta}
          </span>
        </div>
      </div>

      {/* 3. CSAT Today */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
          {kpis.csatToday.value}
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
          CSAT Today
        </div>
        <div style={{ marginTop: '6px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#4fd8ac', background: 'rgba(29, 158, 117, 0.25)', padding: '2px 8px', borderRadius: '10px' }}>
            ▲ {kpis.csatToday.delta}
          </span>
        </div>
      </div>

      {/* 4. In Queue */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
          {kpis.inQueue.value}
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
          In Queue
        </div>
        <div style={{ marginTop: '6px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#60a5fa', background: 'rgba(59, 130, 246, 0.25)', padding: '2px 8px', borderRadius: '10px' }}>
            ● live
          </span>
        </div>
      </div>
    </div>
  );
};
