import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contato">
      <div className="wrap">
        <h2>Disponível para oportunidades como desenvolvedor full-stack.</h2>
        <p>
          Estou buscando minha primeira posição efetiva como desenvolvedor.
          Entre em contato pelos canais abaixo.
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
