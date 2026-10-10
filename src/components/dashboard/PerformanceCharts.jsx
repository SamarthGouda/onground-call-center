import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { CALLS_HANDLED_7DAYS, CSAT_TREND_7DAYS } from '../../data/tasks';

export const PerformanceCharts = () => {
  return (
    <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Calls Handled · Last 7 Days */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '18px 20px',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--border-card)'
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748b', marginBottom: '16px' }}>
          Calls Handled · Last 7 Days
        </div>

        <div style={{ width: '100%', height: '140px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CALLS_HANDLED_7DAYS} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(val) => [`${val} calls`, 'Calls Handled']}
                contentStyle={{ borderRadius: '8px', fontSize: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="calls" radius={[6, 6, 0, 0]}>
                {CALLS_HANDLED_7DAYS.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isToday ? '#0f6e56' : '#5dcaa5'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. CSAT Trend · Last 7 Days */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '18px 20px',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--border-card)'
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#64748b', marginBottom: '16px' }}>
          CSAT Trend · Last 7 Days
        </div>

        <div style={{ width: '100%', height: '140px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CSAT_TREND_7DAYS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="csatGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#185fa5" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#185fa5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis domain={[80, 100]} stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(val) => [`${val}%`, 'CSAT Score']}
                contentStyle={{ borderRadius: '8px', fontSize: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="csat" stroke="#185fa5" strokeWidth={2.5} fillOpacity={1} fill="url(#csatGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
