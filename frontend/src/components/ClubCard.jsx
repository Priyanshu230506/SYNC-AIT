import React from 'react'
import cpLogo from '../assets/cp.jpg'
import gdgLogo from '../assets/google-developers.svg'
import ossLogo from '../assets/oss.svg'

export default function ClubCard({ abbr, name, desc, focusAreas = [], activities = [], who, keywords = [], events = [], onApply }) {
  const primaryActivity = (activities && activities.length > 0) ? activities[0] : null

  return (
    <article className="club" aria-labelledby={`${abbr}-title`}>
      <div className="top">
        {abbr === 'OSS' ? (
          <img src={ossLogo} alt={`${name} logo`} className="club-logo" />
        ) : abbr === 'CP' ? (
          <img src={cpLogo} alt={`${name} logo`} className="club-logo" />
        ) : abbr === 'GDG' ? (
          <img src={gdgLogo} alt={`${name} logo`} className="club-logo" />
        ) : (
          <span className="badge">{abbr}</span>
        )}
        <h3 id={`${abbr}-title`} className="section-title title-violet">{name}</h3>
      </div>

      <p className="lead">{desc}</p>

      {keywords && keywords.length > 0 && (
        <div className="keywords" aria-label={`${abbr} keywords`}>
          {keywords.map((k, idx) => (
            <span key={k + idx} className="tag">{k}</span>
          ))}
        </div>
      )}

      <div className="info-grid">
        {focusAreas && focusAreas.length > 0 && (
          <div className="info-item">
            <div className="info-title">Focus</div>
            <div className="info-body">
              <ul className="main-activities">
                {focusAreas.map((f, i) => (<li key={abbr + '-focus-' + i}>{f}</li>))}
              </ul>
            </div>
          </div>
        )}

        {activities && activities.length > 0 && (
          <div className="info-item">
            <div className="info-title">Main activity</div>
            <div className="info-body">
              <ul className="main-activities">
                {activities.map((a, i) => (<li key={abbr + '-act-' + i}>{a}</li>))}
              </ul>
            </div>
          </div>
        )}

        {who && (
          <div className="info-item">
            <div className="info-title">Who</div>
            <div className="info-body">{who}</div>
          </div>
        )}
      </div>

      {events && events.length > 0 && (
        <div className="events-section" aria-label={`${abbr} activities`}>
          <strong>Activities</strong>
          <ul className="events-list">
            {events.map((e, i) => (<li key={abbr + '-evt-' + i}>{e}</li>))}
          </ul>
        </div>
      )}

      <button className="apply-btn" onClick={() => onApply(abbr, name)}>
        Click Here to Apply
      </button>
    </article>
  )
}

