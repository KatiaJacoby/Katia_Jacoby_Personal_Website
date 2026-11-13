import { useState } from 'react'
import { profile } from '../../data/profile'
import './fieldnotes.css'

const TABS = [
  { id: 'about', label: 'About', color: '#e9c46a' },
  { id: 'experience', label: 'Experience', color: '#f4a261' },
  { id: 'skills', label: 'Skills', color: '#a8c5a0' },
  { id: 'interests', label: 'Interests', color: '#9fb8d6' },
]

function About() {
  return (
    <>
      <h2 className="fn-h2">About</h2>
      {profile.bio.map((p, i) => (
        <p key={i} className={i === 0 ? 'fn-lede' : 'fn-p'}>
          {p}
        </p>
      ))}
      <div className="fn-now">
        <span className="fn-now-label">Lately —</span>
        <dl>
          {Object.entries(profile.now).map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}

function Experience() {
  return (
    <>
      <h2 className="fn-h2">Experience</h2>
      <ol className="fn-timeline">
        {profile.experience.map((e, i) => (
          <li key={i} className="fn-entry" style={{ '--d': `${i * 70}ms` }}>
            <div className="fn-entry-date">
              {e.start}
              <br />
              <span>to {e.end}</span>
            </div>
            <div className="fn-entry-body">
              <h3>
                {e.role} <span className="fn-at">at</span> <em>{e.org}</em>
              </h3>
              <p className="fn-entry-meta">{e.location}</p>
              <p className="fn-p">{e.summary}</p>
              <ul className="fn-bullets">
                {e.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="fn-tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {e.note && <p className="fn-scribble">↳ {e.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

function Skills() {
  let n = 0
  return (
    <>
      <h2 className="fn-h2">Index of Skills</h2>
      <p className="fn-p fn-muted">Filled dots = how comfortable I am. Read it like the back of a book.</p>
      <div className="fn-index">
        {profile.skills.map((g) => (
          <section key={g.group}>
            <h3 className="fn-index-group">{g.group}</h3>
            <ul>
              {g.items.map((s) => {
                n += 1
                return (
                  <li key={s.name} style={{ '--d': `${n * 30}ms` }}>
                    <span className="fn-index-name">{s.name}</span>
                    <span className="fn-leader" aria-hidden="true" />
                    <span className="fn-dots" aria-label={`${s.level} out of 5`}>
                      {Array.from({ length: 5 }, (_, k) => (
                        <i key={k} className={k < s.level ? 'on' : ''} />
                      ))}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}

function Interests() {
  return (
    <>
      <h2 className="fn-h2">Things I Love</h2>
      <div className="fn-polaroids">
        {profile.interests.map((it, i) => (
          <figure key={it.title} className="fn-polaroid" style={{ '--r': `${((i * 37) % 7) - 3}deg`, '--d': `${i * 60}ms` }}>
            <div className="fn-polaroid-img">
              <span>{it.emoji}</span>
            </div>
            <figcaption>
              <strong>{it.title}</strong>
              <span>{it.blurb}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

const PANELS = { about: About, experience: Experience, skills: Skills, interests: Interests }

export default function FieldNotes() {
  const [tab, setTab] = useState('about')
  const Panel = PANELS[tab]

  return (
    <div className="fn">
      <header className="fn-header">
        <p className="fn-kicker">Field notes on</p>
        <h1 className="fn-name">
          {profile.firstName}
          <br />
          <em>{profile.lastName}</em>
        </h1>
        <p className="fn-tagline">{profile.tagline}</p>
        <p className="fn-meta">
          {profile.location} · {profile.school}
        </p>
        <ul className="fn-links">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="fn-hint">pick a tab, any tab →</p>
      </header>

      <main className="fn-folder">
        <div className="fn-tabs" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`fn-tab ${tab === t.id ? 'is-active' : ''}`}
              style={{ '--c': t.color, '--i': i }}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="fn-paper" role="tabpanel">
          <div className="fn-paper-scroll" key={tab}>
            <Panel />
          </div>
        </div>
      </main>
    </div>
  )
}
