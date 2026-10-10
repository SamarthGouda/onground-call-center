import React from 'react';
import {
  Sparkles,
  Search,
  Plus,
  Headset,
  ShoppingCart,
  ListChecks,
  Target,
  Mic,
  MessageSquare,
  Award,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INITIAL_ROLE_AGENTS, INITIAL_TASK_AGENTS, INITIAL_KUDOS } from '../data/pulse';

export const PulseHome = () => {
  const { channels, setPulseView, setActiveChannelId, showToast } = useApp();

  const handleOpenChannel = (channelId) => {
    setActiveChannelId(channelId);
    setPulseView('channel');
  };

  const getAgentIcon = (iconName) => {
    switch (iconName) {
      case 'headset':
        return <Headset size={16} />;
      case 'shopping-cart':
        return <ShoppingCart size={16} />;
      case 'list-checks':
        return <ListChecks size={16} />;
      case 'target':
        return <Target size={16} />;
      case 'mic':
        return <Mic size={16} />;
      default:
        return <MessageSquare size={16} />;
    }
  };

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4c1d95, #6d28d9)',
          padding: '20px 28px',
          color: '#ffffff',
          borderRadius: '0 0 20px 20px',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={18} />
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800 }}>Pulse</div>
            <div style={{ fontSize: '12px', color: '#e9d5ff' }}>The Sleep Company · Koramangala</div>
          </div>
        </div>

        <button
          onClick={() => showToast('New channel creation is managed by Store Admin', 'info')}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Create channel"
        >
          <Plus size={18} />
        </button>
      </div>

      <div style={{ padding: '20px 28px 0' }}>
        {/* Search Bar */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--border-card)',
            marginBottom: '16px'
          }}
        >
          <Sparkles size={16} color="#7c3aed" />
          <input
            type="text"
            placeholder="Ask AvaniBot or search Pulse..."
            style={{ border: 'none', outline: 'none', flex: 1, fontSize: '13.5px', color: '#1a1a1a' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') showToast(`AvaniBot search: "${e.target.value}"`, 'info');
            }}
          />
          <Search size={16} color="#94a3b8" />
        </div>

        {/* AvaniBot Hero Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
            borderRadius: '16px',
            padding: '18px 20px',
            color: '#ffffff',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '16px', fontWeight: 800 }}>AvaniBot</span>
            <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '8px' }}>
              ALWAYS ON
            </span>
          </div>
          <div style={{ fontSize: '13px', color: '#e9d5ff', marginBottom: '14px' }}>
            Ask me about anything happening in Pulse — daily briefs, action items, quick answers
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => showToast('AvaniBot Daily Brief: 5 missed leads queued, 1 callback pending at 4:30pm', 'info')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '8px 14px',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} /> Daily Brief
            </button>

            <button
              onClick={() => showToast('AvaniBot: Ready for questions about store SOP or pricing', 'info')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '8px 14px',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              💬 Ask a question
            </button>
          </div>
        </div>

        {/* Kudos Hero Card */}
        <div
          onClick={() => showToast('Kudos Wall: 3 recognitions from managers this month', 'info')}
          style={{
            background: 'linear-gradient(120deg, #c8860a, #e0a52f 55%, #f0b649)',
            borderRadius: '16px',
            padding: '16px 20px',
            color: '#ffffff',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '14.5px', fontWeight: 800 }}>
                Kudos & Shoutouts ({INITIAL_KUDOS.count} this month)
              </div>
              <div style={{ fontSize: '12.5px', color: '#fff8e1', marginTop: '2px' }}>
                Latest from {INITIAL_KUDOS.latest.from}: "{INITIAL_KUDOS.latest.text}"
              </div>
            </div>
          </div>
          <ChevronRight size={18} color="#ffffff" />
        </div>

        {/* Pulse Channels List */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.6px', marginBottom: '10px' }}>
            Channels & Discussions
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {channels.map(ch => (
              <div
                key={ch.id}
                onClick={() => handleOpenChannel(ch.id)}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1a1a1a' }}>
                    {ch.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    {ch.topic}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {ch.unreadCount > 0 && (
                    <span
                      style={{
                        backgroundColor: '#ef4444',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '9999px'
                      }}
                    >
                      {ch.unreadCount}
                    </span>
                  )}
                  <ChevronRight size={16} color="#94a3b8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Agents Section */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.6px', marginBottom: '10px' }}>
            Custom Role & Task Agents
          </div>

          {/* Role Agents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {INITIAL_ROLE_AGENTS.map(agent => (
              <div
                key={agent.id}
                onClick={() => handleOpenChannel(agent.channelId)}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#e8f0fe',
                      color: agent.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getAgentIcon(agent.icon)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>
                      {agent.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {agent.subtitle}
                    </div>
                  </div>
                </div>

                {agent.badge && (
                  <span
                    style={{
                      backgroundColor: '#fef3c7',
                      color: '#b45309',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '8px'
                    }}
                  >
                    ⚡ {agent.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Task Agents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {INITIAL_TASK_AGENTS.map(agent => (
              <div
                key={agent.id}
                onClick={() => handleOpenChannel(agent.channelId)}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#f1f5f9',
                      color: agent.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getAgentIcon(agent.icon)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>
                      {agent.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {agent.subtitle}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {agent.stat && (
                    <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f6e56' }}>
                      {agent.stat}
                    </span>
                  )}
                  {agent.badge && (
                    <span
                      style={{
                        backgroundColor: '#fef3c7',
                        color: '#b45309',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '8px'
                      }}
                    >
                      ⚡ {agent.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
