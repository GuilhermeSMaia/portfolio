import { education } from '../data/content.js'

export default function Education() {
  return (
    <section id="formacao">
      <div className="wrap">
        <div className="section-head">
          <span className="num">05</span>
          <h2>Formação</h2>
        </div>
        {education.map((edu) => (
          <div className="edu-row" key={edu.title}>
            <div className="school">
              <strong>{edu.title}</strong>
              {edu.place}
            </div>
            <div className="period">{edu.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
