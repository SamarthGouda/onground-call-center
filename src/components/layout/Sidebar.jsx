import React from 'react';
import {
  LayoutDashboard,
  Phone,
  PhoneOutgoing,
  PhoneIncoming,
  History,
  PhoneCall,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const {
    activeTab,
    planSubTab,
    navigateTo,
    startPracticeCall
  } = useApp();

  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        On-Ground.ai
      </div>

      {/* 1. Dashboard */}
      <button
        className={`sidebar-nav-item ${activeTab === 'dash' ? 'active' : ''}`}
        data-tab="dash"
        onClick={() => navigateTo('dash')}
        id="nav-dashboard"
      >
        <span className="sidebar-icon-chip">
          <LayoutDashboard size={16} />
        </span>
        <span>Dashboard</span>
      </button>

      {/* 2. Plan (Calls) */}
      <button
        className={`sidebar-nav-item ${activeTab === 'calls' ? 'active' : ''}`}
        data-tab="calls"
        onClick={() => navigateTo('calls', planSubTab || 'outgoing')}
        id="nav-plan"
      >
        <span className="sidebar-icon-chip">
          <Phone size={16} />
        </span>
        <span>Plan</span>
      </button>

      {/* Sub-nav shown under Plan */}
      {activeTab === 'calls' && (
        <div className="sidebar-subnav">
          <button
            className={`sidebar-subnav-item ${planSubTab === 'outgoing' ? 'active' : ''}`}
            onClick={() => navigateTo('calls', 'outgoing')}
            id="nav-calls-to-make"
          >
            <PhoneOutgoing size={14} />
            <span>Calls to make</span>
          </button>

          <button
            className={`sidebar-subnav-item ${planSubTab === 'incoming' ? 'active' : ''}`}
            onClick={() => navigateTo('calls', 'incoming')}
            id="nav-incoming"
          >
            <PhoneIncoming size={14} />
            <span>Incoming</span>
          </button>

          <button
            className={`sidebar-subnav-item ${planSubTab === 'recent' ? 'active' : ''}`}
            onClick={() => navigateTo('calls', 'recent')}
            id="nav-recent"
          >
            <History size={14} />
            <span>Recent</span>
          </button>

          <button
            className="sidebar-subnav-item practice-btn"
            onClick={() => startPracticeCall('Ritu S.')}
            id="nav-practise-call"
            title="Practise a call with AI customer simulator"
          >
            <PhoneCall size={14} />
            <span>Practise a call</span>
          </button>
        </div>
      )}

      {/* 3. Calendar */}
      <button
        className={`sidebar-nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
        data-tab="calendar"
        onClick={() => navigateTo('calendar')}
        id="nav-calendar"
      >
        <span className="sidebar-icon-chip">
          <Calendar size={16} />
        </span>
        <span>Calendar</span>
      </button>

      {/* 4. Pulse */}
      <button
        className={`sidebar-nav-item ${activeTab === 'pulse' ? 'active' : ''}`}
        data-tab="pulse"
        onClick={() => navigateTo('pulse')}
        id="nav-pulse"
      >
        <span className="sidebar-icon-chip">
          <MessageSquare size={16} />
        </span>
        <span>Pulse</span>
      </button>
    </aside>
  );
};
