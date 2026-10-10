import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { KpiCards } from '../components/dashboard/KpiCards';
import { ProgressCard } from '../components/dashboard/ProgressCard';
import { WaitingQueue } from '../components/dashboard/WaitingQueue';
import { EarningsCard } from '../components/dashboard/EarningsCard';
import { TasksPanel } from '../components/dashboard/TasksPanel';
import { PerformanceCharts } from '../components/dashboard/PerformanceCharts';
import { useApp } from '../context/AppContext';

export const Dashboard = () => {
  const { showToast } = useApp();

  return (
    <div style={{ paddingBottom: '32px' }}>
      {/* Top Greeting & KPI Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e, #2d2d5f)',
          padding: '24px 28px 20px',
          color: '#ffffff',
          borderRadius: '0 0 20px 20px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>
              Good afternoon 👋
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.2px' }}>
              Arvind Rajan
            </div>
            <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}>
              The Sleep Company · Call Centre
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(29, 158, 117, 0.25)',
                color: '#4fd8ac',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '12.5px',
                fontWeight: 700
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4fd8ac' }} />
              On Queue
            </span>

            <button
              onClick={() => showToast('Displaying metrics for current week', 'info')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                padding: '5px 12px',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Calendar size={14} />
              <span>This Week</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* 4 KPI Cards Grid */}
        <KpiCards />
      </div>

      {/* Main Content Grid */}
      <div style={{ padding: '24px 28px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Left Column */}
          <div>
            <ProgressCard />
            <WaitingQueue />
          </div>

          {/* Right Column */}
          <div>
            <EarningsCard />
            <TasksPanel />
          </div>
        </div>

        {/* 7-Day Performance Charts */}
        <PerformanceCharts />
      </div>
    </div>
  );
};
