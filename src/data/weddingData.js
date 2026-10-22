const weddingData = {
  brideName: 'Jham',
  groomName: 'Alex',
  seoTitle: 'Jham & Alex | December 18, 2026',
  seoDescription: 'Celebrate Jham and Alex on December 18, 2026 in Baguio City, Philippines.',
  tagline: 'One great love. Two brave hearts. A forever kind of adventure!',
  weddingDate: '2026-12-18T15:00:00+08:00',
  venue: 'Hotel Supreme, Baguio City',
  address: 'Don Bosco Church, Trancoville, Baguio City, Benguet, Philippines',
  heroImage:
    `${import.meta.env.BASE_URL}images/hero-jham-alex.jpg`,
  heroImageAlt: 'A newly married couple embracing by the sea',
  googleMapEmbedUrl:
    'https://maps.google.com/maps?q=Hotel%20Supreme%20Baguio%20City&z=15&output=embed',
  directionsUrl: 'https://maps.google.com/?q=Hotel+Supreme,+Baguio+City',
  rsvpEmailEndpoint: 'https://formsubmit.co/ajax/wedpage8@gmail.com',
  navigation: [
    { label: 'Our story', href: '#story' },
    { label: 'The celebration', href: '#details' },
    { label: 'Attire', href: '#dress-code' },
    { label: 'Moments', href: '#gallery' },
    { label: 'Locations', href: '#location' },
  ],
  dressCode: {
    attire: 'Comic-book cocktail',
    note: 'Dress up in your favorite joyful colors and come ready to celebrate. Baguio evenings can be cool, so bring a light jacket. We kindly reserve white and ivory for the couple.',
    colors: [
      { name: 'Super red', hex: '#ed343c' },
      { name: 'Hero blue', hex: '#174c93' },
      { name: 'Pow yellow', hex: '#ffd447' },
      { name: 'Comic cream', hex: '#fff8e5' },
    ],
  },
  story: [
    {
      date: 'Chapter one',
      title: 'The meet-cute',
      description:
        'Every great adventure starts somewhere. Ours began with a hello, a smile, and the feeling that this could be the start of something wonderful.',
    },
    {
      date: 'Chapter two',
      title: 'Our favorite duo',
      description:
        'From ordinary days to unforgettable adventures, we found our rhythm, made a lifetime of favorite memories, and became each other’s person.',
    },
    {
      date: 'The next chapter',
      title: 'A forever team',
      description:
        'Now we’re ready for our biggest adventure yet: saying “I do” and starting the rest of our story together. We hope you’ll be there for the big scene!',
    },
  ],
  events: [
    {
      name: 'The ceremony',
      time: '3:00 in the afternoon',
      date: 'Friday, December 18',
      detail: 'Please arrive by 2:30 PM',
      location: 'Don Bosco Church, Trancoville',
    },
    {
      name: 'Dinner & dancing',
      time: '5:30 in the evening',
      date: 'Friday, December 18',
      detail: 'Let’s celebrate together!',
      location: 'Hotel Supreme, Baguio City',
    },
  ],
  gallery: [
    {
      src: `${import.meta.env.BASE_URL}images/gallery-celebration.jpg`,
      alt: 'A bride and groom share a joyful wedding moment',
    },
    {
      src: `${import.meta.env.BASE_URL}images/gallery-ceremony.jpg`,
      alt: 'A wedding celebration surrounded by friends and family',
    },
    {
      src: `${import.meta.env.BASE_URL}images/gallery-confetti.jpg`,
      alt: 'Newlyweds celebrating beneath a shower of confetti',
    },
  ],
  copy: {
    brand: 'WedPage',
    skipToContent: 'Skip to content',
    invitation: 'Extra! Extra! You’re invited!',
    heroDateLabel: 'The big day',
    heroCta: 'Power up for the big day',
    countdownEyebrow: 'Mission: wedding day',
    countdownHeading: 'Power up! The big day is coming',
    countdownUnits: ['Days', 'Hours', 'Minutes', 'Seconds'],
    countdownComplete: 'It’s wedding day! Let the adventure begin!',
    storyEyebrow: 'Previously, in the story of us...',
    storyHeading: 'Our love story',
    detailsEyebrow: 'Issue date · Friday, December 18, 2026',
    detailsHeading: 'The wedding-day lineup',
    dressCodeEyebrow: 'Your dress code assignment',
    dressCodeHeading: 'Come as your colorful self',
    dressCodePaletteLabel: 'Comic-book color cues',
    galleryEyebrow: 'Snapshots from our story',
    galleryHeading: 'Love in every frame',
    locationEyebrow: 'The scene of the celebration',
    locationHeading: 'Find our hideout',
    directions: 'Get directions',
    locationNote: 'Your route: Don Bosco Church in Trancoville for the ceremony, then Hotel Supreme for the reception.',
    rsvpEyebrow: 'Your presence is our superpower',
    rsvpHeading: 'Will you join our superhero squad?',
    rsvpDescription: 'Suit up and let us know by December 1, 2026.',
    rsvpNavCta: 'RSVP',
    rsvpNameLabel: 'Full name',
    rsvpAttendanceLabel: 'Will you be joining us?',
    rsvpYes: 'I’ll be there to celebrate!',
    rsvpNo: 'Sending love from afar',
    rsvpCta: 'Send your reply!',
    rsvpSubmitting: 'Sending your reply…',
    rsvpNameRequired: 'Please enter your full name.',
    rsvpSubmitError: 'We could not send your RSVP. Please try again.',
    rsvpActivationNotice:
      'The RSVP email service is awaiting activation. Please check the recipient inbox for its verification email, activate the form, then submit your RSVP again.',
    rsvpDialogHeading: 'Your reply is on its way',
    rsvpDialogSuccess: (name, attendance) =>
      `Thank you, ${name}. Your RSVP was submitted: ${attendance}.`,
    rsvpDialogClose: 'Close',
    newTab: 'Opens in a new tab',
    footerNote: 'Jham & Alex · The greatest love story ever told.',
    backToTop: 'Back to top',
    mapTitle: 'Map to Hotel Supreme in Baguio City',
    dateTimeLocale: 'en-US',
  },
};

export default weddingData;
