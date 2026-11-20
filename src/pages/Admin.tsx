import { Outlet } from 'react-router/internal/react-server-client'

function admin() {
  return (
    <main>
      <h1>Admin oldal</h1>
      <Outlet/>
    </main>
  )
}

export default admin