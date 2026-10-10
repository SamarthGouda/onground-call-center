import React, { createContext, useContext, useState, useMemo } from 'react';
import { INITIAL_LEADS } from '../data/leads';
import { INITIAL_CALLS } from '../data/calls';
import { INITIAL_TASKS, INITIAL_KPIS, INITIAL_PROGRESS, INITIAL_EARNINGS, INITIAL_WAITING_QUEUE } from '../data/tasks';
import { INITIAL_CALENDAR_EVENTS } from '../data/calendar';
import { INITIAL_CHANNELS, INITIAL_MESSAGES, INITIAL_PINNED_TASKS, INITIAL_ROLE_AGENTS, INITIAL_TASK_AGENTS, INITIAL_KUDOS } from '../data/pulse';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Navigation State
  const [activeTab, setActiveTab] = useState('dash'); // 'dash', 'calls', 'calendar', 'pulse'
  const [planSubTab, setPlanSubTab] = useState('outgoing'); // 'outgoing', 'incoming', 'recent'
  const [pulseView, setPulseView] = useState('home'); // 'home', 'channel'
  const [activeChannelId, setActiveChannelId] = useState('callcentre-team');
  
  // Leads Modal State
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(0);

  // SOP Call Review Modal State
  const [reviewedCall, setReviewedCall] = useState(null);

  // Practice / In-app Call Simulation State
  const [activeCallSimulation, setActiveCallSimulation] = useState(null); // null or { name, status, duration }

  // Shared Data State
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [calls, setCalls] = useState(INITIAL_CALLS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const [kpis, setKpis] = useState(INITIAL_KPIS);
  const [waitingQueue, setWaitingQueue] = useState(INITIAL_WAITING_QUEUE);
  const [calendarEvents, setCalendarEvents] = useState(INITIAL_CALENDAR_EVENTS);
  const [selectedDate, setSelectedDate] = useState('2026-10-10');
  
  // Pulse State
  const [channels, setChannels] = useState(INITIAL_CHANNELS);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [pinnedTasks, setPinnedTasks] = useState(INITIAL_PINNED_TASKS);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Navigation Helpers
  const navigateTo = (tab, subTab = null) => {
    setActiveTab(tab);
    if (tab === 'calls' && subTab) {
      setPlanSubTab(subTab);
    }
  };

  // Leads Modal Actions
  const openLeadsModal = (index = 0) => {
    const validIndex = Math.max(0, Math.min(index, leads.length - 1));
    setSelectedLeadIndex(validIndex);
    setIsLeadsModalOpen(true);
  };

  const closeLeadsModal = () => {
    setIsLeadsModalOpen(false);
  };

  const nextLead = () => {
    if (selectedLeadIndex < leads.length - 1) {
      setSelectedLeadIndex(prev => prev + 1);
    }
  };

  const prevLead = () => {
    if (selectedLeadIndex > 0) {
      setSelectedLeadIndex(prev => prev - 1);
    }
  };

  // Call Actions
  const handleCallback = (callId, leadName) => {
    // Mark call as returned
    setCalls(prevCalls =>
      prevCalls.map(c => {
        if (c.id === callId) {
          return {
            ...c,
            dir: 'out',
            outcome: 'Callback Connected',
            duration: '1m 20s',
            time: 'Just now'
          };
        }
        return c;
      })
    );

    // Update progress
    setProgress(prev => ({
      ...prev,
      leadsCalled: {
        ...prev.leadsCalled,
        value: prev.leadsCalled.value + 1
      }
    }));

    // Update tasks if callbacks were pending
    setTasks(prevTasks =>
      prevTasks.map(t => {
        if (t.id === 'task-callbacks') {
          const newCount = Math.max(0, parseInt(t.badge, 10) - 1);
          return {
            ...t,
            badge: String(newCount),
            completed: newCount === 0
          };
        }
        return t;
      })
    );

    showToast(`Calling back ${leadName || 'customer'}... Connected!`, 'success');
  };

  // Task Completion
  const completeTask = (taskId) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, completed: true, badge: '0' } : t))
    );
    showToast('Task marked as completed', 'success');
  };

  // Pinned "Needs your input" actions
  const answerPinnedTask = (channelId, taskId, answer) => {
    setPinnedTasks(prev => {
      const channelTasks = prev[channelId] || [];
      return {
        ...prev,
        [channelId]: channelTasks.map(pt =>
          pt.id === taskId ? { ...pt, completed: true, response: answer } : pt
        )
      };
    });

    // Post response into channel thread as a message
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: 'Arvind Rajan',
      initials: 'AR',
      avatarBg: '#e1f5ee',
      avatarColor: '#0f6e56',
      text: `<b>Response to pinned input:</b> ${answer}`,
      time: 'Just now',
      isMe: true
    };

    setMessages(prev => ({
      ...prev,
      [channelId]: [...(prev[channelId] || []), newMessage]
    }));

    showToast('Response submitted · Task cleared from channel', 'success');
  };

  // Send Message in Pulse Channel
  const sendChatMessage = (channelId, text) => {
    if (!text || !text.trim()) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: 'Arvind Rajan',
      initials: 'AR',
      avatarBg: '#e1f5ee',
      avatarColor: '#0f6e56',
      text: text.trim(),
      time: 'Just now',
      isMe: true
    };

    setMessages(prev => ({
      ...prev,
      [channelId]: [...(prev[channelId] || []), newMessage]
    }));
  };

  // Practice Call Simulation
  const startPracticeCall = (customerName = 'Ritu S.') => {
    setActiveCallSimulation({
      name: customerName,
      status: 'ringing',
      timer: 0
    });
  };

  const endPracticeCall = () => {
    if (activeCallSimulation) {
      showToast('Call simulation ended and saved to review history', 'info');
      setActiveCallSimulation(null);
    }
  };

  const value = {
    // Navigation
    activeTab,
    setActiveTab,
    planSubTab,
    setPlanSubTab,
    pulseView,
    setPulseView,
    activeChannelId,
    setActiveChannelId,
    navigateTo,

    // Modals
    isLeadsModalOpen,
    selectedLeadIndex,
    openLeadsModal,
    closeLeadsModal,
    nextLead,
    prevLead,
    reviewedCall,
    setReviewedCall,
    activeCallSimulation,
    setActiveCallSimulation,
    startPracticeCall,
    endPracticeCall,

    // Data
    leads,
    setLeads,
    calls,
    setCalls,
    tasks,
    completeTask,
    progress,
    kpis,
    waitingQueue,
    calendarEvents,
    setCalendarEvents,
    selectedDate,
    setSelectedDate,
    channels,
    messages,
    pinnedTasks,
    answerPinnedTask,
    sendChatMessage,
    handleCallback,

    // Toast
    toast,
    showToast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
