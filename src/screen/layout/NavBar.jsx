import { NavLink } from "react-router"

import Search from "./Search"

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
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
  )
}