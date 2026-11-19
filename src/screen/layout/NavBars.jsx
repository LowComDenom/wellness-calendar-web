import { NavLink, Link } from "react-router"

export function TopBar() {
  return <nav className="flex justify-evenly m-1">
    <NavButton to="/">Home</NavButton>
    <NavButton to="/login">Sign In</NavButton>
    <NavButton to="/calendar">Calendar</NavButton>
  </nav>
}

function NavButton({ to, children }) {
  return (
    <NavLink to={to} className="bg-gray-100 border border-gray-300 rounded-md p-1">
      {children}
    </NavLink>
  )
}
export function Footer() {
  return <footer className='bg-indigo-400 flex flex-col shrink-0 p-1'>
    <div className='flex justify-evenly'>
      <FootLink to='/about'>About</FootLink>
      <FootLink to='https://github.com/LowComDenom/wellness-calendar'>Github</FootLink>
    </div>
    <p className='text-white self-center'>Version 0.0</p>
  </footer>
}

function FootLink({ to, children }) {
  return (
    <Link to={to} className='text-white'>
      {children}
    </Link>
  )
}
