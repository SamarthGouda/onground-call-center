import React, { useState, useEffect } from 'react';
import { PhoneOff, Mic, MicOff, Pause, Play, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CallSimulationModal = () => {
  const { activeCallSimulation, endPracticeCall, showToast } = useApp();
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);

  useEffect(() => {
    let interval = null;
    if (activeCallSimulation) {
      setSeconds(0);
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeCallSimulation]);

  if (!activeCallSimulation) return null;

  const formatTimer = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 5000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(3px)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'linear-gradient(135deg, #1a1a2e, #2d2d5f)',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: 'var(--shadow-modal)',
          textAlign: 'center',
          animation: 'modalSlideUp 0.25s ease'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(29, 158, 117, 0.25)', color: '#4fd8ac', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, marginBottom: '14px' }}>
          <Sparkles size={14} /> AI Call Practice & Coaching Live
        </div>

        <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>
          {activeCallSimulation.name}
        </div>
        <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '16px' }}>
          Simulated Customer · The Sleep Company
        </div>

        <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'monospace', letterSpacing: '2px', color: '#4fd8ac', marginBottom: '20px' }}>
          {formatTimer(seconds)}
        </div>

        {/* Live Sentiment & AI coaching nudge */}
        <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '12px', textAlign: 'left', marginBottom: '24px', fontSize: '13px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#94a3b8', fontSize: '11.5px', textTransform: 'uppercase', fontWeight: 700 }}>AI Live Coaching Nudge</span>
            <span style={{ color: '#4fd8ac', fontSize: '11.5px', fontWeight: 700 }}>Sentiment: Positive 😊</span>
          </div>
          <div style={{ color: '#f8fafc', lineHeight: 1.4 }}>
            💡 <i>"Customer asked about trial policy. Proactively highlight the 100-night trial with zero return friction."</i>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              showToast(isMuted ? 'Microphone unmuted' : 'Microphone muted', 'info');
            }}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isMuted ? '#ef4444' : 'rgba(255, 255, 255, 0.14)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
          </button>

          <button
            onClick={endPracticeCall}
            style={{
              padding: '12px 28px',
              borderRadius: '9999px',
              backgroundColor: '#e24b4a',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(226, 75, 74, 0.4)'
            }}
            title="End Call"
          >
            <PhoneOff size={18} /> End Call
          </button>

          <button
            onClick={() => {
              setIsOnHold(!isOnHold);
              showToast(isOnHold ? 'Call resumed' : 'Call placed on hold', 'info');
            }}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: isOnHold ? '#f59e0b' : 'rgba(255, 255, 255, 0.14)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title={isOnHold ? 'Resume' : 'Hold'}
          >
            {isOnHold ? <Play size={18} /> : <Pause size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};
