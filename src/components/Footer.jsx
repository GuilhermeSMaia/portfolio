import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">{profile.name} © 2026 · Porto Velho, RO</div>
    </footer>
  )
}
