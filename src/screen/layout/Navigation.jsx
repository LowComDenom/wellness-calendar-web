import { NavLink, Link } from 'react-router'

import useAccount from '../../context/useAccount'

export function TopBar() {
  const { token, logout } = useAccount()

  return <nav className="bg-violet-200 flex justify-evenly mt-1 ml-1 mr-1 p-1 border-3 border-violet-400 rounded-lg">
    <NavButton to="/">Home</NavButton>
    {token ? (
      <>
        <NavButton to="/calendar">Calendar</NavButton>
        <button onClick={() => logout()} className='bg-gray-100 border-3 border-gray-300 rounded-md p-1'>Log out</button>
      </>
    ) : (
      <>
        <NavButton to="/login">Sign In</NavButton>
      </>
    )}
  </nav>
}

function NavButton({ to, children }) {
  return (
    <NavLink to={to} className="bg-gray-100 border-3 border-gray-300 rounded-md p-1">
      {children}
    </NavLink>
  )
}

export function Footer() {
  return <footer className='bg-violet-400 flex flex-col shrink-0 p-1'>
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
