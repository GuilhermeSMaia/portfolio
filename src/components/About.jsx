import { summary } from '../data/content.js'

export default function About() {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="section-head">
          <span className="num">01</span>
          <h2>Resumo Profissional</h2>
        </div>
        <p className="summary-text">{summary}</p>
      </div>
    </section>
  )
}
