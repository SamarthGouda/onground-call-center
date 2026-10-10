// Pulse Channels, Messages, Agents, and Pinned Input Tasks
export const INITIAL_ROLE_AGENTS = [
  {
    id: 'callcentre-agent',
    slug: 'callcentre-agent',
    title: '# callcentre-agent',
    subtitle: 'Call Centre Agent',
    badge: '2',
    badgeColor: '#d97706',
    icon: 'headset',
    color: '#185fa5',
    channelId: 'callcentre-team'
  }
];

export const INITIAL_TASK_AGENTS = [
  {
    id: 'cross-sell-agent',
    slug: 'cross-sell-agent',
    title: '# cross-sell-agent',
    subtitle: 'Your Attach rate · 5 members',
    stat: '24% ▲2',
    badge: '2',
    badgeColor: '#d97706',
    icon: 'shopping-cart',
    color: '#7c3aed',
    channelId: 'callcentre-team'
  },
  {
    id: 'sop-agent',
    slug: 'sop-agent',
    title: '# sop-agent',
    subtitle: 'Your SOP adherence · 5 members',
    stat: '81% ▲2',
    badge: '2',
    badgeColor: '#d97706',
    icon: 'list-checks',
    color: '#0f6e56',
    channelId: 'callcentre-team'
  },
  {
    id: 'lead-conversion-agent',
    slug: 'lead-conversion-agent',
    title: '# lead-conversion-agent',
    subtitle: 'Lead Conversion Agent',
    stat: '',
    badge: '2',
    badgeColor: '#d97706',
    icon: 'target',
    color: '#e24b4a',
    channelId: 'callcentre-team'
  },
  {
    id: 'capture-agent',
    slug: 'capture-agent',
    title: '# capture-agent',
    subtitle: 'Your Capture coverage · 5 members',
    stat: '78% ▲1',
    badge: '2',
    badgeColor: '#d97706',
    icon: 'mic',
    color: '#0f6e56',
    channelId: 'callcentre-team'
  }
];

export const INITIAL_KUDOS = {
  count: 3,
  period: 'this month',
  latest: {
    from: 'Sunita Rao',
    role: 'Store Manager · Koramangala',
    text: 'Great job handling the tricky return yesterday and converting to an exchange! 🎉',
    time: 'Yesterday'
  }
};

export const INITIAL_PINNED_TASKS = {
  'callcentre-team': [
    {
      id: 'pin-cb-1',
      question: 'Confirm the 4:30pm callback with Priya Iyer',
      context: 'Billing dispute resolution · Lead flagged before',
      options: ['Confirm', 'Reschedule'],
      completed: false,
      response: null
    }
  ],
  'all-stores': [
    {
      id: 'pin-store-1',
      question: 'Acknowledge new Ortho Grid campaign terms',
      context: 'Bundle discount policy updated for Q4',
      options: ['Acknowledge', 'Need info'],
      completed: false,
      response: null
    }
  ],
  'customer-discussions': []
};

export const INITIAL_CHANNELS = [
  {
    id: 'callcentre-team',
    name: '# callcentre-team',
    category: 'Internal Channel',
    unreadCount: 1,
    members: 8,
    topic: 'Call Centre Shift & QA Coaching'
  },
  {
    id: 'all-stores',
    name: '# all-stores',
    category: 'Internal Channel',
    unreadCount: 0,
    members: 42,
    topic: 'Company-wide campaigns & store announcements'
  },
  {
    id: 'customer-discussions',
    name: '💬 customer-discussions',
    category: 'Customer Relay',
    unreadCount: 2,
    members: 12,
    topic: 'Relayed via WhatsApp Business · 2 open'
  }
];

export const INITIAL_MESSAGES = {
  'callcentre-team': [
    {
      id: 'msg-1',
      sender: 'Sunita Rao',
      initials: 'SR',
      avatarBg: '#faeeda',
      avatarColor: '#854f0b',
      text: '👥 <b>STAKEHOLDERS:</b> <b style="color:#854f0b">@You (Arvind R.)</b>, whole call centre shift',
      time: '2:05pm',
      isMe: false
    },
    {
      id: 'msg-2',
      sender: 'Sunita Rao',
      initials: 'SR',
      avatarBg: '#faeeda',
      avatarColor: '#854f0b',
      text: '📋 <b>ISSUE DEFINITION:</b> Greeting-in-first-10s QA score is at 71% this week, below our 85% target.',
      time: '2:05pm',
      isMe: false
    },
    {
      id: 'msg-3',
      sender: 'Sunita Rao',
      initials: 'SR',
      avatarBg: '#faeeda',
      avatarColor: '#854f0b',
      text: "➡️ <b>SUGGESTED RESOLUTION:</b> Let's push that up 💪 — open every call with the greeting script. I'll check back Friday.",
      time: '2:05pm',
      isMe: false
    },
    {
      id: 'msg-4',
      sender: 'Arvind Rajan',
      initials: 'AR',
      avatarBg: '#e1f5ee',
      avatarColor: '#0f6e56',
      text: 'On it! Will make sure I open every call with the greeting script 🙌',
      time: '2:10pm',
      isMe: true
    },
    {
      id: 'msg-5',
      sender: 'Sunita Rao',
      initials: 'SR',
      avatarBg: '#faeeda',
      avatarColor: '#854f0b',
      text: 'Great attitude Arvind 🌟',
      time: '2:14pm',
      isMe: false
    }
  ],
  'all-stores': [
    {
      id: 'msg-s1',
      sender: 'Manager Helper',
      initials: '📢',
      avatarBg: '#e8f0fe',
      avatarColor: '#1d4ed8',
      text: 'New Ortho Grid campaign live from 1 June — ask customers about the bundle options.',
      time: '11:00am',
      isMe: false
    }
  ],
  'customer-discussions': [
    {
      id: 'msg-c1',
      sender: 'Mukunda (WA)',
      initials: 'MK',
      avatarBg: '#e1f5ee',
      avatarColor: '#0f6e56',
      text: 'Quote for Ortho GRID sent · awaiting customer reply',
      time: '2:40pm',
      isMe: false
    },
    {
      id: 'msg-c2',
      sender: 'Kavitha R. (WA)',
      initials: 'KR',
      avatarBg: '#fff8e1',
      avatarColor: '#c8860a',
      text: 'When can I come see the hybrid mattress in Koramangala?',
      time: '11:15am',
      isMe: false
    }
  ]
};
