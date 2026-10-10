// Master Dashboard Tasks, Metrics, and Chart Data
export const INITIAL_KPIS = {
  ogScore: { value: 76, delta: '+13', rank: '#3', percentile: '72nd' },
  avgHandleTime: { value: '4m 12s', delta: '-8%' },
  csatToday: { value: '94%', delta: '+2pt' },
  inQueue: { value: 2, isLive: true }
};

export const INITIAL_PROGRESS = {
  leadsCreated: { value: 3, delta: '+1' },
  leadsCalled: { value: 2, delta: '+2' }
};

export const INITIAL_EARNINGS = {
  total: 5200,
  coachedMoves: 1700,
  slabTarget: 6000,
  slabRemaining: 800
};

export const INITIAL_WAITING_QUEUE = [
  {
    id: 'wait-1',
    name: 'Priya Iyer',
    issue: 'Likely billing dispute — flagged before',
    waitTime: '4m 20s'
  },
  {
    id: 'wait-2',
    name: 'Suresh Nair',
    issue: 'Plan upgrade enquiry',
    waitTime: '1m 50s'
  }
];

export const INITIAL_TASKS = [
  {
    id: 'task-callbacks',
    title: '2 callbacks',
    subtitle: 'next 4:30pm',
    badge: '2',
    completed: false,
    actionType: 'open_incoming'
  },
  {
    id: 'task-hot-leads',
    title: '2 hot leads',
    subtitle: 'untouched 24h',
    badge: '2',
    completed: false,
    actionType: 'open_leads_modal'
  },
  {
    id: 'task-outcomes',
    title: '1 outcome',
    subtitle: 'to log',
    badge: '1',
    completed: false,
    actionType: 'open_recent'
  }
];

export const CALLS_HANDLED_7DAYS = [
  { day: 'Mon', calls: 18 },
  { day: 'Tue', calls: 22 },
  { day: 'Wed', calls: 15 },
  { day: 'Thu', calls: 26 },
  { day: 'Fri', calls: 20 },
  { day: 'Sat', calls: 12 },
  { day: 'Today', calls: 14, isToday: true }
];

export const CSAT_TREND_7DAYS = [
  { day: 'Mon', csat: 91 },
  { day: 'Tue', csat: 89 },
  { day: 'Wed', csat: 93 },
  { day: 'Thu', csat: 92 },
  { day: 'Fri', csat: 95 },
  { day: 'Sat', csat: 90 },
  { day: 'Today', csat: 94, isToday: true }
];
