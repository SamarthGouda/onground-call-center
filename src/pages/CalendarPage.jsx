import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getMonthDays } from '../data/calendar';

export const CalendarPage = () => {
  const { calendarEvents, selectedDate, setSelectedDate } = useApp();

  // Calendar view month & year (starting October 2026)
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // 0-indexed: 9 = October

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Month navigation across year boundaries
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const jumpToToday = () => {
    setCurrentYear(2026);
    setCurrentMonth(9); // October
    setSelectedDate('2026-10-10');
  };

  const days = getMonthDays(currentYear, currentMonth);

  // Filter events for currently selected date
  const selectedDayEvents = calendarEvents.filter(e => e.date === selectedDate);

  return (
    <div style={{ padding: '24px 28px 40px' }}>
      {/* Top Header */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CalendarIcon size={20} color="#0f6e56" />
          <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>
            Calendar
          </h1>
        </div>
        <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
          Mirrored from your mailbox — invites created here land there too
        </div>
      </div>

      {/* Mailbox Banner Notice */}
      <div
        style={{
          background: '#e8f0fe',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
          border: '1px solid #d2e3fc'
        }}
      >
        <Mail size={18} color="#185fa5" />
        <span style={{ fontSize: '13px', color: '#1e3a8a', fontWeight: 500 }}>
          Store visits, coaching sessions, and meeting invites all show up here — and in your mailbox.
        </span>
      </div>

      {/* Main Calendar Card */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '22px',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--border-card)',
          padding: '20px 24px'
        }}
      >
        {/* Month Navigation Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button
            onClick={prevMonth}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Previous month"
          >
            <ChevronLeft size={18} color="#475569" />
          </button>

          <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a' }}>
            {monthNames[currentMonth]} {currentYear}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={jumpToToday}
              style={{
                backgroundColor: '#e8f0fe',
                color: '#185fa5',
                fontSize: '12.5px',
                fontWeight: 700,
                padding: '5px 12px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Today
            </button>

            <button
              onClick={nextMonth}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Next month"
            >
              <ChevronRight size={18} color="#475569" />
            </button>
          </div>
        </div>

        {/* Weekdays Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '10px' }}>
          {weekdays.map((day, idx) => (
            <div key={idx} style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
          {days.map((item, idx) => {
            if (!item.isCurrentMonth) {
              return <div key={idx} style={{ minHeight: '64px' }} />;
            }

            const isToday = item.dateStr === '2026-10-10';
            const isSelected = item.dateStr === selectedDate;
            const hasEvents = calendarEvents.some(e => e.date === item.dateStr);

            return (
              <div
                key={idx}
                onClick={() => setSelectedDate(item.dateStr)}
                style={{
                  minHeight: '64px',
                  borderRadius: '14px',
                  backgroundColor: isSelected ? '#e8f0fe' : '#ffffff',
                  border: isSelected
                    ? '2px solid #185fa5'
                    : isToday
                    ? '2px solid #1d9e75'
                    : '1px solid #f0f0f4',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.15s ease'
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: isToday || isSelected ? 800 : 600,
                    color: isSelected ? '#185fa5' : isToday ? '#0f6e56' : '#1a1a1a'
                  }}
                >
                  {item.dayNumber}
                </span>

                {/* Event Indicator Dot */}
                {hasEvents && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#e24b4a'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Date Event Details */}
      <div
        style={{
          maxWidth: '820px',
          margin: '20px auto 0',
          background: '#ffffff',
          borderRadius: '18px',
          padding: '20px 24px',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--border-card)'
        }}
      >
        <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '14px' }}>
          Events for {selectedDate}
        </div>

        {selectedDayEvents.length === 0 ? (
          <div style={{ color: '#94a3b8', fontSize: '13px', fontStyle: 'italic', padding: '12px 0' }}>
            No scheduled events or calls for this date.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {selectedDayEvents.map(evt => (
              <div
                key={evt.id}
                style={{
                  background: evt.bgColor,
                  borderRadius: '12px',
                  padding: '12px 16px',
                  border: `1px solid ${evt.color}25`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: evt.color }}>
                    {evt.title}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: evt.color, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {evt.time}
                  </span>
                </div>
                <div style={{ fontSize: '12.5px', color: '#334155' }}>
                  {evt.details}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
