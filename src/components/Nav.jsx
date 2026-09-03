import { profile } from '../data/content.js'

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">
          <strong>{profile.name}</strong> · {profile.title.toLowerCase()}
        </div>
        <ul>
          <li><a href="#sobre">Resumo</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}
