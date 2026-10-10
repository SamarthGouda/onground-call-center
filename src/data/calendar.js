// Calendar Events Data
export const INITIAL_CALENDAR_EVENTS = [
  {
    id: 'cal-1',
    date: '2026-10-10',
    time: '10:42 AM',
    title: 'Call: Mukunda R.',
    type: 'call',
    category: 'Completed Call',
    color: '#0f6e56',
    bgColor: '#e1f5ee',
    details: 'Inbound call for Ortho GRID Mattress · 4m 12s. Quote shared over WhatsApp.'
  },
  {
    id: 'cal-2',
    date: '2026-10-10',
    time: '11:20 AM',
    title: 'Missed: Ritu S.',
    type: 'missed',
    category: 'Missed Call',
    color: '#e24b4a',
    bgColor: '#fdecec',
    details: 'Customer called regarding Smart Luxe Mattress warranty certification.'
  },
  {
    id: 'cal-3',
    date: '2026-10-10',
    time: '04:30 PM',
    title: 'Callback: Priya Iyer',
    type: 'callback',
    category: 'Scheduled Callback',
    color: '#185fa5',
    bgColor: '#e8f0fe',
    details: 'Billing dispute resolution follow-up. Confirmed via WhatsApp.'
  },
  {
    id: 'cal-4',
    date: '2026-10-12',
    time: '02:30 PM',
    title: 'Team QA Review with Sunita Rao',
    type: 'meeting',
    category: 'Team Review',
    color: '#7c3aed',
    bgColor: '#f3e8ff',
    details: 'Weekly shift review on first 10-second greeting QA score uplift.'
  },
  {
    id: 'cal-5',
    date: '2026-10-15',
    time: '11:00 AM',
    title: '1-on-1 Coaching: Fahmy (L&D)',
    type: 'coaching',
    category: 'Coaching Session',
    color: '#c8860a',
    bgColor: '#fff8e1',
    details: 'Targeted coaching on objection handling and 100-night trial pitch.'
  },
  {
    id: 'cal-6',
    date: '2026-10-23',
    time: '03:00 PM',
    title: 'Store Walkthrough & Product Brief',
    type: 'training',
    category: 'Product Brief',
    color: '#1d9e75',
    bgColor: '#e1f5ee',
    details: 'Koramangala store visit: new Smart Luxe variants and memory foam density demo.'
  }
];

export const getMonthDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push({ dayNumber: null, isCurrentMonth: false });
  }
  // Days of current month
  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    days.push({ dayNumber: d, dateStr, isCurrentMonth: true });
  }
  return days;
};
