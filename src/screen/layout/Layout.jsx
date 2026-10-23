import { Outlet, Link, NavLink } from "react-router"
import Search from "./Search"

export default function Layout() {
  return (
    <div class="bg-lime-100 flex flex-col">
      <div class="">
        <nav class="bg-amber-200 flex justify-evenly" >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/timeline">Timeline</NavLink>
          <NavLink to="/stats">Statistics</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/404">404</NavLink>
        </nav>
        <Search />
      </div>
      <Outlet />
      <footer class= "bg-blue-100 flex justify-evenly">
        <Link to="/about">About</Link>
        <Link to="#">Github</Link>
        Version 0.0
      </footer>
    </div>
  )
}
