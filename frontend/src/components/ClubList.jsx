import React, { useState } from 'react'
import ClubCard from './ClubCard'

const sampleClubs = [
  { id: 1, abbr: 'OSS', name: 'OSS Club', desc: 'Open source projects and contribution', keywords: ['open-source', 'git'], focusAreas: ['Open source workflows'], activities: ['FSOC'], who: 'FE,SE' },
  { id: 2, abbr: 'GDG', name: 'GDG AIT Pune', desc: 'Google Developer Group activities and events', keywords: ['web', 'cloud'], focusAreas: ['Workshops'], activities: ['Meetups'], who: 'FE,SE' },
  { id: 3, abbr: 'CP', name: 'Coding Club', desc: 'Programming workshops and hackathons', keywords: ['algorithms'], focusAreas: ['Contests'], activities: ['Hackathons'], who: 'FE,SE' },
  { id: 4, abbr: 'RB', name: 'Robotics Club', desc: 'Robotics projects', keywords: ['robotics'], focusAreas: ['Hardware'], activities: ['Projects'], who: 'FE,SE' },
]

export default function ClubList() {
  const [clubs] = useState(sampleClubs)
  return (
    <section className="club-list" aria-label="Sample clubs">
      {clubs.map(c => (
        <ClubCard
          key={c.id}
          abbr={c.abbr}
          name={c.name}
          desc={c.desc}
          keywords={c.keywords}
          focusAreas={c.focusAreas}
          activities={c.activities}
          who={c.who}
          onApply={() => { }}
        />
      ))}
    </section>
  )
}
