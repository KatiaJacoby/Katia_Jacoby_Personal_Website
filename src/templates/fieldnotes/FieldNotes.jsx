import { useState } from 'react'
import { profile } from '../../data/profile'
import PixelCat from './PixelCat.jsx'
import './fieldnotes.css'

const TABS = [
  { id: 'about', label: 'About', color: '#e9c46a' },
  { id: 'experience', label: 'Experience', color: '#f4a261' },
  { id: 'projects', label: 'Projects', color: '#d9a5b3' },
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
      <div className="fn-now-row">
        <div className="fn-now">
          <span className="fn-now-label">Lately —</span>
          <dl>
            {profile.now.map((n) => (
              <div key={n.label}>
                <dt>{n.label}</dt>
                <dd>
                  {n.text}
                  {n.org && ` ${n.org}`}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="fn-cat-slot">
          <PixelCat />
        </div>
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
              {e.end && (
                <>
                  <br />
                  <span>to {e.end}</span>
                </>
              )}
            </div>
            <div className="fn-entry-body">
              <h3>
                <span className="fn-org">{e.org}</span> <span className="fn-at">·</span>{' '}
                <span className="fn-role">{e.role}</span>
              </h3>
              {e.location && <p className="fn-entry-meta">{e.location}</p>}
              {e.summary && <p className="fn-p">{e.summary}</p>}
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
              {e.link && (
                <a className="fn-project-link" href={e.link.href} target="_blank" rel="noreferrer">
                  {e.link.label} ↗
                </a>
              )}
              {e.note && <p className="fn-scribble">↳ {e.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

function Projects() {
  return (
    <>
      <h2 className="fn-h2">Projects</h2>
      <div className="fn-projects">
        {profile.projects.map((p, i) => (
          <article key={p.title} className="fn-project" style={{ '--d': `${i * 70}ms` }}>
            <div className="fn-project-head">
              <h3>{p.title}</h3>
              {p.date && <span className="fn-project-date">{p.date}</span>}
            </div>
            {p.description && <p className="fn-p">{p.description}</p>}
            {p.highlights && (
              <ul className="fn-bullets">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
            <div className="fn-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a className="fn-project-link" href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  )
}

function Skills() {
  let n = 0
  return (
    <>
      <h2 className="fn-h2">Skills</h2>
      <div className="fn-index">
        {profile.skills.map((g) => (
          <section key={g.group} className="fn-index-row">
            <h3 className="fn-index-group">{g.group}</h3>
            <ul className="fn-index-items">
              {g.items.map((s) => {
                n += 1
                return (
                  <li key={s} style={{ '--d': `${n * 25}ms` }}>
                    {s}
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
              {it.image ? (
                <img src={it.image} alt={it.alt ?? it.title} loading="lazy" style={{ objectPosition: it.focus }} />
              ) : (
                <span>{it.emoji}</span>
              )}
            </div>
            <figcaption>
              <strong>{it.title}</strong>
              {it.blurb && <span>{it.blurb}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

const PANELS = { about: About, experience: Experience, projects: Projects, skills: Skills, interests: Interests }

function Community() {
  const { photo, orgs } = profile.community
  return (
    <section className="fn-community" aria-labelledby="fn-community-title">
      <p className="fn-kicker">↓ outside the classroom</p>
      <h2 id="fn-community-title" className="fn-h2">Community</h2>
      <figure className="fn-photo">
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <figcaption>{photo.caption}</figcaption>
      </figure>
      <div className="fn-clubs">
        {orgs.map((o) => (
          <article key={o.name} className="fn-club">
            <h3>{o.name}</h3>
            <ul className="fn-club-roles">
              {o.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="fn-p">{o.description}</p>
            <a className="fn-project-link" href={o.link.href} target="_blank" rel="noreferrer">
              {o.link.label} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

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
        <p className="fn-meta">
          {profile.location} · {profile.school}
        </p>
        {profile.workedWith?.length > 0 && (
          <div className="fn-worked">
            <p className="fn-worked-label">worked with</p>
            <ul className="fn-worked-list">
              {profile.workedWith.map((c) => (
                <li key={c}>
                  <strong className="fn-pop">{c}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="fn-folder">
        <div className="fn-tabbar">
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
          <nav aria-label="Links">
            <ul className="fn-links fn-toplinks">
              {profile.links.map((l) => {
                const external = l.href.startsWith('http') || l.href.endsWith('.pdf')
                return (
                  <li key={l.label}>
                    <a href={l.href} target={external ? '_blank' : undefined} rel="noreferrer">
                      {l.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="fn-paper" role="tabpanel">
          <div className="fn-paper-scroll" key={tab}>
            <Panel />
          </div>
        </div>
      </main>

      <Community />
    </div>
  )
}
