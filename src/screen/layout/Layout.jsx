import { Outlet, Link } from "react-router"
import NavBar from "./NavBar"
import Search from "./Search"

export default function Layout() {
  return (
    <div className="container">
      <div className="navbar">
        <NavBar />
        <Search />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <Link to="/about">About</Link>
        <Link to="#">Github</Link>
        Version 0.0
      </footer>
    </div>
  )
}