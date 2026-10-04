import { Link } from "react-router"

export default function Login() {
  return (
    <>
      <h2>Log In</h2>
      <form>
        <label>
          Email
          <input />
        </label>
      </form>
      <Link to="/register">Register</Link>
    </>
  )
}