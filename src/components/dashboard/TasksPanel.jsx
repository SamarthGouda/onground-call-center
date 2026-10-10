import React from 'react';
import { Phone, Users, FileText, ChevronRight, ClipboardList } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TasksPanel = () => {
  const { tasks, navigateTo, openLeadsModal } = useApp();

  const handleTaskClick = (task) => {
    if (task.actionType === 'open_incoming') {
      navigateTo('calls', 'incoming');
    } else if (task.actionType === 'open_leads_modal') {
      openLeadsModal(0);
    } else if (task.actionType === 'open_recent') {
      navigateTo('calls', 'recent');
    }
  };

  const getTaskIcon = (type) => {
    switch (type) {
      case 'open_incoming':
        return <Phone size={16} color="#185fa5" />;
      case 'open_leads_modal':
        return <Users size={16} color="#7c3aed" />;
      case 'open_recent':
        return <FileText size={16} color="#d97706" />;
      default:
        return <ClipboardList size={16} color="#64748b" />;
    }
  };

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div
      style={{
        background: '#4a2810',
        borderRadius: '16px',
        padding: '16px',
        marginTop: '16px',
        color: '#ffffff',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <ClipboardList size={18} color="#fed7aa" />
        <span style={{ fontSize: '14.5px', fontWeight: 800 }}>My Tasks</span>
        {pendingCount > 0 && (
          <span
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 7px',
              borderRadius: '9999px'
            }}
          >
            {pendingCount}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {tasks.map(task => (
          <div
            key={task.id}
            onClick={() => handleTaskClick(task)}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              color: '#1a1a1a',
              opacity: task.completed ? 0.6 : 1,
              transition: 'transform var(--transition-fast)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getTaskIcon(task.actionType)}
              </div>
              <div>
                <span style={{ fontSize: '13.5px', fontWeight: 700, marginRight: '6px' }}>
                  {task.title}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  {task.subtitle}
                </span>
              </div>
            </div>

            <ChevronRight size={16} color="#94a3b8" />
          </div>
        ))}
      </div>
    </div>
  );
};
