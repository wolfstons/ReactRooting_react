import { Outlet } from 'react-router/internal/react-server-client'

function layout() {

  return (
    <>
    <header>
      <h1>Webáruház</h1>
    </header>
    <nav>
      <ul>
        <li><a href="/">Főoldal</a></li>
        <li><a href="/public">Publikus</a></li>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/kosar">Kosár</a></li>
      </ul>
    </nav>
    <main>
      <Outlet/>
    </main>
    <footer>
      <p>&copy; Páczi Balázs</p>
    </footer>
    </>
  )
}

export default layout