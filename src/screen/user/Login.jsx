import { Link } from "react-router"

export default function Login() {
  return (
    <div>
      <h2>Log In</h2>
      <form>
        <label>
          Email
          <input class="bg-gray-400 text-white" />
        </label>
      </form>
      New? <Link to="/register">Register.</Link>
    </div>
  )
}
