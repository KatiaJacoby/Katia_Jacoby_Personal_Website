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
  // shown in the header under your links
  workedWith: ['Tesla', 'Google', 'Amazon'],
  roles: ['builder', 'student', 'tinkerer', 'problem-solver', 'vibe coder'],

  bio: [
    "Hi! I'm Katia. Right now I'm studying computer science at UC Berkeley, but I'm originally from Ohio. I build backend and infrastructure systems, most recently at Tesla and Google, and I'm looking for software engineering internships for Summer 2027.",
  ],

  // `org` is appended to the end of the line
  now: [
    { label: 'drawn to', text: 'backend & full-stack, with deep infra experience' },
    { label: 'building', text: 'an AI agent with long-term memory for', org: 'Google' },
    { label: 'taking', text: 'Operating Systems, Networking, and Computer Graphics' },
    { label: 'finished', text: 'a summer software engineering internship at', org: 'Tesla' },
  ],

  links: [
    { label: 'GitHub', href: 'https://github.com/KatiaJacoby' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/katia-jacoby-520a10320/' },
    { label: 'Email', href: 'mailto:katiajacoby@berkeley.edu' },
    { label: 'Resume', href: '/Katia_Jacoby_Resume.pdf' },
  ],

  experience: [
    {
      role: 'Contract Project Manager',
      org: 'Google',
      start: 'Fall 2026',
      highlights: [
        'Leading a 6-person team to improve long-term memory for AI agents, extending the open-source Hindsight system on AlloyDB to handle cross-session recall, changing facts, and memory-driven tool calls',
        'Driving evaluation strategy by reproducing the Hindsight baseline, analyzing its failure modes, and benchmarking improvements on Mem2ActBench and LongMemEval for accuracy, latency, and token cost',
      ],
      tags: ['AI Agents', 'AlloyDB', 'Hindsight', 'LongMemEval', 'Mem2ActBench'],
      link: { label: 'View on GitHub', href: 'https://github.com/HenryHamster/alloydb-agentic-tiered-memory' },
    },
    {
      role: 'Software Engineer Intern',
      org: 'Tesla',
      start: 'Summer 2026',
      highlights: [
        'Owned end-to-end architecture of a unified full-stack recruiting platform, merging two internal tools into one system and building interview scheduling, resume ranking, candidate filtering, and an AI assistant that parses recruiter emails to auto-schedule interviews, using Python/FastAPI, PostgreSQL, and Vue.js',
        'Deployed and monitored the platform on Kubernetes, provisioned pods and scheduled cron jobs for automated data syncs, improving system reliability and reducing manual intervention',
      ],
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Vue.js', 'Kubernetes'],
    },
    {
      role: 'Contract Software Engineer',
      org: 'Google',
      start: 'Fall 2025',
      highlights: [
        'Developed open-source tooling for the AlloyDB Omni Kubernetes Operator, enabling diagnostics, performance analysis, resilience testing, and fleet-wide health insights across customer-managed deployments',
        'Built observability dashboards (Grafana, Prometheus, Kube-State-Metrics) to visualize cluster health, backup or restore workflows and operator features, allowing customers to monitor AlloyDB clusters in real time',
      ],
      tags: ['AlloyDB Omni', 'Kubernetes', 'Grafana', 'Prometheus', 'Kube-State-Metrics'],
    },
    {
      role: 'Contract Software Engineer',
      org: 'Amazon',
      start: 'Spring 2025',
      highlights: [
        'Designed and implemented new DeltaCAT 2.0 features in Python with a team of engineers to enable the data lakehouse to become faster and more efficient for AI/ML-ready, industry-scale workflows',
        'Engineered a multi-threaded data conversion flow to transform large-scale web datasets into Rivulet datasets, improving processing speeds by up to 300% over single-threaded performance',
      ],
      tags: ['Python', 'DeltaCAT', 'Rivulet', 'Multithreading'],
    },
    {
      role: 'Contract Software Engineer',
      org: 'Seacology',
      start: 'Fall 2024',
      highlights: [
        'Built a full-stack app (React, Express.js, PostgreSQL) for researchers to organize field data and post updates, with a matching algorithm that cut volunteer allocation time by over 80% for 3,000+ users',
      ],
      tags: ['React', 'Express.js', 'PostgreSQL'],
      link: { label: 'View on GitHub', href: 'https://github.com/brandonwu32/seacologywebsite' },
    },
  ],

  projects: [
    {
      title: 'AlloyDB Agentic Tiered Memory',
      description:
        'Tiered long-term memory for AI agents: recent turns and rolling summaries live in Memorystore for Valkey, while durable facts and episodic memories live in AlloyDB and are retrieved with hybrid search. Built around Retain, Recall, and Reflect pipelines, with a LongMemEval harness for benchmarking.',
      highlights: [
        'On a LoCoMo benchmark conversation, answered 67.8% of questions correctly vs. 24.3% for the original codelab baseline, at less than half the cost per question',
      ],
      tags: ['Python', 'SQL', 'AlloyDB', 'Valkey', 'Vertex AI', 'Google ADK'],
      link: { label: 'View on GitHub', href: 'https://github.com/HenryHamster/alloydb-agentic-tiered-memory' },
    },
    {
      title: 'AlloyDB Omni Observability Stack',
      description:
        'A Helm chart that deploys an end-to-end monitoring stack for AlloyDB Omni on Kubernetes, bundling Prometheus, Loki, and the OpenTelemetry Collector with Grafana dashboards for database- and container-level metrics, alerting rules, and a ServiceMonitor. Merged into Google Cloud\'s official alloydb-omni-samples repo.',
      tags: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Loki', 'OpenTelemetry'],
      link: {
        label: 'View commit',
        href: 'https://github.com/GoogleCloudPlatform/alloydb-omni-samples/commit/106f812ee138cd8a1217c6151c66ec1f4179c648',
      },
    },
    {
      title: 'Pintos OS Kernel Debugging',
      date: 'Aug 2026',
      highlights: [
        'Debugged the Pintos kernel (C) using GDB and Bochs, tracing thread control blocks and interrupt frames across context switches to isolate and fix a kernel-level bug',
        'Implemented a working system call in Pintos by tracing the user-to-kernel call path through intr frame and the x86 stack calling convention',
      ],
      tags: ['C', 'x86', 'GDB', 'Bochs'],
    },
    {
      title: 'Machine Learning & Neural Networks Agent',
      date: 'Apr 2026',
      highlights: [
        'Implemented PyTorch models spanning digit classification (MNIST, 97%), RNN-based language identification (81%), CNNs, and scaled dot-product attention, culminating in a character-level GPT transformer trained on Shakespeare',
      ],
      tags: ['Python', 'PyTorch'],
    },
  ],

  community: {
    photo: { src: '/images/codebase.jpg', alt: 'Codebase members posing together on the steps of a building on the UC Berkeley campus', caption: 'codebase' },
    orgs: [
      {
        name: 'Codebase',
        roles: ['Software Developer', 'Project Manager', 'Internal Vice President'],
        description:
          'A UC Berkeley student organization that builds software for tech companies and nonprofits, helping students break into the industry through real client projects.',
        link: { label: 'codebase.studentorg.berkeley.edu', href: 'https://codebase.studentorg.berkeley.edu/' },
      },
      {
        name: 'CS Kickstart',
        roles: ['Teaching Assistant'],
        description:
          'A free, student-run summer program at Berkeley that introduces incoming women and nonbinary freshmen to computer science, working to close the gender gap in tech.',
        link: { label: 'cskickstart.com', href: 'https://www.cskickstart.com/' },
      },
    ],
  },

  skills: [
    {
      group: 'Languages',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'HTML/CSS', 'RISC-V & x86 Assembly'],
    },
    {
      group: 'Frameworks & Libraries',
      items: ['React', 'Vue.js', 'Express.js', 'FastAPI', 'PyTorch'],
    },
    {
      group: 'Databases & Infrastructure',
      items: ['PostgreSQL', 'AlloyDB', 'Kubernetes', 'Helm', 'Docker', 'Airflow', 'Jenkins'],
    },
    {
      group: 'Monitoring & Tools',
      items: ['Prometheus', 'Grafana', 'Jira', 'Loki', 'Splunk', 'DataGrip', 'Git'],
    },
  ],

  interests: [
    // image: file in /public; focus: which part of the photo to keep when cropped square
    {
      title: 'Piano',
      blurb: '',
      emoji: '🎹',
      image: '/interests/piano.jpg',
      alt: 'Katia performing on a grand piano on stage',
      focus: '38% 50%',
    },
    {
      title: 'Tennis',
      blurb: '',
      emoji: '🎾',
      image: '/interests/tennis.jpg',
      alt: 'A tennis racket and ball on a blue court between two pairs of sneakers',
      focus: '50% 55%',
    },
    {
      title: 'Guitar',
      blurb: '',
      emoji: '🎸',
      image: '/interests/guitar.jpg',
      alt: 'Katia playing an electric guitar in her room',
      focus: '50% 60%',
    },
    {
      title: 'Backpacking',
      blurb: '',
      emoji: '🎒',
      image: '/interests/backpacking.jpg',
      alt: 'Katia and a friend reading a trail map on a granite overlook in Yosemite',
      focus: '50% 100%',
    },
    {
      title: 'My cat',
      blurb: '',
      emoji: '🐈',
      image: '/interests/cat.jpg',
      alt: 'A fluffy tabby and white cat lying belly-up on a bed',
      focus: '100% 50%',
    },
    {
      title: 'My family',
      blurb: '',
      emoji: '📖',
      image: '/interests/family.jpg',
      alt: 'Katia and her two brothers gathered around their dad as he reads a picture book at bedtime',
      focus: '60% 50%',
    },
  ],
}

export const fullName = `${profile.firstName} ${profile.lastName}`
