import { CaseDto } from './case.docs';

export const data: CaseDto[] = [
  {
    id: 1,
    caseNumber: '#123',
    subject: 'subject1',
    fileLocation: 'location1',
    claimedAmount: 123,
    submitDate: new Date('1995-12-17T03:24:00'),
    registrationDate: new Date('1995-12-17T03:24:00'),
    firstSessionDate: new Date('1995-12-17T03:24:00'),
    caseStatus: 'open',
    nextSessionDate: new Date('1995-12-17T03:24:00'),
    hall: 'hall1',
    secretaryName: 'Namik',
    // lastDecisions: {
    //   decisionNumber: 1,
    //   date: new Date('1995-12-17T03:24:00'),
    //   source: 'source1',
    //   decision: 'decision',
    //   links: ['link1', 'link2'],
    //   caseId: '2',
    // },
    latestSessionDate: new Date('1995-12-17T03:24:00'),
    rootCaseNumber: '#111',
    dateOfAssignation: new Date('1995-12-17T03:24:00'),
    meetingDate: new Date('1995-12-17T03:24:00'),
    dueDate: new Date('1995-12-17T03:24:00'),
    managedBy: 'Lila',
    paymentAmount: 100000,
    paymentStatus: 'paid',
    partiesAddresses: ['address1', 'address2'],
    partiesNames: ['Adna', 'Rukf'],
    notes: ['note1', 'note2'],
    petitionsAttachments: [
      {
          url: 'attachment url',
          author: 'attachment authpr',
          caseId: '1',
      },
  ],
    attachments: [
      {
        url: 'attachment url',
        author: 'attachment authpr',
        caseId: '1',
      },
    ],
    exhibits: [
      { description: 'exhibit description 1', caseId: '1' },
      { description: 'exhibit description 1', caseId: '1' },
    ],
    notices: [
      {
        noticeNumber: '#11',
        type: 'notice 1 type',
        registrationDate: new Date('1995-12-17T03:24:00'),
        links: ['link1', 'link2'],
        parties: ['parties'],
        caseId: '2',
      },
      {
        noticeNumber: '#22',
        type: 'notice 2 type',
        registrationDate: new Date('1995-12-17T03:24:00'),
        links: ['link1-2', 'link2-2'],
        parties: ['parties 2'],
        caseId: '2',
      },
    ],
    decisions: [
      {
        decisionNumber: 1,
        date: new Date('1995-12-17T03:24:00'),
        source: 'decision source',
        decision: 'decision description',
        links: ['link1-1', 'link2-1'],
        caseId: '2',
      },
      {
        decisionNumber: 2,
        date: new Date('1995-12-17T03:24:00'),
        source: 'decision source 2',
        decision: 'decision description 2',
        links: ['link1-2', 'link2-2'],
        caseId: '2',
      },
      {
        decisionNumber: 3,
        date: new Date('1995-12-17T03:24:00'),
        source: 'decision source 3',
        decision: 'decision description 3',
        links: ['link1-3', 'link2-3'],
        caseId: '2',
      },
    ],
    petitions: [
      {
        petitionDate: new Date('1995-12-17T03:24:00'),
        subject: 'petition subject',
        links: ['link1-1', 'link2-1'],
        applicant: 'petition applicant',
        positionNumber: 1,
        decisionNumber: 2,
        decisionAbstract: 'decision abstract',
        sessionDate: new Date('1995-12-17T03:24:00'),
        caseId: '2',
      },
    ],
    verdicts: [
      { verdict: 'verdict#1', caseId: '2' },
      { verdict: 'verdict#2', caseId: '2' },
      { verdict: 'verdict#3', caseId: '2' },
      { verdict: 'verdict#4', caseId: '2' },
    ],
    depositVouchers: [
      { year: 2019, type: 'deposit voucher type', amount: 100000, caseId: '2' },
      { year: 2018, type: 'deposit voucher type', amount: 999999, caseId: '2' },
    ],

    claims: [
      {
        initialClaimAmount: 50,
        currentClaimAmount: 200,
        balanceClaimAmount: 66,
        claimDetails: 'claim details 1',
        caseId: '2',
      },
      {
        initialClaimAmount: 20,
        currentClaimAmount: 50,
        balanceClaimAmount: 30,
        claimDetails: 'claim details 2',
        caseId: '2',
      },
      {
        initialClaimAmount: 100,
        currentClaimAmount: 200,
        balanceClaimAmount: 50,
        claimDetails: 'claim details 3',
        caseId: '2',
      },
      {
        initialClaimAmount: 160,
        currentClaimAmount: 600,
        balanceClaimAmount: 350,
        claimDetails: 'claim details 4',
        caseId: '2',
      },
      {
        initialClaimAmount: 320,
        currentClaimAmount: 800,
        balanceClaimAmount: 500,
        claimDetails: 'claim details 5',
        caseId: '2',
      },
    ],
  },
];