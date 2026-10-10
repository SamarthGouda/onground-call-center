import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Toast } from '../common/Toast';
import { CallSimulationModal } from '../common/CallSimulationModal';
import { LeadsModal } from '../leads/LeadsModal';
import { CallSopReviewModal } from '../calls/CallSopReviewModal';
import { useApp } from '../../context/AppContext';

// Page components
import { Dashboard } from '../../pages/Dashboard';
import { CallsToMake } from '../../pages/CallsToMake';
import { IncomingCalls } from '../../pages/IncomingCalls';
import { RecentCalls } from '../../pages/RecentCalls';
import { CalendarPage } from '../../pages/CalendarPage';
import { PulseHome } from '../../pages/PulseHome';
import { PulseChannel } from '../../pages/PulseChannel';

export const AppShell = () => {
  const { activeTab, planSubTab, pulseView } = useApp();

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dash':
        return <Dashboard />;
      case 'calls':
        if (planSubTab === 'incoming') return <IncomingCalls />;
        if (planSubTab === 'recent') return <RecentCalls />;
        return <CallsToMake />;
      case 'calendar':
        return <CalendarPage />;
      case 'pulse':
        if (pulseView === 'channel') return <PulseChannel />;
        return <PulseHome />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-main">
        <TopBar />
        <main className="page-container">
          {renderActiveContent()}
        </main>
      </div>

      {/* Global Overlays & Modals */}
      <LeadsModal />
      <CallSopReviewModal />
      <CallSimulationModal />
      <Toast />
    </div>
  );
};
