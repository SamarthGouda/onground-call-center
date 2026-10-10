// Master Leads Data
export const INITIAL_LEADS = [
  {
    id: 'lead-1',
    name: 'Mukunda',
    initials: 'MK',
    avatarBg: '#e1f5ee',
    avatarColor: '#0f6e56',
    interest: 'Interested: Ortho GRID · ₹8,490',
    product: 'Ortho GRID Mattress',
    crossSell: 'Mattress Protector · ₹1,999',
    emi: 'Asked about EMI — quote the 12-month zero-interest plan',
    attractivenessScore: 90,
    expectedValue: 8490,
    badge: '2h left',
    badgeBg: '#e1f5ee',
    badgeColor: '#0f6e56',
    statusLabel: 'Open',
    statusColor: '#1d9e75',
    quoteOn: true,
    icp: 87,
    icpColor: '#1d9e75',
    intentScore: 91,
    subscores: [
      { label: 'Budget Fit', pct: 87, color: '#1d9e75' },
      { label: 'Need Match', pct: 72, color: '#c8860a' },
      { label: 'Decision Stage', pct: 60, color: '#7c3aed' }
    ],
    slaNote: null,
    notes: [
      'Asked about EMI on the Ortho GRID — lead with the 12-month zero-interest plan.',
      'Price-sensitive — compared us with a competitor, so mention the 100-night trial to reduce risk.',
      'Prefers evening calls, after 6pm.'
    ],
    problemBuckets: [
      {
        cat: 'Financing Related',
        text: 'Asked specifically about EMI options on the Ortho GRID — budget is a live concern, not a blocker'
      },
      {
        cat: 'Quotation Demanded',
        text: 'Compared pricing with a competitor before reaching out — price-anchored, expects a competitive number'
      },
      {
        cat: 'Warranty Related',
        text: "Hasn't raised this yet — worth proactively mentioning the 100-night trial to reduce perceived risk"
      }
    ],
    journey: [
      { date: '18 May', channel: 'Meta Ad', icon: '📢', color: '#1877f2', text: 'Clicked our "0% EMI on Ortho GRID" retargeting ad — first touch' },
      { date: '20 May', channel: 'AI Agent', icon: '🤖', color: '#7c3aed', text: 'WhatsApp opt-in — shared preferred size' },
      { date: '22 May', channel: 'Voice AI', icon: '🎙️', color: '#7c3aed', text: '4m 12s qualifying call — asked if pillows come bundled' },
      { date: '24 May', channel: 'WhatsApp', icon: '💬', color: '#25D366', text: 'Asked for a quote with pillows bundled in' }
    ],
    phone: '+91 98765 43210',
    actions: 'open'
  },
  {
    id: 'lead-2',
    name: 'Kavitha R.',
    initials: 'KR',
    avatarBg: '#fff8e1',
    avatarColor: '#c8860a',
    interest: 'Interested: SmartGRID Hybrid · ₹24,990',
    product: 'SmartGRID Hybrid Mattress',
    crossSell: 'Cooling Pillow Set · ₹2,499',
    emi: 'Budget borderline — a payment plan could tip this',
    attractivenessScore: 55,
    expectedValue: 24990,
    badge: '+3d ageing',
    badgeBg: '#fff8e1',
    badgeColor: '#c8860a',
    statusLabel: 'Ageing',
    statusColor: '#c8860a',
    quoteOn: false,
    icp: 61,
    icpColor: '#c8860a',
    intentScore: 63,
    subscores: [
      { label: 'Budget Fit', pct: 61, color: '#c8860a' },
      { label: 'Need Match', pct: 42, color: '#e24b4a' },
      { label: 'Decision Stage', pct: 35, color: '#7c3aed' }
    ],
    slaNote: 'SLA missed — 5 days grace left to close',
    notes: [
      'SLA already missed — open with an apology for the delay, not a sales pitch.',
      'Low Need Match (42%) — re-confirm the SmartGRID Hybrid is still the right fit before pushing further.',
      "Hasn't responded to the last 2 WhatsApp messages — try a call instead."
    ],
    problemBuckets: [
      {
        cat: 'Product Related',
        text: 'Uncertain whether SmartGRID Hybrid actually fits her need — Need Match score is low (42%), worth re-confirming fit before pushing further'
      },
      {
        cat: 'In-Store Experience Needed',
        text: "Hasn't responded to WhatsApp — may prefer to see/feel the product before deciding, worth inviting her back in"
      },
      {
        cat: 'Financing Related',
        text: 'Budget fit is borderline (61%) — a payment plan or bundle discount could tip this'
      }
    ],
    journey: [
      { date: '12 May', channel: 'Google Ad', icon: '🔍', color: '#ea4335', text: 'Searched "cooling gel mattress bangalore", clicked our top search ad' },
      { date: '15 May', channel: 'AI Agent', icon: '🤖', color: '#7c3aed', text: 'WhatsApp auto-reply engaged — confirmed interest in the cooling gel layer' },
      { date: '19 May', channel: 'WhatsApp', icon: '💬', color: '#25D366', text: 'Asked to hold the price for 2 days, went quiet since' }
    ],
    phone: '+91 97654 32109',
    actions: 'ageing'
  },
  {
    id: 'lead-3',
    name: 'Faizan A.',
    initials: 'FA',
    avatarBg: '#e8f0fe',
    avatarColor: '#185fa5',
    interest: 'Interested: Tranquo Massager Chair · ₹24,990',
    product: 'Tranquo Massager Chair',
    crossSell: 'Ergo Seat Cushion · ₹1,299',
    emi: 'Confirmed he wants the 6-month no-cost EMI plan',
    attractivenessScore: 88,
    expectedValue: 24990,
    badge: 'Confirmed date',
    badgeBg: '#e1f5ee',
    badgeColor: '#0f6e56',
    statusLabel: 'Open',
    statusColor: '#1d9e75',
    quoteOn: true,
    icp: 82,
    icpColor: '#1d9e75',
    intentScore: 85,
    subscores: [
      { label: 'Budget Fit', pct: 82, color: '#1d9e75' },
      { label: 'Need Match', pct: 78, color: '#1d9e75' },
      { label: 'Decision Stage', pct: 75, color: '#7c3aed' }
    ],
    slaNote: null,
    notes: [
      'High intent customer looking for living room relaxation.',
      'Visited store last week and tried the demo chair.',
      'Waiting for final EMI approval call.'
    ],
    problemBuckets: [
      {
        cat: 'Financing Related',
        text: 'Opted for 6-month no-cost EMI — documents pending upload'
      },
      {
        cat: 'Delivery Timeline',
        text: 'Requested delivery within 3 days for upcoming housewarming'
      }
    ],
    journey: [
      { date: '25 May', channel: 'Store Visit', icon: '🏬', color: '#0f6e56', text: 'Walk-in demo session at Koramangala store for 20 mins' },
      { date: '27 May', channel: 'WhatsApp', icon: '💬', color: '#25D366', text: 'Requested color variants catalogue' }
    ],
    phone: '+91 96543 21098',
    actions: 'open'
  },
  {
    id: 'lead-4',
    name: 'Ritu S.',
    initials: 'RS',
    avatarBg: '#fef3c7',
    avatarColor: '#d97706',
    interest: 'Interested: Smart Luxe Mattress · ₹13,390',
    product: 'Smart Luxe Mattress',
    crossSell: 'Silk Pillow Case · ₹899',
    emi: 'Looking for full upfront payment with card discount',
    attractivenessScore: 96,
    expectedValue: 13390,
    badge: 'High Intent',
    badgeBg: '#e1f5ee',
    badgeColor: '#0f6e56',
    statusLabel: 'Open',
    statusColor: '#1d9e75',
    quoteOn: true,
    icp: 94,
    icpColor: '#1d9e75',
    intentScore: 96,
    subscores: [
      { label: 'Budget Fit', pct: 95, color: '#1d9e75' },
      { label: 'Need Match', pct: 92, color: '#1d9e75' },
      { label: 'Decision Stage', pct: 89, color: '#7c3aed' }
    ],
    slaNote: null,
    notes: [
      'Extremely high purchase intent. Ready to swipe today.',
      'Needs confirmation of 10-year warranty certificate.'
    ],
    problemBuckets: [
      {
        cat: 'Warranty Related',
        text: 'Wants written confirmation of 10-year warranty terms'
      }
    ],
    journey: [
      { date: '28 May', channel: 'Website', icon: '🌐', color: '#185fa5', text: 'Added Smart Luxe King size to cart, dropped off at payment' },
      { date: '29 May', channel: 'AI Agent', icon: '🤖', color: '#7c3aed', text: 'Cart recovery nudge sent — replied asking for card discounts' }
    ],
    phone: '+91 98450 12345',
    actions: 'open'
  },
  {
    id: 'lead-5',
    name: 'Divya P.',
    initials: 'DP',
    avatarBg: '#f3e8ff',
    avatarColor: '#7c3aed',
    interest: 'Interested: Eco Comfort Mattress · ₹18,490',
    product: 'Eco Comfort Mattress',
    crossSell: 'Fitted Bedsheet · ₹1,199',
    emi: 'Interested in zero down-payment options',
    attractivenessScore: 48,
    expectedValue: 18490,
    badge: 'Cold lead',
    badgeBg: '#fdecec',
    badgeColor: '#e24b4a',
    statusLabel: 'Cold',
    statusColor: '#8e8e93',
    quoteOn: false,
    icp: 52,
    icpColor: '#c8860a',
    intentScore: 48,
    subscores: [
      { label: 'Budget Fit', pct: 50, color: '#c8860a' },
      { label: 'Need Match', pct: 45, color: '#e24b4a' },
      { label: 'Decision Stage', pct: 30, color: '#7c3aed' }
    ],
    slaNote: 'Cold lead — low touch',
    notes: [
      'Casually browsing options for rental flat.',
      'Not in a rush to buy, evaluating other brands.'
    ],
    problemBuckets: [
      {
        cat: 'Urgency Low',
        text: 'Moving in next month, taking time to decide'
      }
    ],
    journey: [
      { date: '10 May', channel: 'Instagram Ad', icon: '📸', color: '#e1306c', text: 'Engaged with festive discount reel' }
    ],
    phone: '+91 95432 10987',
    actions: 'cold'
  }
];
