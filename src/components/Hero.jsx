import { useState } from 'react'
import { profile, stats } from '../data/content.js'

function Avatar() {
  const [failed, setFailed] = useState(false)

  if (!profile.photo || failed) {
    return <div className="avatar avatar-fallback">{profile.initials}</div>
  }

  return (
    <img
      className="avatar avatar-photo"
      src={profile.photo}
      alt={profile.name}
      onError={() => setFailed(true)}
    />
  )
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <div className="kicker">{profile.title}</div>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.lede}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <Avatar />
          <dl className="hero-card-list">
            <div>
              <dt>Localização</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{profile.email}</dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  ver perfil
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  ver perfil
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="wrap">
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
