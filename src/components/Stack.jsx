import { skills } from '../data/content.js'

export default function Stack() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="num">02</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-groups">
          {skills.map((group) => (
            <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.items.map((item, i) => {
                  const isObject = typeof item === 'object'
                  const name = isObject ? item.name : item
                  const learning = isObject && item.learning
                  return (
                    <li key={i} className={learning ? 'learning' : undefined}>
                      {name}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
