import { Link } from "react-router"

export default function Landing() {
  return (
    <>
      <h1>Welcome to Wellness Calendar</h1>
      <footer>
        <Link to="/about">About</Link>
      </footer>
    </>
  )
}
