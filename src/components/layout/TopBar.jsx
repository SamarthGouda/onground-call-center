import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, CheckCircle, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TopBar = () => {
  const { kpis, showToast } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="app-topbar">
      <div className="topbar-brand">
        <div className="topbar-logo-badge">OG</div>
        <span className="topbar-title">On-Ground.ai</span>
      </div>

      <div className="topbar-actions">
        {/* Notification Bell */}
        <button
          className="topbar-notif-btn"
          title="Notifications"
          onClick={() => showToast('Shift briefing: 1 missed callback pending at 4:30pm', 'info')}
        >
          <Bell size={18} />
          <span className="topbar-notif-dot" />
        </button>

        {/* Global OG Score Pill */}
        <div
          className="topbar-score-pill"
          title="OG Score™ — Overall selling performance: 76 · Rank #3"
          onClick={() => showToast('OG Score™ 76/100 · 72nd percentile across staff', 'info')}
        >
          <div className="topbar-score-ring">
            {kpis.ogScore.value}
          </div>
          <span className="topbar-rank-label">⭐{kpis.ogScore.rank}</span>
        </div>

        {/* User Profile Badge */}
        <div style={{ position: 'relative' }}>
          <div
            className="topbar-user-badge"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            title="Arvind Rajan · The Sleep Company"
          >
            <span className="topbar-user-avatar">🦸‍♂️</span>
            <span className="topbar-user-initials">AR</span>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '46px',
                width: '240px',
                background: '#ffffff',
                borderRadius: '14px',
                boxShadow: 'var(--shadow-lg)',
                padding: '12px',
                zIndex: 600,
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f0f0f4' }}>
                <span style={{ fontSize: '24px' }}>🦸‍♂️</span>
                <div>
                  <div style={{ fontWeight: 800, color: '#1a1a1a', fontSize: '14px' }}>Arvind Rajan</div>
                  <div style={{ fontSize: '11.5px', color: '#8e8e93' }}>Koramangala · The Sleep Company</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '8px' }}>
                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', borderRadius: '8px', color: '#4a4a52', fontSize: '13px' }}
                  onClick={() => { setDropdownOpen(false); showToast('Staff profile synced', 'info'); }}
                >
                  <User size={15} /> Staff Avatar
                </button>
                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', borderRadius: '8px', color: '#4a4a52', fontSize: '13px' }}
                  onClick={() => { setDropdownOpen(false); showToast('Call Centre script preferences loaded', 'info'); }}
                >
                  <Settings size={15} /> Preferences
                </button>
                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', borderRadius: '8px', color: '#e24b4a', fontSize: '13px' }}
                  onClick={() => { setDropdownOpen(false); showToast('Prototype session active', 'info'); }}
                >
                  <LogOut size={15} /> Active Shift
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
