// Master Calls Data and SOP Review Rubrics
export const INITIAL_CALLS = [
  {
    id: 'call-1',
    dir: 'in',
    name: 'Mukunda R.',
    time: '10:42 AM',
    duration: '4m 12s',
    outcome: 'Qualified',
    leadId: 'lead-1',
    sopScore: 83,
    sopChecks: [true, true, true, true, false, true],
    evidence: [
      '"This is Arvind calling from The Sleep Company, is now an okay time?"',
      '"Can I ask what matters most to you — firmness or price?"',
      '"The GRID layer gives pressure relief exactly where you need it."',
      '"We do have a 12-month zero-interest EMI plan available."',
      'Warranty was not explicitly mentioned during the call.',
      '"I will send the quotation right away and note your 6pm preference."'
    ]
  },
  {
    id: 'call-2',
    dir: 'out',
    name: 'Kavitha R.',
    time: 'Yesterday',
    duration: '2m 05s',
    outcome: null,
    leadId: 'lead-2',
    sopScore: 50,
    sopChecks: [true, true, false, true, false, false],
    evidence: [
      '"Hello Kavitha ji, Arvind from The Sleep Company here."',
      '"Just following up to see if you had any thoughts on the mattress?"',
      'Pitch was abbreviated due to customer rush.',
      '"We have flexible payment options if budget is tight."',
      'Warranty details not covered.',
      'Customer had to drop off without firm booking.'
    ]
  },
  {
    id: 'call-3',
    dir: 'missed',
    name: 'Unknown',
    time: 'Yesterday',
    duration: '—',
    leadId: null,
    sopScore: 0,
    sopChecks: [false, false, false, false, false, false],
    evidence: []
  },
  {
    id: 'call-4',
    dir: 'missed',
    name: 'Ritu S.',
    time: 'Today 11:20 AM',
    duration: '—',
    leadId: 'lead-4',
    sopScore: 0,
    sopChecks: [false, false, false, false, false, false],
    evidence: []
  },
  {
    id: 'call-5',
    dir: 'missed',
    name: 'Faizan A.',
    time: 'Today 10:05 AM',
    duration: '—',
    leadId: 'lead-3',
    sopScore: 0,
    sopChecks: [false, false, false, false, false, false],
    evidence: []
  },
  {
    id: 'call-6',
    dir: 'missed',
    name: 'Kavitha R.',
    time: 'Yesterday 4:40 PM',
    duration: '—',
    leadId: 'lead-2',
    sopScore: 0,
    sopChecks: [false, false, false, false, false, false],
    evidence: []
  },
  {
    id: 'call-7',
    dir: 'missed',
    name: 'Divya P.',
    time: 'Yesterday 2:15 PM',
    duration: '—',
    leadId: 'lead-5',
    sopScore: 0,
    sopChecks: [false, false, false, false, false, false],
    evidence: []
  },
  {
    id: 'call-8',
    dir: 'out',
    name: 'Faizan A.',
    time: 'Mon',
    duration: '6m 40s',
    outcome: 'Demo Booked',
    leadId: 'lead-3',
    sopScore: 100,
    sopChecks: [true, true, true, true, true, true],
    evidence: [
      '"Good afternoon Faizan! Calling from The Sleep Company Koramangala."',
      '"Understood you were looking for lumbar relaxation after work hours."',
      '"The Tranquo massage mechanism has 4 calibrated zone modes."',
      '"Offered the 6-month zero-cost EMI breakdown directly."',
      '"Confirmed our comprehensive 3-year warranty and free home assembly."',
      '"Scheduled demo at Koramangala store for Saturday 11am."'
    ]
  }
];

export const SOP_CRITERIA = [
  'Opening & Intent Confirm',
  'Needs Discovery',
  'Product Pitch',
  'EMI / Financing Mention',
  'Warranty Mention',
  'Closing / Callback Booking'
];
