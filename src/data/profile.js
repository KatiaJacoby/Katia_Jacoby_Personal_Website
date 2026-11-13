// ─────────────────────────────────────────────────────────────
// All site content lives here. Every template reads from this
// file, so edit once and every design updates.
// Everything below is PLACEHOLDER content — swap in the real stuff.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: 'Katia',
  lastName: 'Jacoby',
  tagline: 'Builder, student, and professionally curious person.',
  location: 'Berkeley, CA',
  school: 'UC Berkeley',
  roles: ['builder', 'student', 'tinkerer', 'problem-solver', 'vibe coder'],

  bio: [
    "Hi! I'm Katia. I like making things that are useful, a little bit delightful, and occasionally both at once.",
    "Right now I'm studying at UC Berkeley and spending my free time building side projects, learning new tools, and asking too many questions. This paragraph is a placeholder, so tell me what you actually want it to say.",
  ],

  now: {
    building: 'this website',
    reading: 'a book worth recommending',
    listening: 'an album on repeat',
  },

  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:hello@example.com' },
    { label: 'Resume', href: '#' },
  ],

  experience: [
    {
      role: 'Software Engineering Intern',
      org: 'Company Name',
      start: 'Jun 2025',
      end: 'Aug 2025',
      location: 'San Francisco, CA',
      summary: 'One-line description of the team and what you owned.',
      highlights: [
        'Shipped a feature that did a measurable thing (+X%)',
        'Built an internal tool used by N people',
      ],
      tags: ['React', 'TypeScript', 'Postgres'],
      note: 'favorite summer so far',
    },
    {
      role: 'Research Assistant',
      org: 'University Lab',
      start: 'Jan 2025',
      end: 'Present',
      location: 'Berkeley, CA',
      summary: 'What the lab studies and what your piece of it is.',
      highlights: [
        'Ran experiments / wrote analysis pipelines',
        'Co-authored a paper or poster',
      ],
      tags: ['Python', 'Data'],
      note: 'learned to love ugly data',
    },
    {
      role: 'Officer / Project Lead',
      org: 'Student Organization',
      start: 'Aug 2024',
      end: 'Present',
      location: 'Berkeley, CA',
      summary: 'Leadership role, club, or community you help run.',
      highlights: [
        'Led a team of N on a project for a real client',
        'Organized events for 100+ students',
      ],
      tags: ['Leadership', 'Product'],
      note: '',
    },
    {
      role: 'Earlier Role',
      org: 'First Job / Volunteer Gig',
      start: '2023',
      end: '2024',
      location: 'Hometown',
      summary: 'Something you did before that shaped how you work.',
      highlights: ['A thing you are proud of from this one'],
      tags: ['Communication'],
      note: 'where it all started',
    },
  ],

  // level: 1 (learning) → 5 (very comfortable)
  skills: [
    {
      group: 'Languages',
      items: [
        { name: 'JavaScript', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'Java', level: 3 },
        { name: 'SQL', level: 3 },
        { name: 'HTML / CSS', level: 5 },
      ],
    },
    {
      group: 'Frameworks & Tools',
      items: [
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 3 },
        { name: 'Git', level: 4 },
        { name: 'Figma', level: 3 },
        { name: 'Vercel', level: 2 },
      ],
    },
    {
      group: 'Other',
      items: [
        { name: 'Data Analysis', level: 3 },
        { name: 'Public Speaking', level: 4 },
        { name: 'Product Thinking', level: 3 },
        { name: 'Spanish', level: 2 },
      ],
    },
  ],

  interests: [
    { emoji: '☕️', title: 'Coffee runs', blurb: 'Ranking every café within walking distance.' },
    { emoji: '🏃‍♀️', title: 'Running', blurb: 'Slow miles, good playlists.' },
    { emoji: '📚', title: 'Reading', blurb: 'Fiction on weekends, non-fiction on planes.' },
    { emoji: '🎨', title: 'Making things', blurb: 'Sketching, crafting, and other hands-on projects.' },
    { emoji: '✈️', title: 'Travel', blurb: 'Collecting cities and street food.' },
    { emoji: '🎧', title: 'Music', blurb: 'Always taking recommendations.' },
  ],
}

export const fullName = `${profile.firstName} ${profile.lastName}`
