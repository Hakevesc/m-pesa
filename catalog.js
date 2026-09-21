/* ------------------------------------------------------------------
   Shared product catalog - quick actions per product and operator role,
   transcribed from "Quick action features 2.pptx".

   Used by index.html (variant home screen) and quick-actions.html
   (compact spec list). Add or edit entries here only.
   ------------------------------------------------------------------ */
(function (root) {
  var REQUEST_PAYMENT_WALLET = {
    label: 'Request Payment', icon: 'request', children: [
      { label: 'Generate QR' },
      { label: 'Request to pay', children: [
        { label: 'From M-PESA wallet via link' },
        { label: 'From international card via link' }
      ]}
    ]
  };

  var REQUEST_PAYMENT_LOCAL = {
    label: 'Request Payment', icon: 'request', children: [
      { label: 'Generate QR' },
      { label: 'Request to pay', children: [
        { label: 'Local payment via link' },
        { label: 'International card via link' }
      ]}
    ]
  };

  var WITHDRAW_TO_BANK = {
    label: 'Withdraw to bank', children: [
      { label: 'Withdraw to my bank' },
      { label: 'Withdraw to other bank' }
    ]
  };

  var PRODUCTS = [
    {
      name: 'Unified · Primary & Finance',
      note: 'Unified Product as Primary Operator and Finance Operator',
      variants: [
        {
          name: 'HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              WITHDRAW_TO_BANK,
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Collect balance' }
            ]}
          ]
        },
        {
          name: 'Own Store',
          note: 'Own store · not agency banking / payment merchant type',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Assisted Payment', icon: 'assist', children: [
              { label: 'EEU' }, { label: 'Water' }, { label: 'School' }
            ]},
            { label: 'Deposit', icon: 'deposit' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'EVD' },
              { label: 'Sell Float' }
            ]}
          ]
        },
        {
          name: 'Independent Store',
          note: 'Independent store · not agency banking / payment merchant',
          actions: [
            REQUEST_PAYMENT_LOCAL,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Assisted Payment', icon: 'assist', children: [
              { label: 'EEU' }, { label: 'Water' }, { label: 'School Payment' }
            ]},
            { label: 'Deposit', icon: 'deposit' },
            { label: 'Self Service', icon: 'self', children: [
              WITHDRAW_TO_BANK,
              { label: 'Add Money' },
              { label: 'Transfer Float to Print A/C' },
              { label: 'EVD' }
            ]}
          ]
        },
        {
          name: 'Agency Banking',
          note: 'Agency banking classification · unified independent and own store',
          actions: [
            { label: 'Transfer to bank', icon: 'bank' },
            { label: 'Deposit', icon: 'deposit' },
            { label: 'Assisted Payment', icon: 'assist', children: [
              { label: 'School Payment' }, { label: 'Water' }, { label: 'EEU' }
            ]},
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my own bank' },
              { label: 'Add Money' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Unified · Assistant',
      note: 'Unified Product as an Assistant Operator',
      variants: [
        {
          name: 'HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Roll up / Collect balance' }
            ]}
          ]
        },
        {
          name: 'Own Store',
          note: 'Own store · not agency banking category',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Assisted Payment', icon: 'assist', children: [
              { label: 'School Payment' }, { label: 'Water' }, { label: 'EEU' }
            ]},
            { label: 'Deposit', icon: 'deposit' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'EVD' }
            ]}
          ]
        },
        {
          name: 'Independent Store',
          note: 'Independent store · not agency banking category',
          actions: [
            REQUEST_PAYMENT_LOCAL,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Assisted Payment', icon: 'assist', children: [
              { label: 'EEU' }, { label: 'Water' }, { label: 'School Payment' }
            ]},
            { label: 'Deposit', icon: 'deposit' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'Transfer Float to Print A/C' },
              { label: 'EVD' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Large & Medium · Primary & Finance',
      note: 'Large and Medium Merchant Product with Primary and Finance Operator',
      variants: [
        {
          name: 'Large HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              WITHDRAW_TO_BANK,
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Collect balance' }
            ]}
          ]
        },
        {
          name: 'Large Own Store',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' }
            ]}
          ]
        },
        {
          name: 'Medium HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              WITHDRAW_TO_BANK,
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Collect Balance' }
            ]}
          ]
        },
        {
          name: 'Medium Own Store',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Large & Medium · Assistant',
      note: 'Large and Medium Merchant Product as an Assistant Operator',
      variants: [
        {
          name: 'Large HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Collect Balance' }
            ]}
          ]
        },
        {
          name: 'Large Own Store',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' }
            ]}
          ]
        },
        {
          name: 'Medium HO',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' },
              { label: 'Distribute Float' },
              { label: 'Collect Balance' }
            ]}
          ]
        },
        {
          name: 'Medium Own Store',
          actions: [
            REQUEST_PAYMENT_WALLET,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to my bank' },
              { label: 'Add Money' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Micro · Primary & Finance',
      note: 'Micro Merchant Product with Primary and Finance Operator',
      variants: [
        {
          name: 'Micro Merchant',
          note: 'Airtime channel classification and payment merchant type',
          actions: [
            REQUEST_PAYMENT_LOCAL,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Withdraw to bank' },
              { label: 'Add Money' },
              { label: 'Transfer float to Print A/C' },
              { label: 'EVD' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Micro · Assistant',
      note: 'Micro Merchant Product as an Assistant Operator',
      variants: [
        {
          name: 'Micro Merchant',
          note: 'Airtime channel classification or merchant type',
          actions: [
            REQUEST_PAYMENT_LOCAL,
            { label: 'Sell Airtime', icon: 'airtime' },
            { label: 'Sell Package', icon: 'package' },
            { label: 'Self Service', icon: 'self', children: [
              { label: 'Add Money' },
              { label: 'Transfer float to Print A/C' },
              { label: 'EVD' }
            ]}
          ]
        }
      ]
    },

    {
      name: 'Distribution · Primary',
      note: 'Distribution Product with Primary Operator',
      variants: [
        {
          name: 'Distribution HO',
          actions: [
            { label: 'Sell Float', icon: 'float', children: [
              { label: 'Sell Float to Print A/C' },
              { label: 'Sell Float to Working A/C' }
            ]},
            { label: 'EVD', icon: 'evd' },
            { label: 'Distribute Float', icon: 'distribute' },
            { label: 'Check Store Balance', icon: 'balance' }
          ]
        },
        {
          name: 'Shop Manager',
          actions: [
            { label: 'Distribute Float', icon: 'distribute' },
            { label: 'EVD', icon: 'evd' },
            { label: 'Sell Float to Print A/C', icon: 'float' },
            { label: 'Check Store Balance', icon: 'balance' }
          ]
        },
        {
          name: 'DSA',
          actions: [
            { label: 'Distribute Float', icon: 'distribute' },
            { label: 'Sell Float to Print A/C', icon: 'float' }
          ]
        }
      ]
    },

    {
      name: 'Distribution · Assistant',
      note: 'Distribution Product with Assistant Operator',
      variants: [
        {
          name: 'Distribution HO',
          actions: [
            { label: 'Sell Float', icon: 'float', children: [
              { label: 'Sell Float to Print A/C' },
              { label: 'Sell Float to Working A/C' }
            ]},
            { label: 'EVD', icon: 'evd' },
            { label: 'Distribute Float', icon: 'distribute' }
          ]
        },
        {
          name: 'Shop Manager',
          actions: [
            { label: 'Distribute Float', icon: 'distribute' },
            { label: 'EVD', icon: 'evd' },
            { label: 'Sell Float to Print A/C', icon: 'float' }
          ]
        },
        {
          name: 'DSA',
          actions: [
            { label: 'Distribute Float', icon: 'distribute' },
            { label: 'Sell Float to Print A/C', icon: 'float' }
          ]
        }
      ]
    }
  ];


  /* ------------------------------------------------------------------
     Balance card spec (per product). Each entry is one card on the home
     screen; the strings are cell keys resolved by BALANCE_CELLS below.
     Products without `cards` fall back to DEFAULT_CARDS.
     ------------------------------------------------------------------ */
  /* The card layout never changes - these are the four slots of each card.
     A product simply switches individual cells on or off (see `balances`). */
  /* Fixed slots of each card: [row][left candidates, right candidates].
     The first candidate a product actually has wins that slot; slots the
     product does not have stay empty, nothing shifts. */
  var CARD_LAYOUT = [
    [                                   /* main card */
      [['working'],                 ['loyalty', 'reward']],
      [['mekoya', 'mekoyaOff'],     ['commission']]
    ],
    [                                   /* print account card */
      [['print'], []]
    ]
  ];

  var ALL_CELLS = ['working', 'print', 'loyalty', 'mekoya', 'commission'];
  var WORKING_COMMISSION = ['working', 'commission'];

  var BALANCE_CELLS = {
    working:    { label: 'Working Account Balance', value: '24,605.00', unit: 'ETB', big: true, eye: true },
    print:      { label: 'Printing Account Balance', value: '4,605.00', unit: 'ETB', big: true },
    commission: { label: 'Commission',      value: '0.00',    unit: 'ETB' },
    mekoya:     { label: 'Mekoya Balance',  value: '100.00',  unit: 'ETB' },
    loyalty:    { label: 'Loyalty Points',  value: '50 Point', link: '8.html' },
    reward:     { label: 'Reward Points',   value: '0.00',    unit: 'ETB' },
    mekoyaOff:  { label: 'Mekoya Balance',  value: 'Activate', activate: true }
  };

  /* Products whose balance card is Working Account Balance + Commission only
     (Reward Points and Mekoya Balance are not part of their design). */
  var AGENCY_AND_DISTRIBUTION = [
    'Agency · Head Office',
    'Agency · Independent Store',
    'Agency · Store',
    'Master Agent · Head Office',
    'Super-Agent · Head Office',
    'Super-Agent · Store',
    'Distribution Own · HO',
    'Distributor Aggregator · HO',
    'Distribution Own Store · Level 2',
    'Distribution Own Store · Level 3',
    'Large Merchant · HO'
  ].map(function (name) {
    return {
      name: name,
      note: name.replace(' · ', ' - ') + ' product',
      variants: [{ name: 'Default', balances: WORKING_COMMISSION, actions: [] }]
    };
  });

  PRODUCTS = PRODUCTS.concat(AGENCY_AND_DISTRIBUTION);

  /* Balance card per product + variant, from the spec tables.
     Keys: working, print, loyalty, reward, mekoya, mekoyaOff, commission. */
  var BALANCE_SPEC = {
    'Unified HO':                 ['working', 'commission'],              // Unified merchant aggregator HO
    'Unified Own Store':          ['working', 'reward', 'commission'],
    'Unified Independent Store':  ['working', 'reward', 'commission', 'print'],
    'Large Merchant HO':          ['working', 'commission'],
    'Large Own Store':            ['working', 'reward'],                  // large merchant store
    'Medium Merchant HO':         ['working'],
    'Medium Merchant Own Store':  ['working', 'reward'],
    'Micro Merchant':             ['working', 'reward', 'mekoyaOff', 'print']
  };

  /* Resolve a variant to its spec row: HO / store name within the product. */
  PRODUCTS.forEach(function (p) {
    p.variants.forEach(function (v) {
      if (v.balances) return;
      var key = null;
      if (p.name.indexOf('Unified') === 0)            key = 'Unified ' + v.name;
      else if (p.name.indexOf('Large & Medium') === 0) key = v.name === 'Large HO' ? 'Large Merchant HO'
                                                          : v.name === 'Large Own Store' ? 'Large Own Store'
                                                          : v.name === 'Medium HO' ? 'Medium Merchant HO'
                                                          : 'Medium Merchant Own Store';
      else if (p.name.indexOf('Micro') === 0)          key = 'Micro Merchant';
      if (key && BALANCE_SPEC[key]) v.balances = BALANCE_SPEC[key];
    });
  });


  var ICONS = {
    request: '<svg viewBox="0 0 24 24" fill="#fff"> <path d="M2.8 14.9c0-.6.4-1 1-1h2.4l2 1.6c.4.3.9.5 1.4.5h3c.5 0 .9.4.9.9s-.4.9-.9.9h-3.4v1.5h3.8c.8 0 1.6-.3 2.2-.8l3.1-2.6c.6-.5 1.5-.4 2 .2.5.6.4 1.5-.2 2l-4.1 3.4c-.7.6-1.6.9-2.5.9H3.8c-.6 0-1-.4-1-1v-6.5z"/> <path d="M17.1 2.8c-4.2 0-7.6 3.1-7.9 7-.1.8.5 1.4 1.3 1.4h1.4c2.5 0 4.7-1.8 5.2-4.2.2-1.2.8-2.2 1.5-3.1.4-.5.1-1.1-.5-1.1z"/> </svg>',
    qr:        '<svg viewBox="0 0 24 24"><path d="M2 4.5C2 3.1 3.1 2 4.5 2H8v2.4H4.4V8H2V4.5zM16 2h3.5C20.9 2 22 3.1 22 4.5V8h-2.4V4.4H16V2zM22 16v3.5c0 1.4-1.1 2.5-2.5 2.5H16v-2.4h3.6V16H22zM8 22H4.5C3.1 22 2 20.9 2 19.5V16h2.4v3.6H8V22z"/><rect x="3" y="10.9" width="18" height="2.2" rx="1.1"/></svg>',
    self:      '<svg viewBox="0 0 24 24" fill="#fff"> <path d="M12 3.4 2.6 8 12 12.6 21.4 8 12 3.4z"/> <path d="M4.9 11.6 2.6 12.7 12 17.3l9.4-4.6-2.3-1.1L12 15.1l-7.1-3.5z" opacity=".75"/> <circle cx="17.7" cy="17.4" r="4.6"/> <path d="m15.7 17.4 1.5 1.5 3-3.1" fill="none" stroke="#e8343e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
    airtime:   '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"> <rect x="4.4" y="3" width="9.8" height="18" rx="2.3"/> <path d="M8.1 17.9h2.4"/> <path d="M17.2 7.7a4.5 4.5 0 0 1 0 6.4"/> <path d="M19.8 5.2a8 8 0 0 1 0 11.4"/> </svg>',
    package:   '<svg viewBox="0 0 24 24" fill="#fff"> <path d="M12 2.4 2.2 7.3 12 12.2l9.8-4.9L12 2.4z"/> <path d="M4.6 11.1 2.2 12.3 12 17.2l9.8-4.9-2.4-1.2L12 14.8l-7.4-3.7z"/> <path d="M4.6 15.5 2.2 16.7 12 21.6l9.8-4.9-2.4-1.2L12 19.2l-7.4-3.7z"/> </svg>',
    assist:    '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"> <rect x="4.4" y="3" width="9.8" height="18" rx="2.3"/> <rect x="6.9" y="8.4" width="4.8" height="3.5" rx="1" fill="#fff" stroke="none"/> <path d="M8.1 17.9h2.4"/> <path d="M17.2 7.7a4.5 4.5 0 0 1 0 6.4"/> <path d="M19.8 5.2a8 8 0 0 1 0 11.4"/> </svg>',
    deposit:   '<svg viewBox="0 0 24 24" fill="#fff"> <g transform="rotate(-9 12 12)"> <rect x="2.4" y="10" width="19.2" height="9.2" rx="1.7" opacity=".5"/> <rect x="2.4" y="6.2" width="19.2" height="9.2" rx="1.7"/> <circle cx="7.6" cy="10.8" r="1.1" fill="#e8343e"/> <circle cx="12" cy="10.8" r="1.1" fill="#e8343e"/> <circle cx="16.4" cy="10.8" r="1.1" fill="#e8343e"/> </g> </svg>',
    bank:      '<svg viewBox="0 0 24 24"><path d="M12 3 2.5 8.2V10h19V8.2zM4.5 11.5h2.4v6.8H4.5zm6.3 0h2.4v6.8h-2.4zm6.3 0h2.4v6.8h-2.4zM2.5 19.8h19V22h-19z"/></svg>',
    float:     '<svg viewBox="0 0 24 24" fill="#fff"> <g transform="rotate(-9 12 12)"> <rect x="2.4" y="10" width="19.2" height="9.2" rx="1.7" opacity=".5"/> <rect x="2.4" y="6.2" width="19.2" height="9.2" rx="1.7"/> <circle cx="7.6" cy="10.8" r="1.1" fill="#e8343e"/> <circle cx="12" cy="10.8" r="1.1" fill="#e8343e"/> <circle cx="16.4" cy="10.8" r="1.1" fill="#e8343e"/> </g> </svg>',
    evd:       '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"> <rect x="4.4" y="3" width="9.8" height="18" rx="2.3"/> <path d="M8.1 17.9h2.4"/> <path d="M17.2 7.7a4.5 4.5 0 0 1 0 6.4"/> <path d="M19.8 5.2a8 8 0 0 1 0 11.4"/> </svg>',
    distribute:'<svg viewBox="0 0 24 24" fill="#fff"> <path d="M2.8 14.9c0-.6.4-1 1-1h2.4l2 1.6c.4.3.9.5 1.4.5h3c.5 0 .9.4.9.9s-.4.9-.9.9h-3.4v1.5h3.8c.8 0 1.6-.3 2.2-.8l3.1-2.6c.6-.5 1.5-.4 2 .2.5.6.4 1.5-.2 2l-4.1 3.4c-.7.6-1.6.9-2.5.9H3.8c-.6 0-1-.4-1-1v-6.5z"/> <path d="M17.1 2.8c-4.2 0-7.6 3.1-7.9 7-.1.8.5 1.4 1.3 1.4h1.4c2.5 0 4.7-1.8 5.2-4.2.2-1.2.8-2.2 1.5-3.1.4-.5.1-1.1-.5-1.1z"/> </svg>',
    balance:   '<svg viewBox="0 0 24 24" fill="#fff"> <path d="M12 3.4 2.6 8 12 12.6 21.4 8 12 3.4z"/> <path d="M4.9 11.6 2.6 12.7 12 17.3l9.4-4.6-2.3-1.1L12 15.1l-7.1-3.5z" opacity=".75"/> <circle cx="17.7" cy="17.4" r="4.6"/> <path d="m15.7 17.4 1.5 1.5 3-3.1" fill="none" stroke="#e8343e" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
  };


  root.QA_CATALOG = {
    PRODUCTS: PRODUCTS,
    ICONS: ICONS,
    BALANCE_CELLS: BALANCE_CELLS,
    CARD_LAYOUT: CARD_LAYOUT,
    ALL_CELLS: ALL_CELLS
  };
})(window);
