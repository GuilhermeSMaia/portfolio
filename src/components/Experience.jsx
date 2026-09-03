import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="section-head">
          <span className="num">03</span>
          <h2>Experiência Profissional</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="tl-item" key={job.org}>
              <span className="period">{job.period}</span>
              <h3>{job.org}</h3>
              <div className="org">{job.role}</div>
              <ul className="highlight-list">
                {job.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="chip-row">
                {job.tags.map((tag) => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
