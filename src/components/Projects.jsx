import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <div className="section-head">
          <span className="num"></span>
          <h2>Projetos</h2>
        </div>
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <div className="p-subtitle">{project.subtitle}</div>
            <p className="desc">{project.description}</p>
            <ul className="highlight-list">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="chip-row">
              {project.tags.map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
