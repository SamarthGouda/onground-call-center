import React, { useState } from 'react';
import { ArrowLeft, Pin, Send, ChevronUp, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PulseChannel = () => {
  const {
    activeChannelId,
    channels,
    messages,
    pinnedTasks,
    setPulseView,
    answerPinnedTask,
    sendChatMessage
  } = useApp();

  const [composerText, setComposerText] = useState('');
  const [pinnedOpen, setPinnedOpen] = useState(true);
  const [pinnedInput, setPinnedInput] = useState({});

  const currentChannel = channels.find(c => c.id === activeChannelId) || channels[0];
  const channelMessages = messages[activeChannelId] || [];
  const channelPinned = (pinnedTasks[activeChannelId] || []).filter(t => !t.completed);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!composerText.trim()) return;
    sendChatMessage(activeChannelId, composerText);
    setComposerText('');
  };

  const handleAnswerPinned = (taskId, text) => {
    if (!text || !text.trim()) return;
    answerPinnedTask(activeChannelId, taskId, text.trim());
    setPinnedInput(prev => ({ ...prev, [taskId]: '' }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 54px)', background: '#ffffff' }}>
      {/* Channel Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f6e56, #1d9e75)',
          color: '#ffffff',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexShrink: 0,
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <button
          onClick={() => setPulseView('home')}
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
          title="Back to Pulse Home"
        >
          <ArrowLeft size={18} />
        </button>

        <div>
          <div style={{ fontSize: '16px', fontWeight: 800 }}>
            {currentChannel.name}
          </div>
          <div style={{ fontSize: '11.5px', color: '#e1f5ee' }}>
            {currentChannel.topic} · {currentChannel.members} members
          </div>
        </div>
      </div>

      {/* Pinned "Needs your input" Card */}
      {channelPinned.length > 0 && (
        <div
          style={{
            background: '#fffaf0',
            borderBottom: '2px solid #f59e0b',
            padding: '10px 18px',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(146, 64, 14, 0.08)'
          }}
        >
          <div
            onClick={() => setPinnedOpen(!pinnedOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Pin size={16} color="#b45309" />
            <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#7a4a00' }}>
              Needs your input
            </span>
            <span
              style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '1px 7px',
                borderRadius: '9px'
              }}
            >
              {channelPinned.length}
            </span>
            <span style={{ fontSize: '12px', color: '#a16207' }}>pinned</span>
            <div style={{ marginLeft: 'auto', color: '#b45309' }}>
              {pinnedOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          {pinnedOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              {channelPinned.map(pt => (
                <div
                  key={pt.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #fde3b0',
                    borderRadius: '10px',
                    padding: '12px 14px'
                  }}
                >
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1a1a1a' }}>
                    {pt.question}
                  </div>
                  {pt.context && (
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>
                      {pt.context}
                    </div>
                  )}

                  {/* Option Buttons */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {pt.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswerPinned(pt.id, opt)}
                        style={{
                          border: '1px solid #d6d6db',
                          backgroundColor: '#ffffff',
                          color: '#1a1a1a',
                          fontSize: '12.5px',
                          fontWeight: 700,
                          borderRadius: '8px',
                          padding: '6px 12px',
                          cursor: 'pointer'
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Or Custom Text Input */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    <input
                      type="text"
                      placeholder="Or type your answer (e.g. Done or Needs push)"
                      value={pinnedInput[pt.id] || ''}
                      onChange={(e) => setPinnedInput({ ...pinnedInput, [pt.id]: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAnswerPinned(pt.id, pinnedInput[pt.id]);
                      }}
                      style={{
                        flex: 1,
                        border: '1px solid #e5e5ea',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        fontSize: '12.5px',
                        outline: 'none'
                      }}
                    />
                    <button
                      onClick={() => handleAnswerPinned(pt.id, pinnedInput[pt.id])}
                      style={{
                        backgroundColor: '#92400e',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 14px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Message History List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background: '#f8fafc'
        }}
      >
        {channelMessages.map(msg => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: msg.isMe ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              gap: '10px',
              maxWidth: '85%',
              alignSelf: msg.isMe ? 'flex-end' : 'flex-start'
            }}
          >
            {/* Avatar */}
            {!msg.isMe && (
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: msg.avatarBg || '#e2e8f0',
                  color: msg.avatarColor || '#334155',
                  fontWeight: 800,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {msg.initials}
              </div>
            )}

            {/* Bubble Content */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: msg.isMe ? 'flex-end' : 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>
                  {msg.sender}
                </span>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>
                  {msg.time}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: msg.isMe ? '#0f6e56' : '#ffffff',
                  color: msg.isMe ? '#ffffff' : '#1e293b',
                  borderRadius: msg.isMe ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                  padding: '10px 14px',
                  fontSize: '13.5px',
                  lineHeight: 1.45,
                  boxShadow: 'var(--shadow-sm)',
                  border: msg.isMe ? 'none' : '1px solid #e2e8f0',
                  wordBreak: 'break-word'
                }}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reply Composer Bar */}
      <form
        onSubmit={handleSendMessage}
        style={{
          padding: '12px 20px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          flexShrink: 0
        }}
      >
        <input
          type="text"
          placeholder={`Message ${currentChannel.name}...`}
          value={composerText}
          onChange={(e) => setComposerText(e.target.value)}
          style={{
            flex: 1,
            padding: '10px 14px',
            border: '1.5px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '13.5px',
            outline: 'none',
            color: '#1a1a1a'
          }}
        />

        <button
          type="submit"
          disabled={!composerText.trim()}
          style={{
            backgroundColor: composerText.trim() ? '#0f6e56' : '#94a3b8',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: composerText.trim() ? 'pointer' : 'not-allowed',
            transition: 'background var(--transition-fast)'
          }}
        >
          <Send size={15} /> Send
        </button>
      </form>
    </div>
  );
};
