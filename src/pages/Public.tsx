import { Link } from 'react-router'

function Public() {
  return (
    <section>
      <h1>Public oldal</h1>
    <p>itt jelennek meg a termékek</p>
    <Link to="/termek/5">az ötös termék itt jelenik meg</Link>
    </section>
  )
}

export default Public