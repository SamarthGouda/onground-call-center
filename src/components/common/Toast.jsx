import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={16} color="#0f6e56" />,
    error: <AlertCircle size={16} color="#e24b4a" />,
    info: <Info size={16} color="#185fa5" />
  };

  const bgColors = {
    success: '#e1f5ee',
    error: '#fdecec',
    info: '#e8f0fe'
  };

  const textColors = {
    success: '#0f6e56',
    error: '#e24b4a',
    info: '#185fa5'
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: bgColors[toast.type] || '#ffffff',
        border: `1.5px solid ${textColors[toast.type] || '#d6d6db'}`,
        color: textColors[toast.type] || '#1a1a1a',
        padding: '10px 16px',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-card-hover)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 9999,
        fontSize: '13.5px',
        fontWeight: 600,
        animation: 'fadeIn 0.2s ease-out'
      }}
      role="status"
      aria-live="polite"
    >
      {icons[toast.type] || icons.info}
      <span>{toast.message}</span>
    </div>
  );
};
